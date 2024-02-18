// LeftMenu.js
import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import coinflipImg from "../components/coinflip.png";
import jackpotImg from "../components/jackpot.png";

function LeftMenu({ open, onClose }) {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      style={{ zIndex: "-1", position: "relative", backgroundColor: "#19172C" }}
      PaperProps={{
        sx: {
          backgroundColor: "#19172C", // Your desired color
        },
      }}
    >
      <List style={{ marginTop: "30%" }}>
        <ListItem style={{ color: "#9F9DA7", paddingLeft: "0" }} button>
          {/* <ListItemText primary="Coinflip" /> */}
          <img src={coinflipImg}></img>
        </ListItem>
        <ListItem style={{ color: "#9F9DA7", paddingLeft: "20%" }} button>
          <img src={jackpotImg}></img>
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
