// App.js
import React, { useState } from "react";
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
  const [selected, setSelected] = useState("coinflip");
  return (
    <div
      className="main-container"
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        paddingLeft: "0.4rem",
        paddingTop: "0.25rem",
      }}
    >
      <Navbar selected={selected} setSelected={setSelected} />

      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "space-between",
          overflow: "auto",
        }}
      >
        <LeftMenu selected={selected} setSelected={setSelected} />
        <div style={divStyle}></div>
        <RightMenu />
      </div>
    </div>
  );
}

export default App;
