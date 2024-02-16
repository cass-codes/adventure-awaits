import { User } from "../types/User";
import Modal from "./basics/Modal";
import "./UserModal.css";

const barStart = -5;
const barEnd = 5;

const goodnessBarKey = "[evil]---------------------[good]";
const sneakinessBarKey = "[obvious]----------------[sneaky]";
const clevernessBarKey = "[dumb]--------------------[smart]";
const brawnBarKey = "[weak]-------------------[strong]";
const magicBarKey = "[none]-------------------[master]";
const charmBarKey = "[uh]----------------[charismatic]";

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

function UserModal({
  isOpen,
  onClose,
  userData,
}: {
  isOpen: boolean;
  onClose: Function;
  userData: User;
}) {
  let modalData;

  const goodnessBarEval = userData.stats?.goodness || 0;
  const sneakinessBarEval = userData.stats?.sneakiness || 0;
  const clevernessBarEval = userData.stats?.cleverness || 0;
  const brawnBarEval = userData.stats?.brawn || 0;
  const magicBarEval = userData.stats?.magic || 0;
  const charmBarEval = userData.stats?.charm || 0;

  let goodnessBar = "";
  let sneakinessBar = "";
  let clevernessBar = "";
  let brawnBar = "";
  let magicBar = "";
  let charmBar = "";

  for (let i = barStart; i <= barEnd; i++) {
    // Eval Goodness
    if (i < goodnessBarEval) {
      goodnessBar += "[ ]";
    } else if (i === goodnessBarEval) {
      goodnessBar += "[V]";
    } else {
      goodnessBar += "[ ]";
    }

    // Eval Sneakiness
    if (i < sneakinessBarEval) {
      sneakinessBar += "[ ]";
    } else if (i === sneakinessBarEval) {
      sneakinessBar += "[V]";
    } else {
      sneakinessBar += "[ ]";
    }

    // Eval Cleverness
    if (i < clevernessBarEval) {
      clevernessBar += "[ ]";
    } else if (i === clevernessBarEval) {
      clevernessBar += "[V]";
    } else {
      clevernessBar += "[ ]";
    }

    // Eval Brawn
    if (i < brawnBarEval) {
      brawnBar += "[ ]";
    } else if (i === brawnBarEval) {
      brawnBar += "[V]";
    } else {
      brawnBar += "[ ]";
    }

    // Eval Magic
    if (i < magicBarEval) {
      magicBar += "[ ]";
    } else if (i === magicBarEval) {
      magicBar += "[V]";
    } else {
      magicBar += "[ ]";
    }

    // Eval Charm
    if (i < charmBarEval) {
      charmBar += "[ ]";
    } else if (i === charmBarEval) {
      charmBar += "[V]";
    } else {
      charmBar += "[ ]";
    }
  }

  if (!userData.name || !userData.class) {
    modalData = (
      <div>
        <h2>Please play the game to build your character</h2>
      </div>
    );
  } else {
    modalData = (
      <>
        <h1>
          {userData.name} the {userData.class}
        </h1>
        <h2>Goal: {getUserGoal(userData.class)}</h2>
        <p>Stats </p>
        <p>Goodness: </p>
        <p className="barStats">{goodnessBar}</p>
        <p className="barStats barKey">{goodnessBarKey}</p>
        <p>Sneakiness: </p>
        <p className="barStats">{sneakinessBar}</p>
        <p className="barStats barKey">{sneakinessBarKey}</p>
        <p>Cleverness: </p>
        <p className="barStats">{clevernessBar}</p>
        <p className="barStats barKey">{clevernessBarKey}</p>

        <p>Brawn: </p>
        <p className="barStats">{brawnBar}</p>
        <p className="barStats barKey">{brawnBarKey}</p>

        <p>Magic: </p>
        <p className="barStats">{magicBar}</p>
        <p className="barStats barKey">{magicBarKey}</p>

        <p>Charm: </p>
        <p className="barStats">{charmBar}</p>
        <p className="barStats barKey">{charmBarKey}</p>
      </>
    );
  }

  return (
    <Modal hasCloseBtn={true} isOpen={isOpen} onClose={onClose}>
      <div className="UserModal">{modalData}</div>
    </Modal>
  );
}

export default UserModal;
