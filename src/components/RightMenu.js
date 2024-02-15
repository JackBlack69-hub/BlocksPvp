// LeftMenu.js
import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

function RightMenu({ open, onClose }) {
  return (
    <Drawer
      variant="permanent"
      anchor="right"
      
      style={{zIndex: '-1', position: 'relative',backgroundColor: '#19172C', display: 'block'}}
      PaperProps={{
        sx: {
          backgroundColor: "#19172C", // Your desired color
          width: 1/6 ,
          border: "1px solid #BFBFCD"
        },
      }}

    >
      <List style={{marginTop: '90%'}}>
       
      </List>
    </Drawer>
  );
}

export default RightMenu;
