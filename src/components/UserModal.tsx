import Modal from "./basics/Modal";
import "./UserModal.css";

function UserModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: Function;
}) {
  return (
    <Modal hasCloseBtn={true} isOpen={isOpen} onClose={onClose}>
      <h1 className="UserModal">User</h1>
      <h2>Stats</h2>
    </Modal>
  );
}

export default UserModal;
