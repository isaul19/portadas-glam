import { Navbar } from "../../components/navbar/Navbar";
import { HiOutlineCamera } from "react-icons/hi2";
import { Cabinas } from "../../components/cabinas/Cabinas";
import { Paquetes } from "../../components/paquetes/Paquetes";
import { Footer } from "../../components/footer/Footer";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div>
      <Navbar />

      <section className="section_hero">
        <div className="contenedor_hero">
          <div className="hero_info">
            <div className="hero_h2">
              <h2>Buscas que tus eventos sean inolvidables?</h2>
            </div>

            <div className="hero_p">
              <p>Vive una experiencia inolvidable con Portada Glam</p>
            </div>

            <div className="contenedor_boton">
              <a
                href="https://api.whatsapp.com/send/?phone=51994873783&text=Hola+Portada+Glam%2C+me+encantar%C3%ADa+recibir+mayor+informaci%C3%B3n+para+que+mi+evento+sea+de+portada+de+revista.+%C2%A1Gracias%21&type=phone_number&app_absent=0"
                className="hero_boton"
                target="_blank"
                rel="noopener noreferrer"
              >
                Más info
              </a>
            </div>
          </div>

          <HiOutlineCamera className="icons_camara" />
          <div className="hero_img">
            <img src="/images/entrada.png" alt="entrada del nav" />
          </div>
        </div>
      </section>

      <section className="nosotros">
        <h2 className="testimoniales__heading">
          <span className="heading-highlight">¿Porqué con Nosotros?</span>
        </h2>
        <div className="nosotros_contenedor">
          <div className="nosotros_card">
            <div className="nosotros_info">
              <img
                className="nosotros_img"
                src="/images/camara.png"
                alt="icon camara"
              />
              <h3 className="nosotros_h3">Buenas Fotografias</h3>
              <p className="nosotros_p">
                Le bridamos buenas fotografias como de una revista.
              </p>
            </div>

            <div className="nosotros_info">
              <img
                className="nosotros_img"
                src="/images/foco.png"
                alt="icon foco"
              />
              <h3 className="nosotros_h3">Buena Iluminación</h3>
              <p className="nosotros_p">
                Le bridamos buena Iluminación para las fotografias
              </p>
            </div>

            <div className="nosotros_info">
              <img
                className="nosotros_img"
                src="/images/impresion.png"
                alt="icon impresora"
              />
              <h3 className="nosotros_h3">Buenas Impresiones</h3>
              <p className="nosotros_p">
                Le bridamos buenas resoluciones en las fotografias
              </p>
            </div>
          </div>
        </div>
      </section>

      <Cabinas />

      <Paquetes />

      <section class="contenedor testimoniales">
        <h2 class="testimoniales__heading">
          <span class="heading-highlight">Testimoniales</span>
        </h2>

        <div class="testimoniales__grid">
          <div class="testimonial">
            <header class="testimonial__header">
              <div class="testimonial__imagen">
                <img src="/images/testimonial1.jpg" alt="testimonial" />
              </div>

              <div class="testimonial__informacion">
                <p class="testimonial__autor">Juan Perez</p>
                <img
                  class="testimonial__calificacion"
                  src="/images/estrellas.png"
                  alt="imagen estrellas"
                />
              </div>
            </header>

            <blockquote class="testimonial__texto">
              “La verdad quedamos encantados. Desde el primer momento todo fue
              muy profesional y las fotos quedaron hermosas, tal como
              queríamos.”
            </blockquote>
          </div>

          <div class="testimonial">
            <header class="testimonial__header">
              <div class="testimonial__imagen">
                <img src="/images/testimonial5.jpg" alt="testimonial" />
              </div>

              <div class="testimonial__informacion">
                <p class="testimonial__autor">Itzel Cruz</p>
                <img
                  class="testimonial__calificacion"
                  src="/images/estrellas.png"
                  alt="imagen estrellas"
                />
              </div>
            </header>

            <blockquote class="testimonial__texto">
              “Nos gustó mucho el trato y el resultado final. Supieron captar
              los momentos más importantes sin que nos diéramos cuenta.”
            </blockquote>
          </div>

          <div class="testimonial">
            <header class="testimonial__header">
              <div class="testimonial__imagen">
                <img src="/images/testimonial4.jpg" alt="testimonial" />
              </div>

              <div class="testimonial__informacion">
                <p class="testimonial__autor">Rocio Rodriguez</p>
                <img
                  class="testimonial__calificacion"
                  src="/images/estrellas.png"
                  alt="imagen estrellas"
                />
              </div>
            </header>
            <blockquote class="testimonial__texto">
              “Fue una experiencia muy bonita. Las fotos transmiten exactamente
              lo que vivimos ese día, y eso nos encantó.”
            </blockquote>
          </div>

          <div class="testimonial">
            <header class="testimonial__header">
              <div class="testimonial__imagen">
                <img src="/images/testimonial2.jpg" alt="testimonial" />
              </div>

              <div class="testimonial__informacion">
                <p class="testimonial__autor">Cynthia V</p>
                <img
                  class="testimonial__calificacion"
                  src="/images/estrellas.png"
                  alt="imagen estrellas"
                />
              </div>
            </header>

            <blockquote class="testimonial__texto">
              “Todo quedó mejor de lo que esperábamos. Se nota el cuidado en
              cada detalle y el estilo que manejan.”
            </blockquote>
          </div>

          <div class="testimonial">
            <header class="testimonial__header">
              <div class="testimonial__imagen">
                <img src="/images/testimonial3.jpg" alt="testimonial" />
              </div>

              <div class="testimonial__informacion">
                <p class="testimonial__autor">Jose Hernandez</p>
                <img
                  class="testimonial__calificacion"
                  src="/images/estrellas.png"
                  alt="imagen estrellas"
                />
              </div>
            </header>

            <blockquote class="testimonial__texto">
              “Recomiendo Portada Glam sin dudarlo. El trabajo es de calidad y
              el resultado final realmente vale la pena.”
            </blockquote>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
