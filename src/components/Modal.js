import React from "react";

const Modal = (props) => {
  return (
    <div id="modal" className={props.display} onClick={props.handleDisplay}>
      <div>Congratulations! You beat your previous Score!</div>
    </div>
  );
};

export default Modal;
