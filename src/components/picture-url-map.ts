import Hunstan from "../media/Hunstan.png";
import Kael from "../media/Kael.png";
import Lyra from "../media/Lyra.png";
import Somerild from "../media/Somerild.png";
import Serena from "../media/Serena.png";

export function getUrlFromMap(urlStr: string) {
  if (urlStr in pictureUrlMap) {
    return pictureUrlMap[urlStr as keyof typeof pictureUrlMap];
  }
  throw new Error("Url not found in map");
}

const pictureUrlMap = {
  "Hunstan.png": Hunstan,
  "Kael.png": Kael,
  "Lyra.png": Lyra,
  "Somerild.png": Somerild,
  "Serena.png": Serena,
};
