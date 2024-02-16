import grizzledMan from "../media/grizzledMan.png";
import beardedKnight from "../media/beardedKnight.png";

export function getUrlFromMap(urlStr: string) {
  if (urlStr === "grizzledMan.png") {
    return grizzledMan;
  }
  if (urlStr === "beardedKnight.png") {
    return beardedKnight;
  }
  throw new Error("Url not found in map");
}
