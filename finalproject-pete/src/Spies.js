import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

function Spies() {
  const [spies, setSpies] = useState([]);
  const [isSpyLoading, setSpyLoading] = useState(true);

  useEffect(() => {
    // fetch(
    //   "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=json&results=5"
    // )

    fetch("/getSpies")
      //fetch("https://randomapi.com/api/b0f7d8eff961ab297c7d54278a73c8e1")
      //fetch("https://randomapi.com/api/eunf1eef?key=B32S-KXBU-0QMO-HMIK")
      .then((res) => res.json())
      .then((data) => {
        setSpies(data.data);
      })
      .then(() => {
        setSpyLoading(false);
      });
  }, []);
  if (isSpyLoading) return "Loading spy data please wait...";

  return (
    <DivSpies>
      <h2>🕵️ Available Spies 🕵️</h2>
      {spies.map((spy) => {
        return (
          <Spy key={spy._id}>
            <div>ID: {spy.spy.id}</div>
            <div>Cost: ${spy.spy.cost}</div>
            <div>{spy.spy.name}</div>
            <div>City: {spy.spy.address.city}</div>
          </Spy>
        );
      })}
    </DivSpies>
  );
}

export default Spies;

const DivSpies = styled.div`
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

const Spy = styled.div`
  border: 1px solid black;
  position: relative;
  float: left;
  padding: 10px;
  margin: 10px;
  background-color: #6daedb;
  color: white;
  border-radius: 10px;
  width: 130px;
  block-size: fit-content;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: space-evenly;

  width: fit-content;
  block-size: fit-content;
  border-radius: 20px;
  padding: 10px;
  text-align: left;
  /* box-shadow: 5px 5px; */

  -webkit-box-shadow: 5px 5px 15px 0px #000000;
  box-shadow: 5px 5px 15px 0px #000000;
`;
