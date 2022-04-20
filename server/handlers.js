"use strict";
const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getInvestigators = async (req, res) => {
  // creates a new client
  const client = new MongoClient(MONGO_URI, options);
  const db = client.db("Final");

  try {
    await client.connect();
    const investigatorDatafromDB = await db
      .collection("Investigators")
      .find({})
      .toArray();
    res.status(200).send({
      message: "Investigators retrieved",
      data: investigatorDatafromDB,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error fetching investigators",
      error,
    });
  }
  //console.log("Investigators from DB: ", investigatorDatafromDB);
  client.close();
};

const getSpies = async (req, res) => {
  // creates a new client
  const client = new MongoClient(MONGO_URI, options);
  const db = client.db("Final");

  try {
    await client.connect();
    const spyDatafromDB = await db.collection("Spies").find({}).toArray();
    res.status(200).send({
      message: "Spies retrieved",
      data: spyDatafromDB,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error fetching Spies",
      error,
    });
  }

  client.close();
};

const getFilteredData = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const db = client.db("Final");

  const specialistDataRequested = req.body;
  // console.log(
  //   "Investigator Amount Requested: ",
  //   specialistDataRequested.numOfInvestigators
  // );
  console.log(specialistDataRequested);

  //////Destructure Received Insomnia Data////////
  // const investigatorsNeeded = specialistDataRequested.numOfInvestigators;
  // const spiesNeeded = specialistDataRequested.numOfSpies;
  // const maxSpyCost = specialistDataRequested.budget;
  ////////////////////////////////////////////

  //////Destructure Received Form Data////////
  const investigatorsNeeded = specialistDataRequested.formData.investigators;
  const spiesNeeded = specialistDataRequested.formData.spies;
  const maxSpyCost = specialistDataRequested.formData.budget;
  ////////////////////////////////////////////

  try {
    await client.connect();
    const investigatorDatafromDB = await db
      .collection("Investigators")
      .find({})
      .toArray();

    const spyDatafromDB = await db.collection("Spies").find({}).toArray();
    ///////////////////////Filtered Spy Data Here/////////////////////////
    //console.log("SpyDataFromDB: ", spyDatafromDB);
    const spiesWithinCost = spyDatafromDB.filter(
      (spy) => spy.spy.cost <= maxSpyCost
    );
    //console.log("Spies Within Budget Object: ", spiesWithinCost);

    //Truncate Spies within cost...
    spiesWithinCost.length = spiesNeeded;
    //const filteredSpies = spiesWithinCost.length;
    console.log("Filtered Spies within Budget: ", spiesWithinCost.length);

    //////////////////////////////////////////////////////////////////////

    ////////////////////Truncate Investigator data////////////////////////
    investigatorDatafromDB.length = investigatorsNeeded;
    //const filteredInvestigators = investigatorDatafromDB.length;
    //console.log("Num of Investigators Requested: ", filteredInvestigators);
    //console.log("Filtered Investigators: ", investigatorDatafromDB);
    //////////////////////////////////////////////////////////////////////

    /////////////Construct Data Object to Return to Front End/////////////
    //const filteredData = [{ filteredInvestigators }, { filteredSpies }];
    //console.log("Filtered Spies: ", spiesWithinCost.length);
    //////////////////////////////////////////////////////////////////////

    res.status(200).send({
      message: "Filtered Data",
      investigators: investigatorDatafromDB,
      spies: spiesWithinCost,
    });
  } catch (error) {
    console.log("DB Fetch Response Error: ", error);
    res.status(500).send({
      message: "Error fetching Spies",
      error,
    });
  }

  client.close();
};

module.exports = { getInvestigators, getSpies, getFilteredData };
