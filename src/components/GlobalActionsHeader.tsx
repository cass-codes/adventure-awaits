import { useState } from "react";
import "./GlobalActionsHeader.css";
import UserModal from "./UserModal/UserModal";
import { SavingService } from "../server/SavingService/SavingService";
import LoadGameModal from "./LoadGameModal";
import LoginModal from "./LoginModal/LoginModal";

function GlobalActionsHeader(props: {
  onFirstScreen: boolean;
  saveGame: Function;
  loadGame: Function;
  quitGame: Function;
  loadUser: Function;
}) {
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isLoadGameModalOpen, setIsLoadGameModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [userData, setUserData] = useState(SavingService.loadUser());

  function handleOpenLoadGameModal() {
    // props.loadGame();
    setIsLoadGameModalOpen(true);
  }

  function saveGameHandler() {
    props.saveGame();
  }

  function quitGameHandler() {
    props.quitGame();
  }

  function handleOpenUserModal() {
    const user = props.loadUser();
    setUserData(user);
    setIsUserModalOpen(true);
  }

  function handleOpenLoginModal() {
    setIsLoginModalOpen(true);
  }

  function handleCloseUserModal() {
    setIsUserModalOpen(false);
  }

  function handleCloseLoadGameModal() {
    setIsLoadGameModalOpen(false);
  }

  function handleCloseLoginModal() {
    setIsLoginModalOpen(false);
  }

  return (
    <div className="Global-Header">
      {props.onFirstScreen ? (
        <>
          <button
            className="Global-Header-Items"
            onClick={handleOpenLoadGameModal}
          >
            Load
          </button>
          <div className="Global-Header-Items">
            <button
              className="Global-Header-User-button"
              onClick={handleOpenLoginModal}
            />
          </div>
          <LoginModal
            isOpen={isLoginModalOpen}
            onClose={handleCloseLoginModal}
          />
        </>
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
      <UserModal
        isOpen={isUserModalOpen}
        onClose={handleCloseUserModal}
        userData={userData}
      />
      <LoadGameModal
        isOpen={isLoadGameModalOpen}
        onClose={handleCloseLoadGameModal}
      />
    </div>
  );
}

export default GlobalActionsHeader;
