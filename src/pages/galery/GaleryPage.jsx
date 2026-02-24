import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import "./GaleryPage.css";

export const GaleryPage = () => {
  return (
    <div>
      <Navbar />

      <section className="Galeria">
        <h2 className="testimoniales__heading">
          <span className="heading-highlight">Nuestra Galeria</span>
        </h2>
      </section>
      <Footer />
    </div>
  );
};
