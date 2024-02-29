import React from "react";
import HTCombineImg from "./assets/Combine.png";
import CreateGameModal from "./CreateGameModal";

function CoinFlip() {
  return (
    <div style={{ margin: "2rem 3rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div style={{ color: "white" }}>
          <CreateGameModal />
        </div>
        <div style={{ color: "white" }}>
          <img src={HTCombineImg}></img>
          <button>Highest to Lowest</button> <button>MM2</button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "white",
            margin: "1%",

            background: "linear-gradient(180deg, #19182C 0%, #2F214F 100%)",
            width: "100%",
            padding: "2%",
            marginLeft: "0",
          }}
        >
          Test
        </div>
        <div
          style={{
            color: "white",
            margin: "1%",
            background: "linear-gradient(180deg, #19182C 0%, #2F214F 100%)",
            width: "100%",
            padding: "2%",
          }}
        >
          Test
        </div>
        <div
          style={{
            color: "white",
            margin: "1%",
            background: "linear-gradient(180deg, #19182C 0%, #2F214F 100%)",
            width: "100%",
            padding: "2%",
            marginRight: "0",
          }}
        >
          Test
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          background: "linear-gradient(180deg, #19182C 0%, #2F214F 100%)",
          color: "white",
          padding: "2%",
          marginTop: "1%",
        }}
      >
        <div>Text</div>
        <div>Text</div>
        <div>Text</div>
        <div>Text</div>
        <div>Text</div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          background: "linear-gradient(180deg, #19182C 0%, #2F214F 100%)",
          color: "white",
          padding: "2%",
          marginTop: "1%",
        }}
      >
        <div>Text</div>
        <div>Text</div>
        <div>Text</div>
        <div>Text</div>
        <div>Text</div>
      </div>
    </div>
  );
}

export default CoinFlip;
