import React from "react";

export default function RandomBtn() {
  const handleRandom = () => {
    window.location.reload();
  };

  return (
    <div>
      <button onClick={() => handleRandom()} className="random-btn">
        <p>Mélanger les cartes</p>
      </button>
    </div>
  );
}
