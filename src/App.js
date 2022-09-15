import React, { useState } from "react";
import "./App.css";
import clothing from "./data";

const App = () => {
  const [dressCode, setDressCode] = useState("casual");

  const getClothing = (type) => {
    const filteredClothing = clothing.filter(
      (clothingItem) =>
        clothingItem.type === type && clothingItem.dressCode === dressCode
    );
    return filteredClothing[
      Math.floor(Math.random() * filteredClothing.length)
    ];
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Outfit Planner</h2>
        <p>Find what to wear.</p>
      </header>
      <div className="main">
        <div className="choose">
          <h3>Choose a style!</h3>
          <button
            className="button"
            id="casual"
            onClick={() => setDressCode("casual")}
          >
            Casual
          </button>
          <br />
          <button
            className="button"
            id="sport"
            onClick={() => setDressCode("sport")}
          >
            Sport
          </button>
          <br />
          <button
            className="button"
            id="formal"
            onClick={() => setDressCode("formal")}
          >
            Formal
          </button>
          <br />
          <button className="button" id="reset" onClick={refreshPage}>
            Reset
          </button>
          <br />
        </div>
        <div className="outfit">
          <div className="display-clothing">
            <h3>Top</h3>
            <img
              id="top"
              src={getClothing("top").imageUrl}
              style={{ width: "120px", height: "120px", objectFit: "cover" }}
              alt="top item"
            ></img>
          </div>
          <div className="display-clothing">
            <h3>Bottom</h3>
            <img
              id="bottom"
              src={getClothing("bottom").imageUrl}
              style={{ width: "120px", height: "120px", objectFit: "cover" }}
              alt="Bottom item"
            ></img>
          </div>
          <div className="display-clothing">
            <h3>Shoes</h3>
            <img
              id="shoes"
              src={getClothing("shoes").imageUrl}
              style={{ width: "120px", height: "120px", objectFit: "cover" }}
              alt="shoes item"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
