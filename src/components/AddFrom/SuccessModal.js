import React from "react";
import Modal from "react-modal";
import "./SuccessModal.css";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
const SuccessModal = ({ modalOpen, setModalOpen }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#2f5b5a",
      borderRadius: "15px",
    },
  };
  return (
    <Modal isOpen={modalOpen} style={customStyles}>
      <div className="modal-inner">
        <label>Expense Add Successfully</label>
        <img src="" alt="" className="add-image" />
        <Link to="/">
          <div className="take-home-button">
            <HomeIcon />
            HOME
          </div>
        </Link>
      </div>
    </Modal>
  );
};

export default SuccessModal;
