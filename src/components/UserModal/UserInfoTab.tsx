import { User } from "../../types/User";

function getUserGoal(userClass: string) {
  switch (userClass) {
    case "Fighter":
      return "Become Knighted";
    case "Mage":
      return "Enroll in the Mage's College";
    case "Bard":
      return "Get the king to laugh!";
    default:
      return "";
  }
}

function UserInfoTab({ userData }: { userData: User }) {
  return (
    <div>
      <h2>Goal: {getUserGoal(userData.class || "")}</h2>
      <p>
        <b>Class</b>: {userData.class}
      </p>
      <p>
        <b>Money</b>: {userData.coins} gold
      </p>
      <>
        {userData.motivations?.forEach((motivation) => {
          return (
            <p>
              <b>Motivated By</b>: {motivation}
            </p>
          );
        })}
      </>
    </div>
  );
}

export default UserInfoTab;
