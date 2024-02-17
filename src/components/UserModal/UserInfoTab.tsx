import { User } from "../../types/User";

function UserInfoTab({ userData }: { userData: User }) {
  return (
    <div>
      <h3>Info</h3>
      <p>Name: {userData.name}</p>
      <p>Class: {userData.class}</p>
      <p>Money: {userData.coins} gold</p>
      <>
        {userData.motivations?.forEach((motivation) => {
          return <p>Motivated By: {motivation}</p>;
        })}
      </>
    </div>
  );
}

export default UserInfoTab;
