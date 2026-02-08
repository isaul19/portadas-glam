import { Link } from "react-router";
import { FaTiktok } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="redes">
        <img className="logo" src="/images/logo.jpeg" alt="logo" />

        <div className="icons_redes">
          <Link
            className="icons_whastapp"
            target="__blank"
            to="https://api.whatsapp.com/send/?phone=51994873783&text=Hola+Portada+Glam%2C+me+encantar%C3%ADa+recibir+mayor+informaci%C3%B3n+para+que+mi+evento+sea+de+portada+de+revista.+%C2%A1Gracias%21&type=phone_number&app_absent=0"
          >
            <FaWhatsapp />
          </Link>
          <Link
            className="icons_facebook"
            target="__blank"
            to="https://www.facebook.com/profile.php?id=61574976672485"
          >
            <FaFacebookF />
          </Link>
          <Link
            className="icons_instagram"
            target="__blank"
            to="https://www.instagram.com/portada.glam/"
          >
            <IoLogoInstagram />
          </Link>
          <Link
            className="icons_tiktok"
            target="__blank"
            to="https://www.tiktok.com/@cabinafotoslima"
          >
            <FaTiktok />
          </Link>
        </div>
      </div>
      <div className="navegacion">
        <div className="navegacion_borde">
          <div className="navegacion_contenedor">
            <ul className="nav_link">
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
          </div>
        </div>
      </div>
    </nav>
  );
};
