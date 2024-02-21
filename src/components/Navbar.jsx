// Navbar.js
import React, { useState } from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import logo from "./assets/Logopvp.png";
import UpperNavbar from "./UpperNavbar";
import { sizing } from "@mui/system";
import logoImg2 from "./assets/logo2.png";

function Navbar() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (button) => {
    console.log("Selected Button:", button);
    setSelectedButton(button);
};

  return (
    <div
      style={{
        backgroundColor: "#19172C",
        paddingRight: "0",
        paddingLeft: "0",
        display: "block",
      }}
    >
      <div style={{ paddingRight: "0", paddingLeft: "0", display: "flex" }}>
        <img src={logo} style={{ paddingRight: "3%" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ color: "white" }}>
            <UpperNavbar />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "white",
            }}
          >
            <div style={{ display: "flex",gap:10 }}>
              <div>
                <Button style={{
                    color: selectedButton === "coinflip" ? "#7C00FF" : "#9F9DA7",
                    backgroundColor: "transparent",
                    flexDirection: "row",
                    gap: 4
                  }}
                  onClick={() => handleButtonClick("coinflip")}
                  button
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                  >
                    <path
                      d="M11.875 3.16666C13.1276 3.16666 14.3521 3.5381 15.3936 4.23402C16.4351 4.92993 17.2469 5.91906 17.7263 7.07633C18.2056 8.23359 18.331 9.50702 18.0867 10.7356C17.8423 11.9641 17.2391 13.0926 16.3534 13.9783C15.4676 14.8641 14.3391 15.4673 13.1106 15.7116C11.8821 15.956 10.6086 15.8306 9.45136 15.3512C8.2941 14.8719 7.30497 14.0601 6.60905 13.0186C5.91314 11.9771 5.54169 10.7526 5.54169 9.49999C5.54169 7.82029 6.20895 6.20938 7.39668 5.02165C8.58441 3.83392 10.1953 3.16666 11.875 3.16666ZM2.37503 9.49999C2.37615 10.4813 2.68119 11.4382 3.24823 12.2392C3.81527 13.0401 4.61647 13.6458 5.54169 13.9729V15.6275C4.18636 15.2733 2.98672 14.4797 2.13052 13.3709C1.27432 12.2622 0.809875 10.9008 0.809875 9.49999C0.809875 8.09913 1.27432 6.73781 2.13052 5.62906C2.98672 4.52032 4.18636 3.72673 5.54169 3.37249V5.02707C4.61647 5.35419 3.81527 5.95984 3.24823 6.76079C2.68119 7.56173 2.37615 8.51864 2.37503 9.49999Z"
                      fill={selectedButton === "coinflip" ?  "#7C00FF" : "#9F9DA7" }
                    />
                  </svg>
                  Coinflip
                </Button>
              </div>
              <div>
              <Button style={{
                    color: selectedButton === "jackpot" ? "#7C00FF" : "#9F9DA7",
                    backgroundColor: "transparent",
                    flexDirection: "row",
                    gap: 4
                  }}
                  onClick={() => handleButtonClick("jackpot")}
                  button
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                  >
                    <path
                      d="M2.125 8.5C2.125 9.33718 2.28989 10.1662 2.61027 10.9396C2.93064 11.7131 3.40022 12.4158 3.99219 13.0078C4.58417 13.5998 5.28694 14.0694 6.06039 14.3897C6.83384 14.7101 7.66282 14.875 8.5 14.875C9.33718 14.875 10.1662 14.7101 10.9396 14.3897C11.7131 14.0694 12.4158 13.5998 13.0078 13.0078C13.5998 12.4158 14.0694 11.7131 14.3897 10.9396C14.7101 10.1662 14.875 9.33718 14.875 8.5C14.875 7.66282 14.7101 6.83384 14.3897 6.06039C14.0694 5.28694 13.5998 4.58417 13.0078 3.99219C12.4158 3.40022 11.7131 2.93064 10.9396 2.61027C10.1662 2.28989 9.33718 2.125 8.5 2.125C7.66282 2.125 6.83384 2.28989 6.06039 2.61027C5.28694 2.93064 4.58417 3.40022 3.99219 3.99219C3.40022 4.58417 2.93064 5.28694 2.61027 6.06039C2.28989 6.83384 2.125 7.66282 2.125 8.5Z"
                      stroke={selectedButton === "jackpot" ? "#7C00FF" : "#9F9DA7"}
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.375 8.5C6.375 9.06358 6.59888 9.60409 6.9974 10.0026C7.39591 10.4011 7.93641 10.625 8.5 10.625C9.06358 10.625 9.60409 10.4011 10.0026 10.0026C10.4011 9.60409 10.625 9.06358 10.625 8.5M6.375 8.5C6.375 7.93641 6.59888 7.39591 6.9974 6.9974C7.39591 6.59888 7.93641 6.375 8.5 6.375C9.06358 6.375 9.60409 6.59888 10.0026 6.9974C10.4011 7.39591 10.625 7.93641 10.625 8.5M6.375 8.5H2.125M10.625 8.5H14.875M9.63333 6.65833L12.0417 3.25833M7.36667 10.3417L4.95833 13.7417M4.95833 3.25833L7.36667 6.65833M9.63333 10.3417L12.0417 13.7417"
                      stroke={selectedButton === "jackpot" ? "#7C00FF" : "#9F9DA7"}
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Jackpot
                </Button>
              </div>
            </div>

            <div>
              <button>786</button>
              <button>Deposit</button>
            </div>

            <div style={{ display: "flex" }}>
              <div>
                <button>Withdraw</button>
              </div>
              <div>
                <button>Icon</button>
              </div>
              <div>
                <img src={logoImg2}></img>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                <div>Use Code - BLOXPVP</div>
                <div>Level 39</div>
              </div>
              <div>
                <button>Icon</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
