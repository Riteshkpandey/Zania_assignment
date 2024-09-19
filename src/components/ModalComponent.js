import React from "react";
import Modal from "react-modal";

const ModalComponent = ({ isOpen, onRequestClose, selectedImage }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="image-modal"
      overlayClassName="image-modal-overlay"
    >
      <button onClick={onRequestClose} className="close-button">
        X
      </button>
      {selectedImage && (
        <img src={selectedImage} alt={selectedImage} className="modal-image" />
      )}
    </Modal>
  );
};

export default ModalComponent;
