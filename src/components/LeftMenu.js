// LeftMenu.js
import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

function LeftMenu({ open, onClose }) {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      style={{ zIndex: '-1', position: 'relative', backgroundColor: '#19172C' }}
      PaperProps={{
        sx: {
          backgroundColor: "#19172C", // Your desired color   
        },
      }}
    >
      <List style={{ marginTop: '130%' }}>
        <ListItem style={{ color: '#9F9DA7' }} button>
          <ListItemText primary="Coinflip" />
        </ListItem>
        <ListItem style={{ color: '#9F9DA7' }} button>
          <ListItemText primary="Jackpot" />
        </ListItem>
      </List>

      <List style={{ marginTop: 'auto' }}>
        <ListItem style={{ color: '#9F9DA7' }} button>
          <ListItemText primary="Discord" />
        </ListItem>
        <ListItem style={{ color: '#9F9DA7' }} button>
          <ListItemText primary="Support" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default LeftMenu;
