import { User } from "../../types/User";

// // Figure out what I want to do with goals
// function getUserGoal(userClass: string) {
//   switch (userClass) {
//     case "Fighter":
//       return "Become Knighted";
//     case "Mage":
//       return "Enroll in the Mage's College";
//     case "Bard":
//       return "Get the king to laugh!";
//     default:
//       return "";
//   }
// }

function UserInfoTab({ userData }: { userData: User }) {
  if (!userData.class) {
    return <h2>Please play the game to build your character!</h2>;
  }
  return (
    <div>
      <p>
        <b>Class</b>: {userData.class}
      </p>
      <p>
        <b>Money</b>: {userData.coins} gold
      </p>
      <p>
        {userData.motivations ? (
          <span>
            <b>Motivated by: </b>
          </span>
        ) : null}
        {userData.motivations?.map((motive) => {
          return <span key={motive}>{motive}</span>;
        })}
      </p>
      <p>
        {userData.skills.length > 0 ? (
          <span>
            <b>Other skills: </b>
          </span>
        ) : null}
        {userData.skills?.map((skill) => {
          return <span key={skill}>{skill}</span>;
        })}
      </p>
    </div>
  );
}

export default UserInfoTab;
