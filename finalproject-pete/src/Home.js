import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Weather from "./Weather";
import Input from "./Input";
import { DataContext } from "./dataContext";

function Home() {
  const getData = () => {
    //console.log("Filtered Data coming from Input Form: ", filteredData);
  };

  return (
    <>
      <DivHome>
        <Weather />
        {/* <Input onsubmit={getData} /> */}
        <Input />
      </DivHome>
      <DivResults>
        {" "}
        No animals were harmed during the inception and operation of this site.
        If you are interested in human cloning, genetic research or operations
        of more sensitve or covert operations, please contact us on the About
        Page. Pete's Special Services have a host of talents and monthly
        specials with coupons.
      </DivResults>
    </>
  );
}

export default Home;

const DivHome = styled.div`
  display: flex;

  justify-content: space-around;
  align-items: center;
  align-content: space-evenly;

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

const DivResults = styled.div`
  display: flex;

  justify-content: space-around;
  align-items: center;
  align-content: space-evenly;

  background: #eeeee4;
  background: -moz-linear-gradient(top, #eeeee4 0%, lightblue 100%);
  background: -webkit-linear-gradient(top, #eeeee4 0%, lightblue 100%);
  background: linear-gradient(to bottom, #eeeee4 0%, lightblue 100%);
  padding: 10px;
  border-radius: 20px;
  margin: 10px;
  border-radius: 20px;
  height: auto;
  padding: 20px;
`;
