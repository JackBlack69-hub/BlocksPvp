// Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import logo from "./Logopvp.png"

function Navbar() {
  return (
    <AppBar position="static" style={{ backgroundColor: '#19172C', paddingRight: '0', paddingLeft: '0', display: 'block' }}>
      <Toolbar style={{paddingRight: '0', paddingLeft: '0' }}>
        <img src={logo} />
        <div>
          CoinFlip
        </div>
        <div style={{backgroundColor: '#0D0B1B', width: '100%',alignSelf: 'baseline'}}> 
          1K Raffel
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
