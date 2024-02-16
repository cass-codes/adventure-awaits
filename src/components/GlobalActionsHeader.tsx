import { useState } from "react";
import "./GlobalActionsHeader.css";
import UserModal from "./UserModal";

function GlobalActionsHeader(props: {
  onFirstScreen: boolean;
  saveGame: Function;
  loadGame: Function;
  quitGame: Function;
  loadUser: Function;
}) {
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [userData, setUserData] = useState({});

  function loadGameHandler() {
    props.loadGame();
  }

  function saveGameHandler() {
    props.saveGame();
  }

  function quitGameHandler() {
    props.quitGame();
  }

  function handleOpenUserModal() {
    // get user data?
    setIsUserModalOpen(true);
  }

  function handleCloseUserModal() {
    setIsUserModalOpen(false);
  }

  return (
    <div className="Global-Header">
      {props.onFirstScreen ? (
        <button className="Global-Header-Items" onClick={loadGameHandler}>
          Load
        </button>
      ) : (
        <div>
          <button className="Global-Header-Items" onClick={saveGameHandler}>
            Save
          </button>
          <button className="Global-Header-Items" onClick={quitGameHandler}>
            Quit
          </button>
        </div>
      )}
      <div className="Global-Header-Items">
        <button
          className="Global-Header-User-button"
          onClick={handleOpenUserModal}
        />
      </div>
      <UserModal isOpen={isUserModalOpen} onClose={handleCloseUserModal} />
    </div>
  );
}

export default GlobalActionsHeader;
