import "./UserTabs.css";

function UserTabs({
  openTab,
  activeTab,
}: {
  // eslint-disable-next-line @typescript-eslint/ban-types
  openTab: Function;
  activeTab: string;
}) {
  function openStatsHandler() {
    openTab("stats");
  }

  function openQuestsHandler() {
    openTab("quests");
  }

  function openRelationshipsHandler() {
    openTab("relationships");
  }

  function openInfoHandler() {
    openTab("info");
  }

  return (
    <div>
      <button
        className={activeTab === "stats" ? "ActiveTab" : "InactiveTabs"}
        onClick={openStatsHandler}
      >
        Stats
      </button>
      <button
        className={activeTab === "quests" ? "ActiveTab" : "InactiveTabs"}
        onClick={openQuestsHandler}
      >
        Quests
      </button>
      <button
        className={activeTab === "relationships" ? "ActiveTab" : "InactiveTabs"}
        onClick={openRelationshipsHandler}
      >
        Relationships
      </button>
      <button
        className={activeTab === "info" ? "ActiveTab" : "InactiveTabs"}
        onClick={openInfoHandler}
      >
        Info
      </button>
    </div>
  );
}

export default UserTabs;
