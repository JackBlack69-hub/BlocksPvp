import React, { useState } from "react";
import HTCombineImg from "./assets/Combine.png";
import CreateGameModal from "./CreateGameModal";
import playerImage1 from "./assets/p1.png";
import playerImage2 from "./assets/player.png";
import pumpkinImage from "./assets/pumpkin.png";
import styles from "./CoinFlip.module.css";

function CoinFlip() {
  const [gameList, setGameList] = useState([
    {
      isGameStarted: true,
    },
    {
      isGameStarted: false,
    },
  ]);

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

      {gameList.map((game) => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            background: "linear-gradient(180deg, #19182C 0%, #2F214F 100%)",
            color: "white",
            padding: "2%",
            marginTop: "1%",
            borderRadius: "15px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <div className="player1">
              <img src={playerImage1} alt="player 1"></img>
            </div>
            <span>vs</span>
            <div className="player2">
              <img src={playerImage2} alt="player 2"></img>
            </div>
          </div>
          <div>
            <img src={playerImage1} alt="coin"></img>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              borderRadius: "128px",
              background: "#151223",
              boxShadow: "0px 9px 11.3px 0px rgba(0, 0, 0, 0.20) inset",
              padding: "0.5rem 2rem",
            }}
          >
            {[1, 2, 3, 4, 5, 6].map((key) => (
              <div key={key} style={{ display: "flex" }}>
                <img src={pumpkinImage} alt="pumpkin"></img>
              </div>
            ))}
            <div style={{ display: "flex" }}>
              <p>+4</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "1.2rem",
                fontWeight: 500,
                color: "#863AFF",
              }}
            >
              5,000 R$
            </p>

            <p
              style={{
                margin: 0,
                fontSize: "0.9rem",
              }}
            >
              (4630-5720)
            </p>
          </div>
          <div
            style={{
              width: "160px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {game.isGameStarted ? (
              <div>View</div>
            ) : (
              <button
                style={{
                  background: `
                        linear-gradient(to bottom, #873AFF, #873AFF ) padding-box, 
                        linear-gradient(#fd8eff 0%, #8c3cff 100%) border-box
                    `,
                  borderWidth: "2px",
                  borderStyle: "solid",
                  borderImageSlice: 1,
                  borderRadius: "8px",
                  fontWeight: 500,
                }}
                className={styles.joinBtn}
              >
                Join
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CoinFlip;
