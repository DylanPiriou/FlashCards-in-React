import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./components/Cards";

function App() {
  const [getData, setGetData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://unpkg.com/@etalab/decoupage-administratif@2.2.1/data/departements.json`
      )
      .then((res) => setGetData(res.data.sort(() => Math.random() - 0.5)));
  }, []);

  return (
    <>
      <div className="header-container">
        <h1>Apprendre les départements français</h1>
      </div>
      <p className="rule">
        Cliquer sur les cartes pour faire disparaitre/apparaitre les numéros de
        département.
      </p>
      <div className="results">
        {getData.map((item, key) => {
          return <Cards item={item} />;
        })}
      </div>
    </>
  );
}

export default App;
