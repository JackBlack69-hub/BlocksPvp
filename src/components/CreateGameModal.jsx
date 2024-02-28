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
      <button onClick={onOpenModal}>Create Game</button>
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
