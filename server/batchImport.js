const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const { investigators, spies } = require("../data/data.js");
//const { flights, reservations } = require("./data");
//const spyData = require("../data/spies.json");
//console.log("investigatorData: ", investigatorData);

const batchImport = async (dbName) => {
  // creates a new client
  const client = new MongoClient(MONGO_URI, options);

  // connect to the client
  await client.connect();

  // connect to the database (db name is provided as an argument to the function)
  const db = client.db(dbName);
  console.log("Connected to DB Final...");

  // try {
  await db.collection("Investigators").insertMany(investigators);
  console.log("Documents added to Collection (Investigators)...");

  await db.collection("Spies").insertMany(spies);
  console.log("Documents added to Collection (Spies)...");

  //     res
  //       .status(200)
  //       .json({ status: 200, Data: greetingsData, message: " Sucess " });
  //   } catch (error) {
  //     // res.status(404).json({ status: 404, error: "page not found" });
  //   }

  //console.log("Users: ", users);
  client.close();
  console.log("Disconnected from DB", dbName, "...");
};

batchImport("Final");
