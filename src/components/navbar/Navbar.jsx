import { Link } from "react-router";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>

        <li>
          <Link to="/we">Nosotros</Link>
        </li>

        <li>
          <Link to="/galery">Galeria</Link>
        </li>

        <li>
          <Link to="/contact">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};
