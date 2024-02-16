import grizzledMan from "../media/grizzledMan.png";

export function getUrlFromMap(urlStr: string) {
  if (urlStr === "grizzledMan.png") {
    return grizzledMan;
  }
  throw new Error("Url not found in map");
}
