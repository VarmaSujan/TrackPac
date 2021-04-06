// Components/Page Imports
import background from "../assets/TrakPak_background.jpg";
import "../styles/Home.css";
import "../styles/Header.css";

export default function HomePage() {
  return (
    <div className="App">
      <div className="Fetching">
        <img className="banner" src={background} alt="banner" />
      </div>
    </div>
  );
}
