import { Link } from "react-router-dom";
import "./NavbarCss.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo"></div>
        <ul className="classItens">
          <li className="item">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="item">
            <Link to={"/Projects"}>Projects</Link>
          </li>
          <li className="item">
            <Link to={"/About"}>About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
