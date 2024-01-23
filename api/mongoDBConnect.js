const { MongoClient } = require("mongodb");
// const mongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const dbName = "karan-kushwaha";

const getConnection = async () => {
  let result = await client.connect();
  console.log("Connected successfully to server");
  const db = result.db(dbName);
  console.log("Connected successfully to DB");
  return db.collection("node-js-tutorial");
  console.log("Connected successfully to Collection");
};

module.exports = getConnection;

// getConnection();

// async function getData() {
//   let result = await client.connect();
//   console.log("Connected successfully to server");
//   const db = result.db(dbName);
//   console.log("Connected successfully to DB");
//   const collection = db.collection("node-js-tutorial");
//   console.log("Connected successfully to Collection");
// }
