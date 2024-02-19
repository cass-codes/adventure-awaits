import "./App.css";
import MainApp from "./pages/MainApp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Adventure Awaits!</h1>
      </header>
      <div className="App-body">
        <MainApp />
      </div>
      <footer className="App-footer">
        <p>
          Created by:{" "}
          <a
            href="https://github.com/cass-codes"
            rel="noreferrer"
            target="_blank"
          >
            cass-codes
          </a>
          {""} | Art by:{" "}
          <a
            href="https://www.redbubble.com/people/gigglysaurus/shop"
            rel="noreferrer"
            target="_blank"
          >
            GigglySaurus
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
