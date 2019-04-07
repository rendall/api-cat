import { Context, Handler, Callback } from 'aws-lambda'
import * as fake from './fakeDb/fakeData'

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
export const getAllBreeds = ():Promise<{id:string | number, name:string}[]> => new Promise((resolve, reject) => resolve(fake.getAll()))
export const getBreed = (id: string):Promise<Breed> => new Promise((resolve, reject) => resolve(fake.getById(parseInt(id))))
export const searchBreed = (term: string):Promise<Breed[]> => new Promise((resolve, reject) => resolve(fake.search(term)))

// This just removes any trailing '/' delimiters
const normalizePath = (path:string) => path.slice(-1) === '/'? path.slice(0, path.length-1) : path

export const handler: Handler = (event:Event, context: Context, callback: Callback) => {
  const searchTerm = event.queryStringParameters.search
  const id:string = normalizePath(event.path).split('/').pop()! // just takes the last directory as id, unless it is 'breed', the entry point. one potential problem of this approach is that anything will work as long as the last dir on the path is a proper id

  // these validate incoming data
  // reject any input that does not validate here
  const isBreedId = (maybe:string) => maybe.match(/^[\w\d]*$/)
  const isSearchTerm = (term:string) => term.match(/^[\w\s]*$/)

  // if the path has an id or an attempt at one then ignore query params
  if (id !== 'breed') {
    if (!isBreedId(id)) callback(null, { statusCode: 404, body: `Error: unknown or badly-formatted id '${id}'` })
    else getBreed(id).then((breed) => callback(null, {statusCode: 200, body: JSON.stringify({id, breed})}))
  }
  else if (searchTerm !== undefined) {
    if (!isSearchTerm(searchTerm)) callback(null, { statusCode: 400, body: `Error: '${searchTerm}' includes invalid characters` })
    else searchBreed(searchTerm).then((results) => callback(null, {statusCode: 200, body: JSON.stringify({searchTerm, results})}))
  }
  else getAllBreeds().then((result) => callback(null, {statusCode: 200, body: JSON.stringify(result)}))
}

interface Breed {
    name:string,
    country?:string,
    origin?:string,
    bodyType?:string,
    coat?:string,
    pattern?:string,
    temperament:string,
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