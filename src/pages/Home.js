import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../components/Cards";
import RandomBtn from "../components/RandomBtn";
import Navbar from "../components/Navbar";

export default function Home() {
  const [getData, setGetData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://geo.api.gouv.fr/departements?`)
      .then((res) => setGetData(res.data.sort(() => Math.random() - 0.5)));
  }, []);

  return (
    <>
      <Navbar />
      <div className="header-container">
        <h1>
          Apprendre les départements <span>français</span>
        </h1>
      </div>
      <div className="game">
        <p className="rule">
          Cliquer sur les cartes pour faire disparaitre/apparaitre les numéros
          de département.
        </p>
        <RandomBtn />
      </div>
      <div className="results">
        {getData.map((item, key) => {
          return <Cards item={item} />;
        })}
      </div>
    </>
  );
}
