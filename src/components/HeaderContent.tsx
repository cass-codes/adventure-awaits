import "./HeaderContent.css";

function HeaderContent(props: { content: string }) {
  return (
    <div className="Header">
      <h1 className="Header">{props.content}</h1>
    </div>
  );
}

export default HeaderContent;
