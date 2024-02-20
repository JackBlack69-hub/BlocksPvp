import React, { useState } from "react";
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
import pfpImg from "./assets/pfp.png";

function RightMenu({ open, onClose }) {
  const [inputValue, setInputValue] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      const newMessage = { user: "User", text: inputValue };
      setChatMessages([...chatMessages, newMessage]);
      setInputValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <Drawer
      variant="permanent"
      anchor="right"
      style={{ flexBasis: "25%", backgroundColor: "#0F0C1F" }}
      PaperProps={{
        sx: {
          backgroundColor: "#19172C",
          position: "relative",
          borderTop: "3px solid #322E58",
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
            height: "70vh",
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
                    paddingBlock: "5% 5%",

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
                    <img src={pfpImg} alt="Profile" />
                  </div>
                  <div>
                    <Typography
                      variant="subtitle2"
                      style={{
                        fontSize: "1.2rem",
                        color: "#863AFF",
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
                <IconButton edge="end" onClick={handleSendMessage}>
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
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default RightMenu;
