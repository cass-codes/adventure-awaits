import { PictureMain } from "../../types";
import { getUrlFromMap } from "../picture-url-map";
import "./PictureMain.css";

function PictureMainContent({ content }: { content: PictureMain }) {
  const url = getUrlFromMap(content.url);

  let className = "PictureMain";
  if (content.side === "left") {
    className += " Left";
  } else {
    className += " Right";
  }

  return (
    <div className={className}>
      <img src={url} alt={content.alt} />
      {content.sideText ? (
        <div className="DialogText">
          {content.sideText.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default PictureMainContent;
