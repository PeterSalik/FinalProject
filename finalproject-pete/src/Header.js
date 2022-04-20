import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ImgTitle from "./assets/Title.png";
import ImgSpy from "./assets/Spt.gif";

function Header() {
  return (
    <HeaderStyling>
      <img src={ImgTitle} alt="Picture: Page Title" />
      <img height="150" src={ImgSpy} alt="Animated Spies" />

      <DivP>
        <UlList>
          <li>
            <Link to={"/"}> Home</Link>
          </li>
          <li>
            <Link to={"/Investigators"}> View Investigators 🔎</Link>
          </li>
          <li>
            <Link to={"/Spies"}> View Spies 🕵️</Link>
          </li>
          <li>
            <Link to={"/About"}> About </Link>
          </li>
        </UlList>

        <div>
          Enter number of 🔎 Investigators needed. Enter number of 🕵️ Spy
          Trainers needed and budget($) per Spy.
        </div>
      </DivP>
    </HeaderStyling>
  );
}

export default Header;

const DivHeader = `
background-color: lightblue;
`;

const DivHeaderImg = `
border-radius: 10px;
`;

const DivP = styled.div`
  font-size: 14px;
  color: darkblue;
  text-decoration: none;
  background-color: transparent;
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  align-content: space-between;

  li:hover {
    text-decoration: none;
    background-color: white;
    color: white;
    border-radius: 30%;
  }
`;

const UlList = styled.ul`
  gap: 50px;

  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  align-content: space-between;
`;

const HeaderStyling = styled.div`
  padding: 20px;
  background-color: lightblue;
  border-radius: 20px;
  margin: 10px;
  height: 30vh;
  font-size: 19px;
`;
