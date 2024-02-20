import React from "react";
import { Box, Button } from "@mui/material";
import twitterImg from "./assets/twitter.png";
import discordImg from "./assets/discord.png";
import BasicModal from "./BasicModal";

export default function UpperNavbar() {
  return (
    <Box
      style={{
        backgroundColor: "#0D0B1B",
        borderBottomLeftRadius: "10px",
        paddingLeft: "0",
      }}
      sx={{ width: "100%", height: "25%", alignSelf: "baseline" }}
    >
      <Button
        style={{
          textTransform: "capitalize",
          marginLeft: "2%",
          color: "#863AFF",
        }}
      >
        {" "}
        1K Raffel
      </Button>
      <Button style={{ color: "#863AFF" }}> EVENT</Button>
      <Box
        style={{
          color: "rgba(255, 255, 255, 0.50)",
          paddingInline: "1.5rem",
          paddingBlock: "0.2rem",
          boxShadow:
            "2px 2px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
        sx={{
          display: "inline",
          backgroundColor: "#19172C",
          borderRadius: "3px",
          opacity: 1,
        }}
      >
        <Button
          size="large"
          sx={{
            color: "rgba(255, 255, 255, 0.50)",
            textTransform: "capitalize",
            borderRight: "1px solid #0D0B1B",
            paddingRight: "4px",
            fullWidth: true,
            "&:hover": {
              background: "transparent",
            },
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
            paddingRight: "4px",
            "&:hover": {
              background: "transparent",
            },
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
      <Button sx={{ color: "#FFAD33", textTransform: "capitalize" }}>
        Claims
      </Button>
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
      <BasicModal />
    </Box>
  );
}
