"use strict";

const express = require("express");
const morgan = require("morgan");

const { getInvestigators, getSpies, getFilteredData } = require("./handlers");
const PORT = process.env.PORT || 8000;

express()
  .use(morgan("tiny"))
  .use(express.static("public"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  //Endpoints...
  .get("/getInvestigators", getInvestigators)
  .get("/getSpies", getSpies)
  .post("/getFilteredData", getFilteredData)

  // handle 404s
  .use((req, res) => res.status(404).type("txt").send("🤷‍♂️"))

  .listen(PORT, () => console.log(`Listening on port ${PORT}`));
