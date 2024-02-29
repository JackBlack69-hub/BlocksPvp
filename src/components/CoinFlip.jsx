import React from "react";
import HTCombineImg from "./assets/Combine.png";
import CreateGameModal from "./CreateGameModal";
import styles from "./CoinFlip.module.css";

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
        <div
          style={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem ",
          }}
        >
          <img src={HTCombineImg}></img>
          <button
            style={{
              background: `
                        linear-gradient(to bottom, #ffbf5f, #dc7700 ) padding-box, 
                        linear-gradient(#ffeda0 0%, #dc7701 100%) border-box
                    `,
              borderWidth: "3px",
              borderStyle: "solid",
              borderImageSlice: 1,
              borderRadius: "13px",
              fontWeight: 500,
            }}
            className={styles.highestToLowest}
          >
            Highest to Lowest
          </button>
          <button
            style={{
              background: `
                        linear-gradient(to bottom, #873AFF, #873AFF ) padding-box, 
                        linear-gradient(#fd8eff 0%, #8c3cff 100%) border-box
                    `,
              borderWidth: "3px",
              borderStyle: "solid",
              borderImageSlice: 1,
              borderRadius: "13px",
              fontWeight: 500,
            }}
            className={styles.mm2Btn}
          >
            MM2
          </button>
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
