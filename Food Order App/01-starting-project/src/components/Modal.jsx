import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ open, children, className, onClose }) {
  const dialog = useRef();
  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <>
      <dialog ref={dialog} onClose={onClose}>
        {open ? children : null}
      </dialog>
    </>,
    document.getElementById("modal")
  );
}
