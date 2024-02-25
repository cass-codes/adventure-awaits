import { MainContentProps } from "../../types/Screen";
import "./MainContent.css";
import PictureMainContent from "./PictureMain";

function MainContent(props: { content: MainContentProps }) {
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
          return (
            <div key={index}>
              <PictureMainContent content={p} />
            </div>
          );
        } else {
          // type is undefined
          return <div key={index}></div>;
        }
      })}
    </div>
  );
}

export default MainContent;
