import { useState } from "react";
import { User } from "../../types/User";
import Modal from "../basics/Modal";
import "./UserModal.css";
import UserStatsTab from "./UserStatsTab";
import UserTabs from "./UserTabs";
import UserQuestsTab from "./UserQuestsTab";
import UserRelationshipsTab from "./UserRelationshipsTab";
import UserInfoTab from "./UserInfoTab";

function UserModal({
  isOpen,
  onClose,
  userData,
}: {
  isOpen: boolean;
  onClose: Function;
  userData: User;
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
        {activeTab === "stats" && <UserStatsTab userData={userData} />}
        {activeTab === "quests" && <UserQuestsTab userData={userData} />}
        {activeTab === "relationships" && (
          <UserRelationshipsTab userData={userData} />
        )}
        {activeTab === "info" && <UserInfoTab userData={userData} />}
      </div>
    </Modal>
  );
}

export default UserModal;
