import {Context, Handler, Callback} from 'aws-lambda'

export const handler:Handler = (event, context:Context, callback:Callback) => callback( null,  {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello world!',
      input: event,
    }),
  }
)