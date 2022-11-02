import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";

export default function Find() {
  const [getInf, setGetInf] = useState([]);
  const [searchData, setSearchData] = useState();

  useEffect(() => {
    const nomLieu = `nom=${searchData}`;
    axios
      .get(`https://geo.api.gouv.fr/departements?${nomLieu}`)
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
        {!searchData ? (
          <h3 className="default-txt">Pas de résultats</h3>
        ) : (
          getInf.map((item) => {
            return <Cards item={item} />;
          })
        )}
      </div>
    </>
  );
}
