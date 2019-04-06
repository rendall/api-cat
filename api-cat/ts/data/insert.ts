/** This script inserts data from 'breeds.json' into (default) cat.breeds collection */
import { MongoClient, InsertWriteOpResult } from "mongodb";
import {config as dotenvConfig} from 'dotenv'
import * as assert from 'assert'
import * as fs from 'fs'

const assertions = () => {
  assert.ok(process.env.DB_ADMIN_CONNECTION, 'DB_ADMIN_CONNECTION is undefined. Please check the .env file')
  assert.ok(process.env.DB_NAME, 'DB_NAME is undefined. Please check the .env file')
  assert.ok(process.env.API_COLLECTION, 'API_COLLECTION is undefined. Please check the .env file')
}


const insert = () => {
  const client:MongoClient = new MongoClient(process.env.DB_ADMIN_CONNECTION!, { useNewUrlParser: true })
  const dbName = process.env.DB_NAME
  const collectionName = process.env.API_COLLECTION!
  const fileData:string = fs.readFileSync("./data/breeds.json", 'utf8')
  const data = JSON.parse(fileData) 

  client.connect()
    .then(() => client.db(dbName).dropCollection(collectionName))
    .then(() => client.db(dbName).createCollection(collectionName))
    .then(() => client.db(dbName).collection(collectionName).insertMany(data))
    .then((results: InsertWriteOpResult) => { 
      assert.strictEqual(results.insertedCount, data.length, `data results count ${results.insertedCount} does not match data insertion length ${data.length}`) 
      console.log(`inserted ${results.insertedCount} items into ${dbName}.${collectionName}`)
    })
    .catch(err => console.error(err))
    .finally(() => client.close())
}

dotenvConfig()
assertions()
insert()