import { useState } from "react";
import { Game } from "../../types/User";
import Modal from "../basics/Modal";
import "./UserModal.css";
import UserStatsTab from "./UserStatsTab";
import UserTabs from "./UserTabs";
import UserQuestsTab from "./UserQuestsTab";
import UserRelationshipsTab from "./UserRelationshipsTab";
import UserInfoTab from "./UserInfoTab";

function UserModal({
  isOpen,
  gameData,
  onClose,
}: {
  isOpen: boolean;
  gameData: Game;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onClose: Function;
}) {
  const [activeTab, setActiveTab] = useState("stats");

  function onCloseHandler() {
    setActiveTab("stats");
    onClose();
  }

  function openTabHandler(tab: string) {
    setActiveTab(tab);
  }

  return (
    <Modal hasCloseBtn={true} isOpen={isOpen} onClose={onCloseHandler}>
      <UserTabs openTab={openTabHandler} activeTab={activeTab} />
      <div className="UserModal">
        {activeTab === "stats" && (
          <UserStatsTab characterData={gameData.character} />
        )}
        {activeTab === "quests" && <UserQuestsTab /*userData={userData} */ />}
        {activeTab === "relationships" && (
          <UserRelationshipsTab characterData={gameData.character} />
        )}
        {activeTab === "info" && (
          <UserInfoTab characterData={gameData.character} />
        )}
      </div>
    </Modal>
  );
}

export default UserModal;
