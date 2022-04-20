import React from "react";
import styled from "styled-components";

function About() {
  return (
    <DivAbout>
      <h3>Mission:</h3>
      <p>
        The Mission of Pete's Specialist Services is to provide skilled
        personnel for specialized and confidential assignments. We employ an
        array of Base Investigators that can be trained by highly specialized
        Spies to carry out the most private and specialized of operations for
        you, the consumer.
      </p>
      <h3>History:</h3>
      <p>
        Pete's Specialist Services was formed after a need for Operators was
        identified in the market. Nowhere can a highly customizable and flexible
        team of Operators be sought with the convenience of entering human
        mission parameters and budget at a one-stop-shop, turnkey site.
      </p>
      <h3>Contact:</h3>
      <p>
        Given the sensitive nature of your need for Specialists and the need for
        privacy, you can contact us by email and our Senior Specialist/Trainer
        will respond to your inquiry and proceeding with your plan of action.
        Please click below to send a message.
      </p>

      <div>
        <p>
          <a href="mailto:Interrogator@PetesSpecialistServices.ca?subject=Inquiry about Pete's Specialist Services&body=This is an inquiry about Pete's Specialized Services. Please contact me regarding:">
            📧 Click here to Email Us 📧
          </a>
        </p>
      </div>
      {/* <div>
        All Spy 🕵️ and Investigator 🔎 Data was fetched from the APIs, stored in
        <strong> MongoDB Atlas</strong> (
        <a href="https://www.mongodb.com/">https://www.mongodb.com</a>) and then
        fetched from <strong> MongoDB</strong> by this site and rendered after
        being filtered on the backend . Live weather ☀️ is also displayed.
      </div>
      <div></div>
      <div>
        <strong>3 APIs were used:</strong>
        <ul>
          <li>
            API 1: <a href="https://randomapi.com">https://randomapi.com</a>{" "}
            <ul>
              <li>Source of all Investigator Members. 🔎</li>
            </ul>
          </li>
          <li>
            API 2: <a href="https://randomuser.me">https://randomuser.me</a>
            <ul>
              <li>
                <strong>Custom programmed API return.</strong>
              </li>
              <li>Source of all Spy Members. 🕵️</li>
            </ul>
          </li>
          <li>
            API 3:{" "}
            <a href="https://openweathermap.org">https://openweathermap.org</a>
            <ul>
              <li>Source of live weather data. ☀️ </li>
            </ul>
          </li>
        </ul>
      </div> */}
    </DivAbout>
  );
}

export default About;

const DivAbout = styled.div`
  text-align: left;
  width: 200px;
  background: lightcoral;
  background: -moz-linear-gradient(top, lightcoral 0%, #eeeee4 100%);
  background: -webkit-linear-gradient(top, lightcoral 0%, #eeeee4 100%);
  background: linear-gradient(to bottom, lightcoral 0%, #eeeee4 100%);
  padding: 10px;
  border-radius: 20px;
  margin: 10px;
  border-radius: 20px;
  height: auto;
  width: fit-content;
`;
