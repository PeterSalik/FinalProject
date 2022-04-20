import React, { useState } from "react";
import styled from "styled-components";
import PushPin from "./assets/3T.png";

function Input() {
  //set up form data states...
  //filteredData will contain the filtered data from the server to be sent to render...
  const [filteredData, setFilteredData] = useState(null);
  const [formData, setFormData] = useState({
    investigators: 0,
    spies: 0,
    budget: 0,
  });

  //Function to get filtered Spy/Investigator data...
  const getFilteredData = (ev) => {
    ev.preventDefault();
    fetch("/getFilteredData", {
      method: "POST",
      body: JSON.stringify({ formData }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      //Then with the data from the response in JSON...
      .then((formObject) => {
        setFilteredData(formObject);
      })
      //Then with the error genereted...
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  //View data that is filtered using form input data and returned from server...
  //console.log("filteredData.investigators: ", filteredData.investigators);
  //console.log("filteredData.spies: ", filteredData.spies);

  return (
    <>
      <div>
        <InputForm>
          <img src={PushPin} alt="Push Pin" />
          <form
            onSubmit={(ev) => {
              getFilteredData(ev);
            }}
          >
            <div>
              <label>
                Number of Investigators:
                <Div>
                  <input
                    value={formData.investigators}
                    onChange={(ev) => {
                      setFormData({
                        ...formData,
                        investigators: ev.target.value,
                      });
                    }}
                    type="number"
                    name="numOfInvestigators"
                  />
                </Div>
              </label>
            </div>
            <div>
              <label>
                Number of Spies:
                <Div>
                  <input
                    value={formData.spies}
                    onChange={(ev) => {
                      setFormData({ ...formData, spies: ev.target.value });
                    }}
                    type="number"
                    name="numOfSpies"
                  />
                </Div>
              </label>
            </div>
            <div>
              <label>
                Budget per Spy: $
                <Div>
                  <input
                    value={formData.budget}
                    onChange={(ev) => {
                      setFormData({ ...formData, budget: ev.target.value });
                    }}
                    type="number"
                    name="budget"
                  />
                </Div>
              </label>
            </div>

            <input type="submit" value="Submit" />
          </form>
        </InputForm>
        {/* ////////////////////////////////////////////////////// */}
        <DivResults>
          <FormOutput>
            <div>Search Results for Investigators 🔎</div>

            {filteredData &&
              filteredData.investigators.map((inv) => {
                return (
                  <FilteredInvestigator key={inv.cell}>
                    <p>
                      <div>
                        {inv.name.title} {inv.name.first} {inv.name.last}{" "}
                      </div>
                    </p>
                    <p>
                      <div>
                        <Img src={inv.picture.thumbnail} />
                      </div>
                    </p>
                    <div>Age: {inv.registered.age}</div>
                  </FilteredInvestigator>
                );
              })}
          </FormOutput>

          <FormOutput>
            <div>Search Results for Spies 🕵️</div>

            {filteredData &&
              filteredData.spies.map(({ spy }) => {
                return (
                  <FilteredSpy key={spy._id}>
                    <div>ID: {spy.id}</div>
                    <div>{spy.name}</div>
                    <div>Cost ${spy.cost}</div>
                  </FilteredSpy>
                );
              })}
          </FormOutput>
        </DivResults>
        {/* ////////////////////////////////////////////////////// */}
      </div>
    </>
  );
}

export default Input;

const DivResults = styled.div`
  display: flex;
`;

const Img = styled.img`
  border-radius: 10px;
`;

const Div = styled.div`
  align-items: right;
`;

const InputForm = styled.div`
  margin: 10px;
  position: relative;
  padding: 10px;
  align-items: center;
  border: 1px solid;
  border-radius: 20px;
  width: 300px;
  height: 170px;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;

  align-content: stretch;

  -webkit-box-shadow: 5px 5px 15px 0px #000000;
  box-shadow: 5px 5px 15px 0px #000000;

  img {
    margin: -40px 0px 0px 0px;
    align-self: center;
  }
`;

const FormOutput = styled(InputForm)`
  height: auto;
`;

const FilteredInvestigator = styled.div`
  padding: 20px;
  border: 1px solid black;
  display: flex;
  background-color: #6daedb;
  color: white;
  border-radius: 10px;
  /* padding: 10px; */
  margin: 10px;
  width: 200px;
  height: auto;
  position: relative;
  float: left;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  /* align-content: space-evenly; */

  /* width: fit-content; */
  block-size: fit-content;
  border-radius: 20px;
  padding: 10px;
  /* text-align: left; */
  /* box-shadow: 5px 5px; */

  -webkit-box-shadow: 5px 5px 15px 0px #000000;
  box-shadow: 5px 5px 15px 0px #000000;
`;

const FilteredSpy = styled(FilteredInvestigator)``;
