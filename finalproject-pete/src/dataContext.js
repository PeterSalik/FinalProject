import React, { useState, useEffect, createContext } from "react";

export const DataContext = createContext(null);

function DataProvider({ children }) {
  const [investigators, setInvestigators] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // fetch("https://randomuser.me/api/?results=3")
    fetch("/getInvestigators")
      .then((res) => res.json())
      .then((data) => {
        setInvestigators(data.data);
        //console.log(data.data);
      })
      .then(() => {
        setLoading(false);
      });
  }, []);
  if (isLoading) return "Loading investigator data please wait...";

  return (
    <>
      <DataContext.Provider value={{ investigators, isLoading }}>
        {children}
      </DataContext.Provider>
    </>
  );
}
export default DataProvider;
