import {createPortal} from "react-dom";

import style from "./Modal.module.css";

const BackDrop = (props) => {
  return <div className={style.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={style.modal}>
      <div className={style.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {createPortal(
        <BackDrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Modal;
