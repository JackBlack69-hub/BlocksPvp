// App.js
import React from "react";
import Navbar from "./components/Navbar";
import LeftMenu from "./components/LeftMenu";
import RightMenu from "./components/RightMenu";

function App() {
  return (
    <div
      className="main-container"
      style={{ height: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <LeftMenu />
        <RightMenu />
      </div>
    </div>
  );
}

export default App;
