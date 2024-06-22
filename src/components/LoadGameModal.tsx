import Modal from "./basics/Modal";
import "./LoadGameModal.css";

function LoadGameModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: Function;
}) {
  function onCloseHandler() {
    onClose();
  }
  return (
    <Modal hasCloseBtn={true} isOpen={isOpen} onClose={onCloseHandler}>
      <h3>Load Game</h3>
      <form className="LoadGameModalForm">
        <label>Enter the game id to load</label>
        <input type="text" />
        <button className="LoadGameModalButton" type="submit">
          Load
        </button>
      </form>
    </Modal>
  );
}

export default LoadGameModal;
