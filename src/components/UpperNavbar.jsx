import React from "react";
import { Box, Button } from "@mui/material";
import twitterImg from "./assets/twitter.png";
import discordImg from "./assets/discord.png";

export default function UpperNavbar() {
  return (
    <Box
      style={{
        backgroundColor: "#0D0B1B",
        borderBottomLeftRadius: "10px",
        paddingLeft: "0",
        // display: "block",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Button
        style={{
          textTransform: "capitalize",
          marginLeft: "2rem",
          color: "#863AFF",
          fontWeight: "600",

          "--opacity": "0.1",
          "--inset-value": "8px",
          "--shadow-color": "rgb(124, 0, 255)",
        }}
        className="shadowEffect"
      >
        1K Raffel
      </Button>
      <Button
        style={{
          color: "#863AFF",
          fontWeight: 600,

          "--opacity": "0.1",
          "--inset-value": "8px",
          "--shadow-color": "rgb(124, 0, 255)",
        }}
        className="shadowEffect"
      >
        EVENT
      </Button>
      <Box
        style={{
          color: "rgba(255, 255, 255, 0.50)",
          paddingInline: "4rem",
          paddingBlock: 0,
          boxShadow:
            "2px 2px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
        sx={{
          display: "inline",
          backgroundColor: "#19172C",
          borderRadius: "5px",
          opacity: 1,
        }}
      >
        <Button
          size="large"
          sx={{
            color: "rgba(255, 255, 255, 0.50)",
            textTransform: "capitalize",
            borderRight: "1px solid #0D0B1B",
            fullWidth: true,
            "&:hover": {
              background: "transparent",
            },
            padding: 0,
            paddingRight: "1.5rem",
          }}
        >
          {" "}
          Affiliates
        </Button>
        <Button
          sx={{
            color: "rgba(255, 255, 255, 0.50)",
            textTransform: "capitalize",
            borderRight: "1px solid #0D0B1B",
            "&:hover": {
              background: "transparent",
            },
            padding: 0,
            paddingInline: "1.5rem",
          }}
        >
          {" "}
          Game Responsibly
        </Button>
        <Button
          sx={{
            color: "rgba(255, 255, 255, 0.50)",
            textTransform: "capitalize",
            "&:hover": {
              background: "transparent",
            },
            padding: 0,
            paddingLeft: "1.5rem",
          }}
        >
          Fairness
        </Button>
      </Box>

      <Button sx={{ color: "rgba(255, 255, 255, 0.50)" }}>FAQ</Button>
      <Button
        sx={{ color: "rgba(255, 255, 255, 0.50)", textTransform: "capitalize" }}
      >
        Terms of Service
      </Button>
      <Button
        sx={{
          color: "#FFAD33",
          textTransform: "capitalize",
          "--opacity": "0.3",
          "--inset-value": "13px",
          "--shadow-color": "#FFAD33",
        }}
        className="shadowEffect"
      >
        Claims
      </Button>
      <div>
        <button
          size="small"
          style={{
            backgroundColor: "#0D0B1B",
            border: "0",
            cursor: "pointer",
            paddingTop: "1px",
          }}
        >
          <img src={twitterImg}></img>
        </button>
        <button
          style={{ backgroundColor: "#0D0B1B", border: "0", cursor: "pointer" }}
        >
          <img src={discordImg}></img>
        </button>
      </div>
      {/* <BasicModal /> */}
    </Box>
  );
}
