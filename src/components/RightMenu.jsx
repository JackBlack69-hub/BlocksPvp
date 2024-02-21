import React, { useState } from "react";
import {
  Drawer,
  Paper,
  List,
  ListItem,
  Button,
  TextField,
  IconButton,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import styles from "./RightMenu.module.css";
import pfpImg from "./assets/pfp.png";
import usaIcon from "./assets/usaIcon.png";

function RightMenu() {
  const [inputValue, setInputValue] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      user: "NormsDemise",
      text: "Hello, I'm just trying to navigate to the crash gamemode on this amazing number!",
      time: "10:58",
    },
    {
      user: "NormsDemise",
      text: "Hello, I'm just trying to navigate to the crash gamemode on this amazing number!",
      time: "10:58",
    },
    {
      user: "NormsDemise",
      text: "Hello, I'm just trying to navigate to the crash gamemode on this amazing number!",
      time: "10:58",
    },
    {
      user: "NormsDemise",
      text: "Hello, I'm just trying to navigate to the crash gamemode on this amazing number!",
      time: "10:58",
    },
  ]);

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      const newMessage = {
        user: "NormsDemise",
        text: inputValue,
        time: "10:58",
      };

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
          flexBasis: "20%",
        },
      }}
    >
      {/* Icon buttons */}
      <div style={{ display: "flex", padding: 10, background: "#120e25" }}>
        <Button
          style={{
            background: "linear-gradient(180deg, #1A182E 0%, #1F1736 100%)",
            marginRight: "10px",
            borderRadius: 3,
            padding: "0.75rem",
          }}
        >
          {/* <MessageIcon /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
          >
            <g>
              <path
                d="M16.2615 4.90573e-09C17.1304 -4.4865e-05 17.9665 0.307711 18.5987 0.860299C19.231 1.41289 19.6115 2.16853 19.6625 2.97263L19.6682 3.15789V13.6842H20.5198C21.2545 13.6842 21.8598 14.2021 21.9325 14.8653L21.9393 15V16.8421C21.9393 17.6476 21.6073 18.4226 21.0112 19.0087C20.4151 19.5947 19.5999 19.9475 18.7324 19.9947L18.5326 20H7.17692C6.30798 20 5.47185 19.6923 4.83963 19.1397C4.20741 18.5871 3.82688 17.8315 3.7759 17.0274L3.77022 16.8421V6.31579H1.78298C1.43157 6.31594 1.0926 6.19525 0.831645 5.97708C0.570694 5.75891 0.406323 5.45877 0.370339 5.13474L0.363525 5V3.15789C0.363477 2.35241 0.69548 1.57735 1.29161 0.991304C1.88773 0.405256 2.70291 0.0525184 3.57036 0.00526328L3.77022 4.90573e-09H16.2615ZM16.2615 2.10526H6.04136V16.8421C6.04136 17.1213 6.161 17.389 6.37396 17.5864C6.58692 17.7838 6.87575 17.8947 7.17692 17.8947C7.47809 17.8947 7.76693 17.7838 7.97989 17.5864C8.19285 17.389 8.31249 17.1213 8.31249 16.8421V15C8.31249 14.2737 8.94841 13.6842 9.73195 13.6842H17.397V3.15789C17.397 2.87872 17.2774 2.61098 17.0644 2.41357C16.8515 2.21617 16.5626 2.10526 16.2615 2.10526ZM19.6682 15.7895H10.5836V16.8421C10.5836 17.2105 10.5155 17.5653 10.3906 17.8947H18.5326C18.8338 17.8947 19.1226 17.7838 19.3356 17.5864C19.5485 17.389 19.6682 17.1213 19.6682 16.8421V15.7895ZM11.7192 9.47368C12.0204 9.47368 12.3092 9.58459 12.5222 9.78199C12.7351 9.9794 12.8548 10.2471 12.8548 10.5263C12.8548 10.8055 12.7351 11.0732 12.5222 11.2706C12.3092 11.468 12.0204 11.5789 11.7192 11.5789H9.44806C9.14688 11.5789 8.85805 11.468 8.64509 11.2706C8.43213 11.0732 8.31249 10.8055 8.31249 10.5263C8.31249 10.2471 8.43213 9.9794 8.64509 9.78199C8.85805 9.58459 9.14688 9.47368 9.44806 9.47368H11.7192ZM13.9903 5.26316C14.2915 5.26316 14.5803 5.37406 14.7933 5.57147C15.0062 5.76887 15.1259 6.03661 15.1259 6.31579C15.1259 6.59496 15.0062 6.86271 14.7933 7.06011C14.5803 7.25752 14.2915 7.36842 13.9903 7.36842H9.44806C9.14688 7.36842 8.85805 7.25752 8.64509 7.06011C8.43213 6.86271 8.31249 6.59496 8.31249 6.31579C8.31249 6.03661 8.43213 5.76887 8.64509 5.57147C8.85805 5.37406 9.14688 5.26316 9.44806 5.26316H13.9903ZM3.77022 2.10526C3.49209 2.1053 3.22363 2.19995 3.01579 2.37128C2.80794 2.5426 2.67515 2.77868 2.64261 3.03474L2.63466 3.15789V4.21053H3.77022V2.10526Z"
                fill="#F8F8F8"
              />
            </g>
          </svg>
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
            padding: "0.75rem",
          }}
          className={styles.chatTitle}
        >
          {/* <Avatar
            sx={{
              // bgcolor: "secondary.main",
              width: "32px",
              height: "32px",
              marginRight: "8px",
            }}
          > */}
          <img
            src={usaIcon}
            alt=""
            style={{ width: "26px", height: "26px", marginRight: "12px" }}
          />
          {/* </Avatar> */}
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
          flexGrow: 1,
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
                    border: "2px solid #863aff30",
                    display: "flex",
                    padding: "1.5rem 1rem",
                    flexDirection: "row",

                    alignItems: "center",
                    width: "100%",
                    borderRadius: "20px",
                    background: "rgb(29 29 53)",
                    // background:
                    //   "linear-gradient(180deg, #1F1F2D 0%, #1F1F2D 100%)",
                  }}
                >
                  <div
                    style={{
                      border: "2px solid #863AFF",
                      borderRadius: "50%",
                      marginRight: "1.5rem",
                    }}
                  >
                    <img src={pfpImg} alt="Profile" />
                  </div>
                  <div style={{ width: "100%" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="subtitle2"
                        style={{
                          fontSize: "1.4rem",
                          color: "#863AFF",
                        }}
                      >
                        {message.user}
                      </Typography>
                      <span
                        style={{
                          color: "#FFFFFF",
                          background: "#45444461",
                          padding: "0.2rem 0.5rem",
                          borderRadius: "12px",
                          fontSize: "0.9rem",
                          opacity: 0.5,
                        }}
                      >
                        {message.time}
                      </span>
                    </div>
                    <Typography
                      variant="body2"
                      style={{
                        fontSize: "1rem",
                        color: "#BFBFCD",
                        opacity: 0.5,
                        wordBreak: "break-all",
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
      <List style={{ background: "#120e25" }}>
        <ListItem>
          <TextField
            // variant="outlined"
            placeholder="Say Something ..."
            style={{ width: "100%" }}
            InputProps={{
              style: {
                color: "#FFFFFF",
                borderRadius: "12px",
                border: "2px solid #863AFF",
              },
              endAdornment: (
                <IconButton edge="end" onClick={handleSendMessage}>
                  <SendIcon
                    style={{
                      color: "#863AFF",
                      transform: "translateY(-3px) rotateZ(-45deg)",
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
