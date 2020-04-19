import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selection}
    contentLabel="Selected Restaurant"
    ariaHideApp={false}
    onRequestClose={props.handleModal}
    closeTimeoutMS={200}
    className="modal"
  >
    <h2>Your Random Restaurant Is!</h2>
    {props.selection && <h3>{props.selection}</h3>}
    <button onClick={props.handleModal}>Okay</button>
  </Modal>
);

export default OptionModal;
