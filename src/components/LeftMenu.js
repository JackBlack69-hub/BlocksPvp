// LeftMenu.js
import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import coinflipImg from "./assets/coinflip.png";
import jackpotImg from "./assets/jackpot.png";

function LeftMenu({ open, onClose }) {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      PaperProps={{
        sx: {
          backgroundColor: "#19172C", // Your desired color
          position: "relative",

          height: "100%", // Set height to 100%
        },
      }}
    >
      <List
        style={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <ListItem style={{ color: "#9F9DA7", paddingLeft: "0" }} button>
          <img src={coinflipImg} alt="Coinflip" />
        </ListItem>
        <ListItem style={{ color: "#9F9DA7", paddingLeft: "20%" }} button>
          <img src={jackpotImg} alt="Jackpot" />
        </ListItem>
      </List>

      <List style={{ marginTop: "auto" }}>
        <ListItem style={{ color: "#9F9DA7" }} button>
          <ListItemText primary="Discord" />
        </ListItem>
        <ListItem style={{ color: "#9F9DA7" }} button>
          <ListItemText primary="Support" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default LeftMenu;
