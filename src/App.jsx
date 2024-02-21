// App.js
import React from "react";
import Navbar from "./components/Navbar";
import LeftMenu from "./components/LeftMenu";
import RightMenu from "./components/RightMenu";
import backImg from "./components/assets/bg.png";

const divStyle = {
  background: `url(${backImg}) #19172C 50% / cover no-repeat`,
  width: "100%",
  height: "100%",

  mixBlendMode: "luminosity",
  border: "3px solid #322E58",
};

function App() {
  return (
    <div
      className="main-container"
      style={{ height: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Navbar />

      <div
        style={{ flex: 1, display: "flex", justifyContent: "space-between" }}
      >
        <LeftMenu />
        <div style={divStyle}></div>
        <RightMenu />
      </div>
    </div>
  );
}

export default App;
