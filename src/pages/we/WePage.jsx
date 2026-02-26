import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import "./WePage.css";

export const WePage = () => {
  return (
    <div>
      <Navbar />
      <section className="glam-intro">
        <div className="glam-intro-grid">
          <div className="glam-intro-text">
            <span className="glam-intro-tag">PORTADA GLAM</span>

            <h2>
              No hacemos fotos.
              <br />
              Creamos <span>celebridades.</span>
            </h2>

            <p>
              Somos una experiencia fotográfica de lujo inspirada en las grandes
              portadas editoriales. Transformamos bodas, quinceaños y eventos
              corporativos en una auténtica pasarela de glamour.
            </p>

            <div className="glam-gold-line"></div>
          </div>

          <div className="glam-intro-img">
            <img src="/images/nosotros.png" alt="Evento Portada Glam" />
          </div>
        </div>
      </section>

      <section className="portada-section">
        <div className="portada-container">
          <span className="portada-tag">EXPERIENCIA EDITORIAL</span>

          <h2 className="portada-title">
            ¿Por que con
            <br />
            <span>Portadas Glam?</span>
          </h2>

          <p className="portada-description">
            Portada Glam es una experiencia fotográfica de lujo inspirada en
            portadas de revista. Más que una cabina de fotos, es un espacio
            elegante, interactivo y visualmente impactante que transforma bodas,
            quinceaños, celebraciones y eventos corporativos en una auténtica
            pasarela de glamour.
          </p>

          <div className="portada-line"></div>
        </div>
      </section>

      <section className="glam-story">
        <div className="glam-wrapper">
          <div className="glam-row">
            <div className="glam-text">
              <span className="glam-label">EXPERIENCIA</span>
              <h2>
                Más que fotos,
                <br />
                <span>es una producción.</span>
              </h2>
              <p>
                Convertimos cada evento en una experiencia editorial de alto
                nivel. Luces, encuadres y dirección que hacen sentir a cada
                invitado como protagonista de su propia portada.
              </p>
            </div>

            <div className="glam-image">
              <img src="/images/boda2.png" alt="Portadas Glam 1" />
            </div>
          </div>

          <div className="glam-row reverse">
            <div className="glam-image">
              <img src="/images/nosotros1.JPG" alt="Portadas Glam 2" />
            </div>

            <div className="glam-text">
              <span className="glam-label">IMPACTO</span>
              <h2>
                Diseñado para
                <br />
                <span>impresionar.</span>
              </h2>
              <p>
                Cada detalle está pensado para crear un momento inolvidable.
                Desde la iluminación hasta la impresión final, todo respira
                lujo.
              </p>
            </div>
          </div>

          <div className="glam-row">
            <div className="glam-text">
              <span className="glam-label">GLAMOUR</span>
              <h2>
                Momentos que se
                <br />
                <span>vuelven icónicos.</span>
              </h2>
              <p>
                Creamos experiencias que tus invitados no solo recuerdan, sino
                que comparten y presumen. Portadas que brillan.
              </p>
            </div>

            <div className="glam-image">
              <img src="/images/nosotros3.JPG" alt="Portadas Glam 3" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
