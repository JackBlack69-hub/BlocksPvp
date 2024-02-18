// Navbar.js
import React, { useState } from "react";
import { AppBar, Box, Button, Modal, Toolbar, Typography } from "@mui/material";
import logo from "./assets/Logopvp.png";
import UpperNavbar from "./UpperNavbar";
import Login from "./authFlow/Login";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: 20,
  // width: 400,
  // bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  // p: -1,
};

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "#19172C",
        paddingRight: "0",
        paddingLeft: "0",
        display: "block",
      }}
    >
      <Toolbar style={{ paddingRight: "0", paddingLeft: "0" }}>
        <img src={logo} style={{ paddingRight: "3%" }} />
        <UpperNavbar />
        <Button onClick={handleOpen}>Login</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Login />
          </Box>
        </Modal>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
