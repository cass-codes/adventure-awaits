function UserTabs({ openTab }: { openTab: Function }) {
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
    <div className="UserTabs">
      <button className="UserTabs-tab" onClick={openStatsHandler}>
        Stats
      </button>
      <button className="UserTabs-tab" onClick={openQuestsHandler}>
        Quests
      </button>
      <button className="UserTabs-tab" onClick={openRelationshipsHandler}>
        Relationships
      </button>
      <button className="UserTabs-tab" onClick={openInfoHandler}>
        Info
      </button>
    </div>
  );
}

export default UserTabs;
