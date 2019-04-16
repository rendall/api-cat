import { Context, Handler, Callback } from "aws-lambda";
import { MongoClient, ObjectId, Db, Collection } from "mongodb";
import { config as dotenvConfig } from "dotenv";

// Add .env variables to code:
dotenvConfig();
const connectionString = process.env.DB_READER_CONNECTION!;
const dbName = process.env.DB_NAME!;
const collectionName = process.env.COLLECTON_NAME!;

enum QUERY_MODE {
  search,
  single,
  all
}

const extractId = (event: Event) =>
  normalizePath(event.path)
    .split("/")
    .pop()!;

const extractSearch = (event: Event) => event.queryStringParameters.search;

const getQueryMode = (event: Event): QUERY_MODE => {
  const searchTerm = extractSearch(event);
  if (searchTerm !== undefined) return QUERY_MODE.search;

  const id: string = extractId(event);
  if (id !== "breed") return QUERY_MODE.single;

  return QUERY_MODE.all;
};

const HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET"
};

// Make sure that .env variables are defined
if ([connectionString, dbName, collectionName].some(envVar => !envVar))
  throw new Error("environment variables not declared. Check that .env exists");
// This is the serverless function handler
// It identifies the kind of data expected and returns its respective
// function call
export const handler: Handler = (
  event: Event,
  context: Context,
  callback: Callback
) => {
  context.callbackWaitsForEmptyEventLoop = false;
  connectToDatabase(connectionString!)
    .then((db: Db) => db.collection(collectionName))
    .then(
      (collection: Collection<Breed>): Promise<Breed | Breed[] | null> => {
        const qMode = getQueryMode(event);
        switch (qMode) {
          case QUERY_MODE.single:
            return getSingleBreed(extractId(event), collection)!;
          case QUERY_MODE.search:
            return searchBreed(extractSearch(event)!, collection);
          default:
            return getAllBreeds(collection);
        }
      }
    )
    .then((result: Breed | Breed[] | null) => {
      if (result === null)
        callback(null, {
          statusCode: 404,
          headers: HEADERS,
          body: `Error: unknown id ${extractId(event)}`
        });
      else
        callback(null, {
          statusCode: 200,
          headers: HEADERS,
          body: JSON.stringify(result)
        });
    })
    .catch(err => callback(sendError(err)));
};

let cachedDb: any | null = null;

const connectToDatabase = (uri: string) => {
  if (cachedDb && cachedDb.serverConfig.isConnected()) {
    return Promise.resolve(cachedDb);
  }
  return MongoClient.connect(uri).then((client: MongoClient) => {
    cachedDb = client.db(dbName);
    return cachedDb;
  });
};

export const searchBreed = (term: string, collection: Collection<Breed>) => {
  const isValidSearch = (term: string) => term.match(/^[\w\s]*$/); // only letters and spaces

  if (isValidSearch(term)) {
    const result = collection.find({ $text: { $search: term } }).toArray();
    return result;
  } else
    throw `invalid search term '${term}' must contain only letters and spaces`;
};

export const getAllBreeds = (collection: Collection<Breed>) =>
  collection
    .find()
    .project({ name: 1, country: 1, image: 1 })
    .toArray();

export const getSingleBreed = (id: string, collection: Collection<Breed>) => {
  const isValidId = (maybe: string) => maybe.match(/^[abcdef\d]{24}$/); // only alphanumeric exactly 24 characters
  if (isValidId(id)) {
    const objId = new ObjectId(id);
    const result = collection.find({ _id: objId }).next();
    return result;
  } else throw `invalid id '${id}' which must contain 24 letters and numbers`;
};

// This just removes any trailing '/' delimiters
const normalizePath = (path: string) =>
  path.slice(-1) === "/" ? path.slice(0, path.length - 1) : path;

// format the error message
const sendError = (err: Error | string, errorCode: number = 500) => {
  const { name, message } =
    typeof err === "string" ? { name: "Server error", message: err } : err;
  // only return 'stack' if in development mode
  const body =
    process.env.NODE_ENV === "development"
      ? JSON.stringify(err)
      : JSON.stringify({ error: name, message });
  return body;
};

interface Breed {
  _id: string;
  name: string;
  country?: string;
  origin?: string;
  bodyType?: string;
  coat?: string;
  pattern?: string;
  temperament?: string;
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
  "upgrade-insecure-requests": string;
  "user-agent": string;
  dnt: string;
  accept: string;
  "accept-encoding": string;
  "accept-language": string;
}
