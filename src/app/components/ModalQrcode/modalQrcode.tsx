import React from "react";
import "./modalQrcode.css";

type ModalProps = {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const ModalQrcode: React.FC<ModalProps> = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default ModalQrcode;