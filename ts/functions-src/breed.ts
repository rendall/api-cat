import { Context, Handler, Callback } from 'aws-lambda'
interface Event {
  path: string;
  httpMethod: string;
  queryStringParameters: QueryStringParameters;
  headers: Headers;
  body: string;
  isBase64Encoded: boolean;
}
interface QueryStringParameters {
  search: string;
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
export const getAllBreeds = () => new Promise((resolve, reject) => resolve(false))
export const getBreed = (id: string) => new Promise((resolve, reject) => resolve(false))
export const searchBreed = (term: string) => new Promise((resolve, reject) => resolve(false))

export const handler: Handler = (event:Event, context: Context, callback: Callback) => callback(null, {
  statusCode: 200,
  body: JSON.stringify({ event })
}
)