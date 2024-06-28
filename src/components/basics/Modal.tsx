import { useEffect, useRef, useState } from "react";
import "./Modal.css";

function Modal(props: {
  isOpen: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  hasCloseBtn: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClose: any;
}) {
  const [isModalOpen, setIsModalOpen] = useState(props.isOpen);
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    setIsModalOpen(props.isOpen);
  }, [props.isOpen]);

  useEffect(() => {
    const modalElement = modalRef.current;
    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isModalOpen]);

  const handleCloseModal = () => {
    if (props.onClose) {
      props.onClose();
    }
    setIsModalOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };

  return (
    <dialog ref={modalRef} onKeyDown={handleKeyDown}>
      {props.hasCloseBtn && (
        <button className="CloseBtn" onClick={handleCloseModal}>
          &#x2715;
        </button>
      )}
      {props.children}
    </dialog>
  );
}

export default Modal;
