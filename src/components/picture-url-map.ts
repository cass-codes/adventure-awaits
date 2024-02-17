import Hunstan from "../media/Hunstan.png";
import Kael from "../media/Kael.png";
import Lyra from "../media/Lyra.png";
import Somerild from "../media/Somerild.png";

export function getUrlFromMap(urlStr: string) {
  if (urlStr === "Hunstan.png") {
    return Hunstan;
  }
  if (urlStr === "Kael.png") {
    return Kael;
  }
  if (urlStr === "Lyra.png") {
    return Lyra;
  }
  if (urlStr === "Somerild.png") {
    return Somerild;
  }
  throw new Error("Url not found in map");
}
