import React from "react";
import { Box, Button } from "@mui/material";
import twitterImg from "./assets/twitter.png";
import discordImg from "./assets/discord.png";

export default function UpperNavbar() {
  return (
    <Box
      style={{
        backgroundColor: "#0D0B1B",
        borderBottomLeftRadius: "20px",
        paddingLeft: "0",
      }}
      sx={{ width: "100%", height: "25%", alignSelf: "baseline" }}
    >
      <Button sx={{ p: 1 }}> 1K Raffel</Button>
      <Button sx={{ p: 1 }}> EVENT</Button>
      <Button sx={{ p: 1 }}> Affiliates</Button>
      <Button sx={{ p: 1 }}> Game Responsibly</Button>
      <Button sx={{ p: 1 }}>Fairness</Button>
      <Button sx={{ p: 1 }}>FAQ</Button>
      <Button sx={{ p: 1 }}>Terms of Service</Button>
      <Button sx={{ p: 1 }}>Claims</Button>
      <Button sx={{ p: 1 }}>
        <img src={twitterImg}></img>
      </Button>
      <Button sx={{ p: 1 }}>
        <img src={discordImg}></img>
      </Button>
    </Box>
  );
}
