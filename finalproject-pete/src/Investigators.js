import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "./dataContext";
import styled from "styled-components";

function Investigators() {
  const { investigators, isLoading } = useContext(DataContext);

  //console.log("Investigators: ", investigators.results);

  return (
    <DivInvestigators>
      <h2>🔎 Available Investigators 🔎</h2>
      <div>
        {investigators.map((investigator) => {
          return (
            // <>
            <Investigator key={investigator.cell}>
              <div>
                {investigator.name.title} {investigator.name.first}{" "}
                {investigator.name.last}
              </div>
              <div>City: {investigator.location.city}</div>

              <Img src={investigator.picture.medium} />
            </Investigator>
            //</>
          );
        })}
      </div>
    </DivInvestigators>
  );
}

export default Investigators;

const DivInvestigators = styled.div`
  position: absolute;
  background: lightblue;
  background: -moz-linear-gradient(top, lightblue 0%, #eeeee4 100%);
  background: -webkit-linear-gradient(top, lightblue 0%, #eeeee4 100%);
  background: linear-gradient(to bottom, lightblue 0%, #eeeee4 100%);
  padding: 10px;
  border-radius: 20px;
  margin: 10px;
  border-radius: 20px;
  height: auto;
`;

const Investigator = styled.div`
  border: 1px solid black;
  display: flex;
  background-color: #6daedb;
  color: white;
  border-radius: 10px;
  /* padding: 10px; */
  margin: 10px;
  width: 130px;
  height: 130px;
  position: relative;
  float: left;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  /* align-content: space-evenly; */

  width: fit-content;
  block-size: fit-content;
  border-radius: 20px;
  padding: 10px;
  /* text-align: left; */
  /* box-shadow: 5px 5px; */

  -webkit-box-shadow: 5px 5px 15px 0px #000000;
  box-shadow: 5px 5px 15px 0px #000000;
`;

const Img = styled.img`
  border-radius: 10px;
`;
