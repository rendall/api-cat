// This is a test 'connect' endpoint, to see if the database connects
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()
const MONGODB_URI = process.env.DB_READER_CONNECTION; // or Atlas connection string

let cachedDb:any | null = null;


function connectToDatabase(uri:string) {
  
    if (cachedDb && cachedDb.serverConfig.isConnected()) {
        console.log('=> using cached database instance');
        return Promise.resolve(cachedDb);
    }
    const dbName = 'cat';
    return MongoClient.connect(uri)
        .then(( client:any ) => { cachedDb = client.db(dbName); return cachedDb; });
}


function queryDatabase (db:any) {
  console.log('=> query database');

  return db.collection('breeds').find({}).toArray()
    .then((result:any) => { return { statusCode: 200, body: JSON.stringify(result) }; })
    .catch(( err:any ) => {
      console.log('=> an error occurred: ', err);
      return { statusCode: 500, body: 'error' };
    });
}

module.exports.handler = (event:any, context:any, callback:any) => {

  context.callbackWaitsForEmptyEventLoop = false;


  console.log('event: ', event);

  connectToDatabase(MONGODB_URI!)
    .then(( db:any ) => queryDatabase(db))
    .then(( result:any ) => {
      console.log('=> returning result: ', result);
      callback(null, result);
    })
    .catch(( err:any ) => {
      console.log('=> an error occurred: ', err);
      callback(err);
    });
};