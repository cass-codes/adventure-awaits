import Modal from "../basics/Modal";
import "./LoginModal.css";

function LoginModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onClose: Function;
}) {
  function onCloseHandler() {
    onClose();
  }

  function loginHandler(data: any) {
    data.preventDefault();
    console.log("login", data);
  }

  function signUpHandler(data: any) {
    console.log("signUp", data);
  }

  return (
    <Modal hasCloseBtn={true} isOpen={isOpen} onClose={onCloseHandler}>
      <form className="LoginModal" onSubmit={loginHandler}>
        <h2>Login / Sign Up</h2>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <div className="LoginButtonRow">
          <button type="submit">Login</button>
          <button type="button" onClick={signUpHandler}>
            Sign Up
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default LoginModal;
