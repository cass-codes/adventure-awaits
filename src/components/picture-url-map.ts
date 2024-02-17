import grizzledMan from "../media/grizzledMan.png";
import beardedKnight from "../media/beardedKnight.png";
import quietDruid from "../media/quietDruid.png";
import hopefulFighter from "../media/hopefulFighter.png";

export function getUrlFromMap(urlStr: string) {
  if (urlStr === "grizzledMan.png") {
    return grizzledMan;
  }
  if (urlStr === "beardedKnight.png") {
    return beardedKnight;
  }
  if (urlStr === "quietDruid.png") {
    return quietDruid;
  }
  if (urlStr === "hopefulFighter.png") {
    return hopefulFighter;
  }
  throw new Error("Url not found in map");
}
