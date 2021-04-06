import { Link } from "react-router-dom";
import logo from "../assets/trakpak_logo.svg";
import "../styles/Header.css";

export default function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Logo" />
      <ul>
        <li>
          <Link to="/" exact>
            Home
          </Link>
        </li>
        <li>
          <Link to="/packages">Packages</Link>
        </li>
      </ul>
    </div>
  );
}
