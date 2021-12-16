import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <h1>Dictionary</h1>
      <Search />
      <footer>
        Coded by Maria Castro hosted on{" "}
        <a
          href="https://practical-poincare-037e95.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
