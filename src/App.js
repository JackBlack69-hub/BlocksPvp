// App.js
import React from 'react';
import Navbar from './components/Navbar';
import LeftMenu from './components/LeftMenu';
import { Container, Divider } from '@mui/material';
import RightMenu from './components/RightMenu';

function App() {
  return (
    <> 
      <div className="main-container">
        <div className="left-section">
          <Navbar />
          <LeftMenu />
        </div>
        <div className="right-section">
          <RightMenu />
        </div>
      </div>
    </>
  );
}

export default App;
