import { useState } from "react";
import "./GlobalActionsHeader.css";
import UserModal from "./UserModal/UserModal";
import LoadGameModal from "./LoadGameModal";
import LoginModal from "./LoginModal/LoginModal";
import { Game } from "../types";

function GlobalActionsHeader(props: {
  onFirstScreen: boolean;
  gameData: Game;
  // eslint-disable-next-line @typescript-eslint/ban-types
  quitGame: Function;
}) {
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isLoadGameModalOpen, setIsLoadGameModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  function handleOpenLoadGameModal() {
    // props.loadGame();
    // TODO: do this bit to import a gameId that exists
    setIsLoadGameModalOpen(true);
  }

  function saveGameHandler() {
    // props.saveGame();
  }

  function quitGameHandler() {
    props.quitGame();
  }

  function handleOpenUserModal() {
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
        gameData={props.gameData}
        onClose={handleCloseUserModal}
      />
      <LoadGameModal
        isOpen={isLoadGameModalOpen}
        onClose={handleCloseLoadGameModal}
      />
    </div>
  );
}

export default GlobalActionsHeader;
