import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";

export default function Find() {
  const [getInf, setGetInf] = useState([]);
  const [searchData, setSearchData] = useState();

  useEffect(() => {
    const nomLieu = searchData && `nom=${searchData}`;
    axios
      .get("https://geo.api.gouv.fr/departements?" + nomLieu)
      .then((res) => setGetInf(res.data));
  }, [searchData]);

  return (
    <>
      <Navbar />
      <input
        onChange={(e) => setSearchData(e.target.value)}
        type="text"
        placeholder="Entrer le nom du département"
      />
      <div className="results">
        {getInf.map((item) => {
          return <Cards item={item} />;
        })}
      </div>
    </>
  );
}
