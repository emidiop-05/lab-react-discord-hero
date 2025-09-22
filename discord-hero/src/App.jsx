import "./App.css";
import logo from "./assets/discord-logo-white.png";
import optBox from "./assets/menu-icon.png";
import bigImg from "./assets/discord-background.png";

function App() {
  return (
    <div className="App">
      <img class="logo" src={logo} alt={logo} />
      <img class="option-box" src={optBox} alt={optBox} />
      <h1 class="imagine-a">IMAGINE A </h1>
      <h1 class="place">PLACE...</h1>
      <p>
        ...where you can belong to a school club, a gaming group, or a worldwide
        art community. Where only you and a handful of friends can spend some
        time together. A place that makes it easy to talk every day and hung out
        more often.
      </p>
      <div id="download-Btns">
        <button class="mac-download">Download for Mac</button>
        <button class="browser-download">Open Discord in your browser</button>
      </div>
      <img id="main-img" src={bigImg} alt={bigImg} />
    </div>
  );
}

export default App;
