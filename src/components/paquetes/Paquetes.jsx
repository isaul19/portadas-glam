import "./Paquetes.css";

export const Paquetes = () => {
  return (
    <section className="paquetes-section">
      <div className="paquetes-header">
        <h2>Nuestros Paquetes</h2>
        <p>Elige el plan perfecto para tu evento</p>
      </div>

      <div className="paquetes-grid">
        {/* PAQUETE 1 */}
        <div className="paquete-card">
          <div className="paquete-inner">
            <div className="paquete-front">
              <div className="paquete-top-line"></div>
              <h3>Paquete 1</h3>
              <h3>Glam</h3>
            </div>

            <div className="paquete-back">
              <ul>
                <li>Horas solicitados por el cliente</li>
                <li>Toma las fotografías con los celulares de los invitados</li>
                <li>Accesorios incluidos</li>
                <li>Asistente</li>
              </ul>
              <a
                href="https://api.whatsapp.com/send/?phone=51994873783&text=Hola+Portada+Glam%2C+me+encantar%C3%ADa+recibir+mayor+informaci%C3%B3n+para+que+mi+evento+sea+de+portada+de+revista.+%C2%A1Gracias%21&type=phone_number&app_absent=0"
                target="_blank"
                className="paquete-btn"
              >
                Solicitar información
              </a>
            </div>
          </div>
        </div>

        {/* PAQUETE 2 */}
        <div className="paquete-card">
          <div className="paquete-inner">
            <div className="paquete-front">
              <div className="paquete-top-line"></div>
              <h3>Paquete 2</h3>
              <h3>Digital</h3>
            </div>

            <div className="paquete-back">
              <ul>
                <li>Horas solicitados por el cliente</li>
                <li>Toma de Fotos con Camara Profesional</li>
                <li>La toma de fotos se carga en un Drive</li>
                <li>Escaneas el QR y encuentras tu foto en segundos</li>
                <li>Accesorios incluidos</li>
                <li>Asistente</li>
              </ul>
              <a
                href="https://api.whatsapp.com/send/?phone=51994873783&text=Hola+Portada+Glam%2C+me+encantar%C3%ADa+recibir+mayor+informaci%C3%B3n+para+que+mi+evento+sea+de+portada+de+revista.+%C2%A1Gracias%21&type=phone_number&app_absent=0"
                target="_blank"
                className="paquete-btn"
              >
                Solicitar información
              </a>
            </div>
          </div>
        </div>

        {/* PAQUETE 3 */}
        <div className="paquete-card">
          <div className="paquete-inner">
            <div className="paquete-front">
              <div className="paquete-top-line"></div>
              <h3>Paquete 3</h3>
              <h3>Premiun</h3>
            </div>

            <div className="paquete-back">
              <ul>
                <li>Horas solicitados por el cliente</li>
                <li>Toma de Fotos con Camara Profesional</li>
                <li>Impresión de Fotografías en tamaño jumbo</li>
                <li>Ilimitada durante el tiempo del servicio</li>
                <li>Entrega digital de las fotografias tomadas con Cámara</li>
              </ul>
              <a
                href="https://api.whatsapp.com/send/?phone=51994873783&text=Hola+Portada+Glam%2C+me+encantar%C3%ADa+recibir+mayor+informaci%C3%B3n+para+que+mi+evento+sea+de+portada+de+revista.+%C2%A1Gracias%21&type=phone_number&app_absent=0"
                target="_blank"
                className="paquete-btn"
              >
                Solicitar información
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
