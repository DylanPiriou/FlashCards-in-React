import React, { useState } from "react";

export default function CardsHome({ item }) {
  const [showNumber, setShowNumber] = useState(false);

  const handleShow = () => {
    setShowNumber(!showNumber);
  };

  return (
    <>
      <div onClick={() => handleShow()} className="cards">
        <h2>{item.nom}</h2>
        {showNumber ? <span className="number">{item.code}</span> : <p>?</p>}
      </div>
    </>
  );
}
