import "./App.css";
import logo from "./assets/falsify.png";

function url() {
  const url = window.location.href;
  return url;
}

function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo" width="160px" />
      <h1>
        <span id="cap">Capture</span> <span>The Flag</span>{" "}
      </h1>
      <button>Check for Flags</button>
      <br />
      <p>We help you capture the FLAG! </p>
      <br />
      <h3>
        <a href="#"> -> Visit Our Website!</a>
      </h3>
    </div>
  );
}

export default App;
