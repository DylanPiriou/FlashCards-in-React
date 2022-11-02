import React, { useState } from "react";

export default function Cards({ item }) {
  return (
    <>
      <div className="cards">
        <h2>{item.nom}</h2>
        <span className="number">{item.code}</span>
      </div>
    </>
  );
}
