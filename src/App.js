import React, { useState } from "react";

import Modal from "./Modal";

import "./index.scss";

function App() {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <div className="App">
      <button className="open-modal-btn" onClick={toggleModal}>
        ✨ Открыть окно
      </button>

      <Modal open={open} toggleModal={toggleModal} />
    </div>
  );
}

export default App;
