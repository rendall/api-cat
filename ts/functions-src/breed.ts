import { Context, Handler, Callback } from 'aws-lambda'
import { MongoClient, ObjectId, Db, Collection } from 'mongodb';
import { config as dotenvConfig } from 'dotenv'

// Add .env variables to code:
dotenvConfig()
const connectionString = process.env.DB_READER_CONNECTION!
const dbName = process.env.DB_NAME!
const collectionName = process.env.COLLECTON_NAME!

// Make sure that .env variables are defined
if ([connectionString, dbName, collectionName].some( envVar => !envVar)) throw new Error("environment variables not declared. Check that .env exists")

// This is the serverless function handler
// It identifies the kind of data expected and returns its respective
// function call
export const handler: Handler = (event: Event, context: Context, callback: Callback) => {
  context.callbackWaitsForEmptyEventLoop = false // will return data as soon as callback is called.

  const searchTerm = event.queryStringParameters.search
  const id: string = normalizePath(event.path).split('/').pop()! // just takes the last directory as id, unless it is 'breed', the entry point. one potential problem of this approach is that anything will work as long as the last dir on the path is a proper id

  // these validate incoming data
  // reject any input that does not validate here
  const isBreedId = (maybe: string) => maybe.match(/^[\w\d]{24}$/) // only alphanumeric exactly 24 characters
  const isValidSearch = (term: string) => term.match(/^[\w\s]*$/) // only letters and spaces

  const hasId = id !== 'breed' // the last term in the path without an id will be the entrypoint, 'breed' in this case
  const hasSearchTerm = searchTerm !== undefined

  if (hasId) {
    // if the path has an id or an attempt at one then ignore query params
    if (!isBreedId(id)) callback(null, { statusCode: 404, body: `Error: unknown or badly-formatted id '${id}'` })
    else getBreed(id).then((breed) => callback(null, { statusCode: 200, body: JSON.stringify(breed) })).catch( err => callback( sendError(err)))
  }
  else if (hasSearchTerm) {
    if (!isValidSearch(searchTerm!)) callback(null, { statusCode: 400, body: `Error: '${searchTerm}' includes invalid characters` })
    else searchBreed(searchTerm!).then((results) => !results? callback(null, {statusCode:404, body:`Error: '${id}' not found`}) : callback(null, { statusCode: 200, body: JSON.stringify(results) })).catch( err => callback( sendError(err)))
  }
  else getAllBreeds().then((result) => callback(null, { statusCode: 200, body: JSON.stringify(result) })).catch( err => callback( sendError(err)))
}

const getClient = ():Promise<{client:MongoClient, db:Db, collection:Collection<Breed>}> => new Promise((resolve, reject) => {
  const client = new MongoClient(connectionString!, {useNewUrlParser:true})

  client.connect().then((client) => {
    const db = client.db(dbName)
    const collection = db.collection(collectionName)

    resolve({client, db, collection})
  }).catch(reason => reject(reason))
})


export const searchBreed = async (term: string) => {
  const {client, collection} = await getClient()
  const result = collection.find({ '$text': { '$search': term } }).toArray()
  client.close()
  return result
}

export const getAllBreeds = async () => {
  const {client, collection} = await getClient()
  const result = collection.find().project({ 'name': 1, 'country': 1 }).toArray()
  client.close()
  return result
}

export const getBreed = async (id: string) => {
  const {client, collection} = await getClient()
  const objId = new ObjectId(id)
  const result = collection.find({ _id: objId }).next()
  client.close()
  return result  
}



// This just removes any trailing '/' delimiters
const normalizePath = (path: string) => path.slice(-1) === '/' ? path.slice(0, path.length - 1) : path

// format the error message
const sendError = (err: Error) => {
  const { name, message } = err
  // only return 'stack' if in development mode
  if (process.env.NODE_ENV === "development") return JSON.stringify(err)
  else return JSON.stringify({ error:name, message })
}

interface Breed {
  name: string,
  country?: string,
  origin?: string,
  bodyType?: string,
  coat?: string,
  pattern?: string,
  temperament: string,
}

interface Event {
  path: string;
  httpMethod: string;
  queryStringParameters: QueryStringParameters;
  headers: Headers;
  body: string;
  isBase64Encoded: boolean;
}
interface QueryStringParameters {
  search?: string;
}
interface Headers {
  host: string;
  connection: string;
  'upgrade-insecure-requests': string;
  'user-agent': string;
  dnt: string;
  accept: string;
  'accept-encoding': string;
  'accept-language': string;
}


/*[
  {
    '$project': {
      'name': 1,
      'country': 1,
      'origin': 1,
      'bodyType': 1,
      'coat': 1,
      'pattern': 1,
      'temperament': 1
    }
  }
]*/