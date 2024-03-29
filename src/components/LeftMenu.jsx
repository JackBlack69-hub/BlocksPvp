import React, { useState } from "react";
import { Button, Drawer, List } from "@mui/material";
import styles from "./LeftMenu.module.css";

function LeftMenu(props) {
  const handleButtonClick = (button) => {
    props.setSelected(button);
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      PaperProps={{
        sx: {
          backgroundColor: "#19172C", // Your desired color
          position: "relative",
          height: "100%",
          overflowY: "visible",
        },
      }}
    >
      <List
        style={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <Button
          style={{
            color: props.selected === "coinflip" ? "#7C00FF" : "#9F9DA7",
            backgroundColor: "transparent",
            flexDirection: "column",
            padding: 28,
            textTransform: "none",
            fontSize: "1.2rem",
          }}
          onClick={() => handleButtonClick("coinflip")}
          button
          className={props.selected === "coinflip" ? styles.sideline : ""}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            style={
              props.selected === "coinflip"
                ? {
                    filter: "drop-shadow(0 0 13px rgb(124, 0, 255))",
                  }
                : {}
            }
          >
            <path
              d="M22.5 6C24.8733 6 27.1934 6.70379 29.1668 8.02236C31.1402 9.34094 32.6783 11.2151 33.5865 13.4078C34.4948 15.6005 34.7324 18.0133 34.2694 20.3411C33.8064 22.6689 32.6635 24.8071 30.9853 26.4853C29.307 28.1635 27.1688 29.3064 24.8411 29.7694C22.5133 30.2324 20.1005 29.9948 17.9078 29.0866C15.7151 28.1783 13.8409 26.6402 12.5223 24.6668C11.2038 22.6935 10.5 20.3734 10.5 18C10.5 14.8174 11.7643 11.7652 14.0147 9.51472C16.2651 7.26428 19.3174 6 22.5 6ZM4.49997 18C4.5021 19.8594 5.08008 21.6725 6.15447 23.1901C7.22886 24.7076 8.74692 25.8552 10.5 26.475V29.61C7.93198 28.9388 5.65898 27.4352 4.0367 25.3344C2.41442 23.2336 1.53442 20.6543 1.53442 18C1.53442 15.3457 2.41442 12.7664 4.0367 10.6656C5.65898 8.56483 7.93198 7.06118 10.5 6.39V9.525C8.74692 10.1448 7.22886 11.2924 6.15447 12.8099C5.08008 14.3275 4.5021 16.1406 4.49997 18Z"
              fill={props.selected === "jackpot" ? "#9F9DA7" : "#7C00FF"}
            />
          </svg>
          <div style={{ paddingTop: 15 }}>Coinflip</div>
        </Button>
        <Button
          style={{
            color: props.selected === "jackpot" ? "#7C00FF" : "#9F9DA7",
            backgroundColor: "transparent",
            flexDirection: "column",
            padding: 28,
            textTransform: "none",
            fontSize: "1.2rem",
          }}
          onClick={() => handleButtonClick("jackpot")}
          button
          className={props.selected === "jackpot" ? styles.sideline : ""}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            style={
              props.selected === "jackpot"
                ? {
                    filter: "drop-shadow(0 0 13px rgb(124, 0, 255))",
                  }
                : {}
            }
          >
            <path
              d="M3.75 15C3.75 16.4774 4.04099 17.9403 4.60636 19.3052C5.17172 20.6701 6.00039 21.9103 7.04505 22.955C8.08971 23.9996 9.3299 24.8283 10.6948 25.3936C12.0597 25.959 13.5226 26.25 15 26.25C16.4774 26.25 17.9403 25.959 19.3052 25.3936C20.6701 24.8283 21.9103 23.9996 22.955 22.955C23.9996 21.9103 24.8283 20.6701 25.3936 19.3052C25.959 17.9403 26.25 16.4774 26.25 15C26.25 13.5226 25.959 12.0597 25.3936 10.6948C24.8283 9.3299 23.9996 8.08971 22.955 7.04505C21.9103 6.00039 20.6701 5.17172 19.3052 4.60636C17.9403 4.04099 16.4774 3.75 15 3.75C13.5226 3.75 12.0597 4.04099 10.6948 4.60636C9.3299 5.17172 8.08971 6.00039 7.04505 7.04505C6.00039 8.08971 5.17172 9.3299 4.60636 10.6948C4.04099 12.0597 3.75 13.5226 3.75 15Z"
              stroke={props.selected === "jackpot" ? "#7C00FF" : "#9F9DA7"}
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.25 15C11.25 15.9946 11.6451 16.9484 12.3483 17.6517C13.0516 18.3549 14.0054 18.75 15 18.75C15.9946 18.75 16.9484 18.3549 17.6517 17.6517C18.3549 16.9484 18.75 15.9946 18.75 15M11.25 15C11.25 14.0054 11.6451 13.0516 12.3483 12.3483C13.0516 11.6451 14.0054 11.25 15 11.25C15.9946 11.25 16.9484 11.6451 17.6517 12.3483C18.3549 13.0516 18.75 14.0054 18.75 15M11.25 15H3.75M18.75 15H26.25M17 11.75L21.25 5.75M13 18.25L8.75 24.25M8.75 5.75L13 11.75M17 18.25L21.25 24.25"
              stroke={props.selected === "jackpot" ? "#7C00FF" : "#9F9DA7"}
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div style={{ paddingTop: 15 }}>Jackpot</div>
        </Button>
      </List>

      <List
        style={{ marginTop: "auto", display: "flex", flexDirection: "column" }}
      >
        <Button
          style={{ color: "#9F9DA7", flexDirection: "column", padding: 28 }}
          button
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="22"
            viewBox="0 0 30 22"
            fill="none"
          >
            <path
              d="M25.4183 1.82833C23.5787 0.976058 21.587 0.35747 19.5122 6.3231e-05C19.4941 -0.000514947 19.476 0.00287778 19.4592 0.0100029C19.4425 0.0171281 19.4275 0.0278126 19.4154 0.0413027C19.1665 0.494934 18.876 1.08603 18.6824 1.53966C16.4818 1.20975 14.2438 1.20975 12.0432 1.53966C11.8496 1.07228 11.5591 0.494934 11.2963 0.0413027C11.2825 0.0138099 11.241 6.3231e-05 11.1995 6.3231e-05C9.1248 0.35747 7.1469 0.976058 5.29348 1.82833C5.27965 1.82833 5.26582 1.84208 5.25199 1.85583C1.48983 7.45061 0.452464 12.8942 0.964229 18.2828C0.964229 18.3103 0.978061 18.3378 1.00572 18.3515C3.49539 20.166 5.88824 21.2657 8.25342 21.9943C8.29491 22.0081 8.33641 21.9943 8.35024 21.9668C8.9035 21.2108 9.40143 20.4135 9.83021 19.5749C9.85787 19.52 9.83021 19.465 9.77488 19.4512C8.98649 19.1488 8.23959 18.7914 7.50652 18.379C7.45119 18.3515 7.45119 18.269 7.49269 18.2278C7.64483 18.1178 7.79698 17.9941 7.94913 17.8841C7.97679 17.8566 8.01828 17.8566 8.04595 17.8704C12.804 20.0286 17.9355 20.0286 22.6382 17.8704C22.6658 17.8566 22.7073 17.8566 22.735 17.8841C22.8871 18.0079 23.0393 18.1178 23.1914 18.2415C23.2467 18.2828 23.2467 18.3653 23.1776 18.3927C22.4583 18.8189 21.6976 19.1625 20.9092 19.465C20.8539 19.4787 20.8401 19.5474 20.8539 19.5887C21.2965 20.4272 21.7944 21.2245 22.3339 21.9806C22.3754 21.9943 22.4169 22.0081 22.4583 21.9943C24.8374 21.2657 27.2302 20.166 29.7199 18.3515C29.7475 18.3378 29.7614 18.3103 29.7614 18.2828C30.37 12.0557 28.7517 6.65332 25.4736 1.85583C25.4598 1.84208 25.4459 1.82833 25.4183 1.82833ZM10.5494 14.9974C9.1248 14.9974 7.9353 13.6915 7.9353 12.0832C7.9353 10.4748 9.09714 9.16891 10.5494 9.16891C12.0156 9.16891 13.1774 10.4886 13.1636 12.0832C13.1636 13.6915 12.0018 14.9974 10.5494 14.9974ZM20.19 14.9974C18.7653 14.9974 17.5758 13.6915 17.5758 12.0832C17.5758 10.4748 18.7377 9.16891 20.19 9.16891C21.6561 9.16891 22.818 10.4886 22.8041 12.0832C22.8041 13.6915 21.6561 14.9974 20.19 14.9974Z"
              fill="#6349FF"
            />
          </svg>
          <div style={{ paddingTop: 15 }}>discord</div>
        </Button>
        <Button
          style={{ color: "#9F9DA7", flexDirection: "column", padding: 28 }}
          button
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="26"
            viewBox="0 0 29 26"
            fill="none"
          >
            <path
              d="M24.2883 16.9519C24.7791 15.735 25.0455 14.4322 25.0455 13.0005C25.0455 11.9697 24.8913 10.9819 24.6248 10.0656C23.7134 10.2804 22.7599 10.3949 21.7644 10.3949C19.7256 10.3972 17.7161 9.89888 15.9054 8.94211C14.0947 7.98533 12.5358 6.5981 11.3602 4.89736C10.1025 8.0043 7.73007 10.5034 4.72781 11.8838C4.67172 12.2418 4.67172 12.6283 4.67172 13.0005C4.67172 14.3674 4.9354 15.7208 5.44769 16.9836C5.95998 18.2463 6.71086 19.3937 7.65745 20.3602C9.56917 22.3121 12.162 23.4087 14.8656 23.4087C16.3379 23.4087 17.7541 23.0794 19.0301 22.4924C19.8294 24.0529 20.1939 24.826 20.1659 24.826C17.8663 25.6135 16.0855 26 14.8656 26C11.4723 26 8.23328 24.6399 5.84956 22.1918C4.39969 20.716 3.32193 18.9033 2.70866 16.909H0.84375V10.3949H2.37213C2.83519 8.09355 3.89981 5.9631 5.45301 4.22962C7.00621 2.49614 8.99005 1.2243 11.194 0.549063C13.398 -0.126177 15.7399 -0.179632 17.9713 0.39437C20.2026 0.968372 22.2402 2.14842 23.8677 3.8093C25.6347 5.60639 26.84 7.89825 27.3311 10.3949H28.8875V16.909H28.8034L23.8116 21.5905L16.38 20.7315V18.3406H23.1526L24.2883 16.9519ZM11.0377 12.6713C11.4583 12.6713 11.8649 12.8431 12.1594 13.158C12.4553 13.4626 12.6214 13.8743 12.6214 14.3034C12.6214 14.7324 12.4553 15.1441 12.1594 15.4487C11.8649 15.7493 11.4583 15.9211 11.0377 15.9211C10.1543 15.9211 9.43916 15.2053 9.43916 14.3034C9.43916 13.4014 10.1543 12.6713 11.0377 12.6713ZM18.6796 12.6713C19.563 12.6713 20.264 13.4014 20.264 14.3034C20.264 15.2053 19.563 15.9211 18.6796 15.9211C17.7962 15.9211 17.0811 15.2053 17.0811 14.3034C17.0811 13.8705 17.2495 13.4554 17.5493 13.1493C17.849 12.8432 18.2556 12.6713 18.6796 12.6713Z"
              fill="#59FF56"
            />
          </svg>
          <div style={{ paddingTop: 15 }}>Support</div>
        </Button>
      </List>
    </Drawer>
  );
}

export default LeftMenu;
