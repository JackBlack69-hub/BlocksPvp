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
import styles from "./RightMenu.module.css";

function RightMenu({ open, onClose }) {
  // Dummy chat messages
  const chatMessages = [
    { user: "User 1", text: "Hello there!" },
    { user: "User 1", text: "Hello there!" },
    { user: "User 1", text: "Hello there!" },
    { user: "User 1", text: "Hello there!" },
    { user: "User 1", text: "Hello there!" },
    { user: "User 1", text: "Hello there!" },
    { user: "User 1", text: "Hello there!" },
    { user: "User 1", text: "Hello there!" },
    { user: "User 1", text: "Hello there!" },
    { user: "User 2", text: "Hi, how can I help you?" },
    {
      user: "User 1",
      text: `Hello, I’m just trying to navigate to the crashgamemode on this amazing number one MM2Game Arcade!`,
    },
  ];

  return (
    <Drawer
      variant="permanent"
      anchor="right"
      PaperProps={{
        sx: {
          backgroundColor: "#19172C", // Your desired color
          position: "relative",
          borderLeft: "2px solid #322e58",
          backgroundBlendMode: "overlay, normal",
          background: `linear-gradient(0deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%), #0f0c1f`,
        },
      }}
    >
      {/* Icon buttons */}
      <div style={{ display: "flex", padding: 10 }}>
        <Button
          style={{
            color: "#fff",
            background: "linear-gradient(180deg, #1A182E 0%, #1F1736 100%)",
            marginRight: "10px",
            borderRadius: 3,
          }}
        >
          <MessageIcon />
        </Button>

        <Button
          fullWidth
          variant="text"
          style={{
            borderRadius: "3px",
            background: "linear-gradient(180deg, #151329 0%, #1f1736 100%)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
          className={styles.chatTitle}
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
      <div
        style={{
          position: "relative",
        }}
      >
        <List
          style={{
            marginTop: "auto",
            marginBottom: "10px",
            maxHeight: "calc(100vh - 200px)",
            overflowY: "auto",
            flexGrow: 1,
            position: "static",
          }}
        >
          <div className={styles.topShadow}></div>
          <div className={styles.bottomShadow}></div>
          <div
            style={{
              height: "100%",
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
                    borderRadius: "20px",
                    background:
                      "linear-gradient(180deg, #1F1F2D 0%, #1F1F2D 100%)",
                  }}
                >
                  <div
                    style={{
                      border: "2px solid #863AFF",
                      borderRadius: "50%",
                      marginRight: 10,
                    }}
                  >
                    <Avatar />
                  </div>
                  <div>
                    <Typography
                      variant="subtitle2"
                      style={{
                        fontSize: "1.2rem",
                        color: "#863AFF",
                        opacity: 0.5,
                      }}
                    >
                      {message.user}
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{
                        fontSize: "1rem",
                        color: "#BFBFCD",
                        opacity: 0.5,
                      }}
                    >
                      {message.text}
                    </Typography>
                  </div>
                </Paper>
              </ListItem>
            ))}
          </div>
        </List>
      </div>

      {/* Input area for message */}
      <List>
        <ListItem>
          <TextField
            // variant="outlined"
            placeholder="Say Something ..."
            style={{ width: "100%" }}
            InputProps={{
              style: { color: "#BFBFCD" },
              endAdornment: (
                <IconButton edge="end">
                  <SendIcon
                    style={{
                      color: "#863AFF",
                    }}
                  />
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
