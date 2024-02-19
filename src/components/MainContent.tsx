import { MainContentProps, PictureMain } from "../types/Screen";
import "./MainContent.css";
import { getUrlFromMap } from "./picture-url-map";

function MainContent(props: { content: MainContentProps }) {
  function buildPictureMain(p: PictureMain, index: number) {
    const url = getUrlFromMap(p.url);

    let className = "PictureMain";
    if (p.side === "left") {
      className += " Left";
    } else {
      className += " Right";
    }

    return (
      <div key={index} className={className}>
        <img src={url} alt={p.alt} />
        {p.sideText ? <p className="DialogText">{p.sideText}</p> : null}
      </div>
    );
  }

  return (
    <div className="Body">
      {props.content.map((p, index) => {
        if (typeof p === "string") {
          return (
            <div key={index}>
              <p>{p}</p>
            </div>
          );
        } else if ("url" in p) {
          // type is PictureMain
          return buildPictureMain(p, index);
        } else {
          // type is undefined
          return <></>;
        }
      })}
    </div>
  );
}

export default MainContent;
