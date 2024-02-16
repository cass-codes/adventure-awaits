import { MainContentProps, PictureMain } from "../types/Screen";
import "./MainContent.css";
import url from "../media/grizzledMan.png";

function MainContent(props: { content: MainContentProps }) {
  function buildPictureMain(p: PictureMain, index: number) {
    let className = "PictureMain";
    if (p.side === "left") {
      className += " Left";
    } else {
      className += " Right";
    }
    return (
      <div key={index} className={className}>
        <img src={url} alt={p.alt} />
        {p.sideText ? <p>{p.sideText}</p> : null}
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
        } else {
          // type is PictureMain
          return buildPictureMain(p, index);
        }
      })}
    </div>
  );
}

export default MainContent;
