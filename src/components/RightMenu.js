import React from "react";
import {
  Drawer,
  Paper,
  List,
  ListItem,
  Button,
  TextField,
  IconButton,
  Avatar,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MessageIcon from "@mui/icons-material/Message";

function RightMenu({ open, onClose }) {
  // Dummy chat messages
  const chatMessages = [
    { user: "User 1", text: "Hello there!" },
    { user: "User 2", text: "Hi, how can I help you?" },
    { user: "User 1", text: "I have a question about..." },
  ];

  return (
    <Drawer
      variant="permanent"
      anchor="right"
      PaperProps={{
        sx: {
          backgroundColor: "#19172C", // Your desired color
          position: "relative",
        },
      }}
    >
      {/* Icon buttons */}
      <div style={{ display: "flex", padding: 10 }}>
        <Button
          style={{
            color: "#fff",
            backgroundColor: "#322E58",
            marginRight: 10,
            boxShadow: "0px 4px 8px rgba(0.5, 0.5, 0.5, 0.5)",
          }}
        >
          <MessageIcon />
        </Button>

        <Button
          fullWidth
          variant="text"
          style={{
            color: "#fff",
            backgroundColor: "#322E58",
            boxShadow: "0px 4px 8px rgba(0.5, 0.5, 0.5, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            borderRadius: "5px",
          }}
        >
          <Avatar
            sx={{
              bgcolor: "secondary.main",
              width: "32px",
              height: "32px",
              marginRight: "8px",
            }}
          >
            🇺🇸
          </Avatar>
          English chat
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "auto",
              marginRight: "8px",
            }}
          >
            <div
              style={{
                backgroundColor: "red",
                borderRadius: "50%",
                width: "10px",
                height: "10px",
                marginRight: "4px",
              }}
            />
            <div style={{ color: "#FFFFFF" }}>812</div>
          </div>
        </Button>
      </div>

      {/* Dummy chat text fields */}
      <List
        style={{
          marginTop: "auto",
          marginBottom: "10px",
          maxHeight: "calc(100vh - 200px)",
          overflowY: "auto",
        }}
      >
        {chatMessages.map((message, index) => (
          <ListItem key={index}>
            <Paper
              style={{
                display: "flex",
                padding: 10,
                flexDirection: "row",
                height: 100,
                alignItems: "center",
                width: "100%",
                borderRadius: 20,
              }}
            >
              <div style={{ marginRight: 10 }}>
                <Avatar />
              </div>
              <div>
                <Typography variant="subtitle2">{message.user}</Typography>
                <Typography variant="body2">{message.text}</Typography>
              </div>
            </Paper>
          </ListItem>
        ))}
      </List>

      {/* Input area for message */}
      <List>
        <ListItem>
          <TextField
            // variant="outlined"
            placeholder="Say Something ..."
            style={{
              backgroundColor: "#2B293D",
              color: "#FFFFFF",
              borderRadius: "15px",
              border: "2px solid pink",
            }}
            InputProps={{
              style: { color: "#FFFFFF" },
              endAdornment: (
                <IconButton edge="end">
                  <SendIcon style={{ color: "#FFFFFF" }} />
                </IconButton>
              ),
            }}
            InputLabelProps={{
              style: { color: "#FFFFFF" },
            }}
          />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default RightMenu;
