import { Navbar } from "../../components/navbar/Navbar";
import { Carrusel } from "../../components/swiper/Swiper";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div>
      <Navbar />

      <Carrusel />

      <section class="bienvenida_seccion">
        <h1 class="bienvenida__heading">
          Bienvenida(o) a nuestros <span>Sitio Web</span>
        </h1>
      </section>

      <main></main>
    </div>
  );
};
