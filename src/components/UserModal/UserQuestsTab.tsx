import { QuestStatus } from "../../types/Quest";
import { User } from "../../types/User";

function UserQuestsTab({ userData }: { userData: User }) {
  let modalData;

  const quests = userData.quests;
  console.log(quests);
  const questKeys = Object.keys(quests);

  const activeQuestsKeys = questKeys.filter((questKey) => {
    return quests[questKey].status === QuestStatus.active;
  });

  if (activeQuestsKeys.length > 0) {
    modalData = (
      <div>
        <h3>Quests</h3>
        <ul>
          {activeQuestsKeys.map((questKey) => {
            const quest = quests[questKey];
            return <li key={questKey}>{quest.displayText}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    modalData = <p>No quests yet</p>;
  }

  return modalData;
}

export default UserQuestsTab;
