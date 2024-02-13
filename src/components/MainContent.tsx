import "./MainContent.css";

function MainContent(props: { content: string }) {
  return (
    <div className="Body">
      <p>{props.content}</p>
    </div>
  );
}

export default MainContent;
