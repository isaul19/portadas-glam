import "./Cabinas.css";

export const Cabinas = () => {
  return (
    <section className="cabinas-section">
      <div className="cabinas-header">
        <h2>Nuestras Cabinas</h2>
        <p>Diseñadas para crear experiencias únicas e inolvidables</p>
      </div>

      <div className="cabinas-grid">
        <div className="cabina-card">
          <div className="cabina-top-line"></div>
          <h3>Cabina S</h3>
          <ul>
            <li>
              <strong>Ancho:</strong> 1.50cm
            </li>
            <li>
              <strong>Altura:</strong> 2.10cm
            </li>
            <li>
              <strong>Profundidad:</strong> 1.20cm
            </li>
            <li>Luces LED interna</li>
            <li>Luz fría superior</li>
            <li>Flores a disposición</li>
          </ul>
          <a
            href="https://api.whatsapp.com/send/?phone=51994873783&text=Hola+Portada+Glam%2C+me+encantar%C3%ADa+recibir+mayor+informaci%C3%B3n+para+que+mi+evento+sea+de+portada+de+revista.+%C2%A1Gracias%21&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="cabina-btn"
          >
            Solicitar información
          </a>
        </div>

        <div className="cabina-card">
          <div className="cabina-top-line"></div>
          <h3>Cabina XL</h3>
          <ul>
            <li>
              <strong>Ancho:</strong> 1.80cm
            </li>
            <li>
              <strong>Altura:</strong> 2.40cm
            </li>
            <li>
              <strong>Profundidad:</strong> 1.50cm
            </li>
            <li>Luces LED interna</li>
            <li>Luz fría superior</li>
            <li>Flores a disposición</li>
          </ul>
          <a
            href="https://api.whatsapp.com/send/?phone=51994873783&text=Hola+Portada+Glam%2C+me+encantar%C3%ADa+recibir+mayor+informaci%C3%B3n+para+que+mi+evento+sea+de+portada+de+revista.+%C2%A1Gracias%21&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="cabina-btn"
          >
            Solicitar información
          </a>
        </div>
      </div>
    </section>
  );
};
