// App.js
import React from 'react';
import Navbar from './components/Navbar';
import LeftMenu from './components/LeftMenu';
import { Container, Divider } from '@mui/material';
import RightMenu from './components/RightMenu';

function App() {
  return (
    <>
    
    <div style={{ display: 'flex', flexDirection: 'row' }}>
    <div style={{width: '100%'}}>
    <Navbar />

    </div>
   
   <div>
   <div>
        <LeftMenu />
      </div>
      <div>
        <RightMenu />
      </div>

   </div>
      
    </div>
  </>
    
        
  );
}

export default App;
