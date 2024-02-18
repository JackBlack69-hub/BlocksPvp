// Navbar.js
import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import logo from "./Logopvp.png";
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
        <img src={logo} />

        <Box
          style={{
            backgroundColor: "#0D0B1B",
          }}
          sx={{ width: "100%", height: "25%", alignSelf: "baseline" }}
        >
          <Box sx={{ p: 1 }}> 1K Raffel</Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
