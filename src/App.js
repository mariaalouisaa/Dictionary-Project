import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <h1>Dictionary</h1>
      <Search />
      <footer>
        Open source code on{" "}
        <a
          href="https://github.com/mariaalouisaa/Dictionary-Project"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        , site hosted on{" "}
        <a
          href="https://practical-poincare-037e95.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Netlify.
        </a>
      </footer>
    </div>
  );
}

export default App;
