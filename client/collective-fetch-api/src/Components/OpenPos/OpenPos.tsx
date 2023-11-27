import React, { useState } from "react";
import "./OpenPos.css";

export const Positions = () => {
  const [isModalOpen, setIsModalOpen] = useState<Boolean>(false);
  const openAddPositionsModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <div className="positions-page-wrapper">
        <button onClick={openAddPositionsModal}>
          Add an existing Position
        </button>
        <div className="positions-wrapper">
          <div className="position-container"></div>
        </div>
        {isModalOpen ? (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => setIsModalOpen(false)}>
                &times;
              </span>
              <p>Add an existing Position</p>
              <div>
                <span>Name</span>
                <input type="text" />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
