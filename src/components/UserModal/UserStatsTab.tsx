import { Character } from "../../types/User";

const barStart = -5;
const barEnd = 5;

const magicBarStart = 0;
const magicBarEnd = 10;

const goodnessBarKey = "[evil]---------------------[good]";
const sneakinessBarKey = "[obvious]----------------[sneaky]";
const clevernessBarKey = "[dumb]--------------------[smart]";
const brawnBarKey = "[weak]-------------------[strong]";
const magicBarKey = "[none]-------------------[master]";
const charmBarKey = "[uh]----------------[charismatic]";

function generateBar(
  statValue: number,
  specificBarStart = barStart,
  specificBarEnd = barEnd
) {
  let bar = "";
  for (let i = specificBarStart; i <= specificBarEnd; i++) {
    if (i < statValue) {
      bar += "[ ]";
    } else if (i === statValue) {
      bar += "[V]";
    } else {
      bar += "[ ]";
    }
  }
  return bar;
}

function UserStatsTab({ userData }: { userData: Character }) {
  let modalData;

  const goodnessBar = generateBar(userData.stats?.goodness || 0);
  const sneakinessBar = generateBar(userData.stats?.sneakiness || 0);
  const clevernessBar = generateBar(userData.stats?.cleverness || 0);
  const brawnBar = generateBar(userData.stats?.brawn || 0);
  const magicBar = generateBar(
    userData.stats?.magic || 0,
    magicBarStart,
    magicBarEnd
  );
  const charmBar = generateBar(userData.stats?.charm || 0);

  if (!userData.name || !userData.class) {
    modalData = (
      <div>
        <h2>Please play the game to build your character!</h2>
      </div>
    );
  } else {
    modalData = (
      <>
        <h1>
          {userData.name} the {userData.class}
        </h1>
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

  return <div>{modalData}</div>;
}

export default UserStatsTab;
