import {Context, Handler, Callback} from 'aws-lambda'

export const getAllBreeds = () => new Promise((resolve, reject) => resolve(false))
export const getBreed = (id:string) => new Promise((resolve, reject) => resolve(false))
export const searchBreed = (term:string) => new Promise((resolve, reject) => resolve(false))

export const handler:Handler = (event, context:Context, callback:Callback) => callback( null,  {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello world!',
      input: event
    }),
  }
)