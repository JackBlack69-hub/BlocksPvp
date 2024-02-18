// Navbar.js
import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import logo from "./Logopvp.png";
import UpperNavbar from "./UpperNavbar";
import { sizing } from "@mui/system";

function Navbar() {
  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "#19172C",
        paddingRight: "0",
        paddingLeft: "0",
        display: "block",
      }}
    >
      <Toolbar style={{ paddingRight: "0", paddingLeft: "0" }}>
        <img src={logo} style={{ paddingRight: "3%" }} />
        <UpperNavbar />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
