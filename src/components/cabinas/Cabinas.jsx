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
          <button className="cabina-btn">Solicitar información</button>
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
          <button className="cabina-btn">Solicitar información</button>
        </div>
      </div>
    </section>
  );
};
