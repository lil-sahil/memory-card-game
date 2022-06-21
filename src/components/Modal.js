import React from "react";

const Modal = (props) => {
  return (
    <div id="modal" className={props.display} onClick={props.handleDisplay}>
      Congratulations! You beat your previous Score!
    </div>
  );
};

export default Modal;
