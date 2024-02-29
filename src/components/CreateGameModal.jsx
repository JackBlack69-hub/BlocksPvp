import React, { useState } from "react";
import ReactDOM from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "./CreateGameModal.css";

function CreateGameModal() {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <button
        onClick={onOpenModal}
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
        className="create-game-btn"
      >
        Create Game
      </button>
      <button className="history-btn">History</button>
      <Modal open={open} onClose={onCloseModal} showCloseIcon={false} center>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex" }}>
            <div>
              <button>Search for an item</button>
            </div>
            <div>
              <button>Highest to Lowest</button>
            </div>
          </div>
          <div>
            <button>Create Game</button>
          </div>
        </div>
        <div>Total Value</div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          <div>Huge Pumpkin Cat</div>
          <div>Huge Pumpkin Cat</div>
          <div>Huge Pumpkin Cat</div>
          <div>Huge Pumpkin Cat</div>
          <div>Huge Pumpkin Cat</div>
          <div>Huge Pumpkin Cat</div>
          <div>Huge Pumpkin Cat</div>
          <div>Huge Pumpkin Cat</div>
          <div>Huge Pumpkin Cat</div>
          <div>Huge Pumpkin Cat</div>
          <div>Huge Pumpkin Cat</div>
          <div>Huge Pumpkin Cat</div>
          <div>Huge Pumpkin Cat</div>
          <div>Huge Pumpkin Cat</div>
        </div>
      </Modal>
    </div>
  );
}

export default CreateGameModal;
