import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer-glam">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Portada Glam</h2>
          <div className="footer-line"></div>
          <p>
            Experiencias elegantes que transforman momentos en recuerdos
            inolvidables.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Servicios</h4>
            <a href="#">Cabinas</a>
            <a href="#">Eventos</a>
            <a href="#">Paquetes</a>
          </div>

          <div className="footer-column">
            <h4>Contacto</h4>
            <a
              href="https://api.whatsapp.com/send/?phone=51994873783&text=Hola+Portada+Glam%2C+me+encantar%C3%ADa+recibir+mayor+informaci%C3%B3n+para+que+mi+evento+sea+de+portada+de+revista.+%C2%A1Gracias%21&type=phone_number&app_absent=0"
              target="_blank"
            >
              Whatsapp
            </a>
            <a target="__blank" href="https://www.instagram.com/portada.glam/">
              Instagram
            </a>
            <a
              target="__blank"
              href="https://www.facebook.com/profile.php?id=61574976672485"
            >
              Facebook
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Portada Glam — Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
};
