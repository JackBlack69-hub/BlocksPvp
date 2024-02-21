import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import LoginImg from "./assets/Login.png";
import { TextField } from "@mui/material";
import { generate, count } from "random-words";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",

  bgcolor: "background.paper",
  border: "2px solid #000",
};
const headingStyles = {
  color: "#FFF",
  fontFamily: "Poppins",
  fontSize: "22px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "normal",
};

const instructionStyles = {
  color: "#717171",
  fontFamily: "Poppins",
  fontSize: "13px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
};

const styleInModal = {
  display: "flex",
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [generatedCode, setGeneratedCode] = React.useState("");
  const [username, setUsername] = React.useState("");
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const generateCode = () => {
    if (username !== "") {
      const words = generate(5).join(" ");
      setGeneratedCode(words);
    }
  };

  const handleLogin = () => {
    const url = "http://localhost:9000/api/user/login";
    const body = {
      username: username,
      description: generatedCode,
    };

    axios
      .post(url, body)
      .then((response) => {
        console.log(response);
        if (response.data.statusCode === 200) {
          setOpen(false);
        }
        console.log(response.data);
      })
      .catch((error) => {
        console.error("There was a problem with the axios request:", error);
      });
  };

  return (
    <div style={{ display: "inline" }}>
      {/* <Button style={{ float: "right" }} onClick={handleOpen}>
        Login
      </Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={styleInModal}>
            <Box sx={{ flexGrow: 1 }}>
              <img src={LoginImg} style={{ height: "100%" }}></img>
            </Box>
            <Box
              sx={{
                flexGrow: 3,
                backgroundColor: "#131020",
                width: "100%",
                color: "#FFFFFF",
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box style={{ marginLeft: "10%", marginTop: "10%" }}>
                <Box style={headingStyles}>WELCOME TO BLOXPVP</Box>
                <Box
                  sx={{ padding: "2% 2% 2% 0", width: "90%" }}
                  style={instructionStyles}
                >
                  By logging in, you acknowledge that you are at least 18 years
                  of age, that any items you wager are not stolen, and that you
                  agree to our Terms of Use.
                </Box>

                {generatedCode !== "" && username !== "" ? (
                  <Box
                    style={{
                      background:
                        "linear-gradient(180deg, #19182D 0%, #1E1733 100%)",
                      width: "90%",
                      textAlign: "center",
                      paddingTop: "2%",
                      paddingBottom: "2%",
                      color: "#717171",
                    }}
                  >
                    {generatedCode}
                  </Box>
                ) : (
                  ""
                )}

                <Box style={{ marginTop: "4%", marginBottom: "4%" }}>
                  <Box style={{ ...headingStyles, fontSize: "15px" }}>
                    Roblox Username
                  </Box>

                  <Box
                    style={{
                      color: "#FFF",
                      marginTop: "2%",
                      marginBottom: "2%",
                    }}
                  >
                    <TextField
                      placeholder="Enter your robolox username..."
                      onChange={handleInputChange}
                      style={{
                        background:
                          "linear-gradient(180deg, #19182D 0%, #1E1733 100%)",

                        color: "#FFFFFF",
                        borderRadius: "15px",
                        border:
                          "1px solid linear-gradient(180deg, #A448FF 0%, #873AFF 100%)",
                        width: "90%",
                      }}
                      InputProps={{
                        style: { color: "#FFFFFF" },
                      }}
                      InputLabelProps={{
                        style: { color: "#FFFFFF" },
                      }}
                    />
                  </Box>
                </Box>

                <Box>
                  {generatedCode == "" ? (
                    <Button
                      variant="contained"
                      onClick={generateCode}
                      style={{
                        width: "90%",
                        marginTop: "2%",
                        marginBottom: "2%",
                        background:
                          "linear-gradient(180deg, #A448FF 0%, #873AFF 100%)",
                      }}
                    >
                      Login
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      style={{
                        width: "90%",
                        marginTop: "2%",
                        marginBottom: "2%",
                        background:
                          "linear-gradient(180deg, #A448FF 0%, #873AFF 100%)",
                      }}
                      onClick={handleLogin}
                    >
                      Done
                    </Button>
                  )}
                </Box>
              </Box>
              <Box
                style={{
                  backgroundColor: "#19172C",
                  padding: "5%",
                  paddingLeft: "10%",
                  paddingRight: "10%",
                }}
              >
                <Box style={{ color: "#717171" }}>
                  By signing in you confirm that you are 18 years of age or
                  over, of sound mind capable of taking responsibility for your
                  own actions & are in proper jurisdiction, and have read and
                  agreed to our terms of service.
                </Box>
                <Box
                  style={{
                    padding: "4%",
                    paddingRight: "20%",
                    paddingLeft: "20%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>Terms of use</Box>
                  <Box>Support</Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
