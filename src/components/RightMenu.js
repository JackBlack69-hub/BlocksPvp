import React from 'react';
import { Drawer, List, ListItem, Button, TextField, IconButton, Avatar } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import MessageIcon from '@mui/icons-material/Message';

function RightMenu({ open, onClose }) {
  return (
    <Drawer
      variant="permanent"
      anchor="right"
      style={{
        zIndex: '-1',
        position: 'relative',
        backgroundColor: '#19172C',
        display: 'block',
      }}
      PaperProps={{
        sx: {
          backgroundColor: "#19172C",
          border: "1px solid #BFBFCD"
        },
      }}
    >
      {/* Icon buttons */}
      <div style={{ display: 'flex', padding: 10,  marginTop: '35%' }}>

        <Button style={{ color:'#fff',backgroundColor: '#322E58', marginRight: 10,boxShadow: '0px 4px 8px rgba(0.5, 0.5, 0.5, 0.5)' }}>
          <MessageIcon />
        </Button>

        <Button fullWidth variant="text" style={{ color:'#fff',backgroundColor: '#322E58', boxShadow: '0px 4px 8px rgba(0.5, 0.5, 0.5, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', borderRadius: '5px'}}>
          <Avatar sx={{ bgcolor: 'secondary.main', width: '32px', height: '32px', marginRight: '8px'}}>
            🇺🇸
          </Avatar>
          English chat
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', marginRight: '8px'}}>
            <div style={{ backgroundColor: 'red', borderRadius: '50%', width: '10px', height: '10px', marginRight: '4px'}} />
            <div style={{ color: '#FFFFFF' }}>812</div>
          </div>
        </Button>

      </div>

      {/* Input area for message */}
      <List style={{ marginTop: 'auto', marginBottom: '10px' }}>
        <ListItem>
          <TextField
            // fullWidth
            // variant="outlined"
            placeholder="Say Something ..."
            style={{ backgroundColor: '#2B293D', color: '#FFFFFF', borderRadius: '15px', border: '2px solid pink' }} // Remove blue outline on focus
            InputProps={{
              style: { color: '#FFFFFF' },
              endAdornment: (
                <IconButton edge="end">
                  <SendIcon style={{ color: '#FFFFFF' }} />
                </IconButton>
              )
            }}
            InputLabelProps={{
              style: { color: '#FFFFFF' } // Change placeholder color to white
            }}
          />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default RightMenu;
