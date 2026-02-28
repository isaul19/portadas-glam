import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import "./GaleryPage.css";

export const GaleryPage = () => {
  return (
    <div>
      <Navbar />

      <section className="glam-gallery-section">
        <div className="glam-gallery-title">
          <span>GALERÍA</span>
          <h2>Nuestros Eventos</h2>
        </div>

        {/* ===== BODAS ===== */}
        <div className="glam-category">
          <h3 className="glam-category-title">BODAS</h3>

          <div className="glam-grid">
            <img src="/images/nosotros3.JPG" alt="experiencia en boda" />
            <img src="/images/boda2.png" alt="experiencia en boda" />
            <img src="/images/boda3.png" alt="experiencia en boda" />
            <img src="/images/boda4.png" alt="experiencia en boda" />
            <img src="/images/boda5.jpg" alt="experiencia en boda" />
            <img src="/images/boda6.jpg" alt="experiencia en boda" />
            <img src="/images/boda7.JPG" alt="experiencia en boda" />
            <img src="/images/boda8.JPG" alt="experiencia en boda" />
            <img src="/images/boda9.jpg" alt="experiencia en boda" />
          </div>
        </div>

        {/* ===== QUINCEAÑOS ===== */}
        <div className="glam-category">
          <h3 className="glam-category-title">QUINCEAÑOS</h3>

          <div className="glam-grid">
            <img src="/images/nosotros2.jpg" alt="experiencia en quince" />
            <img src="/images/quince2.png" alt="experiencia en quince" />
            <img src="/images/quince3.png" alt="experiencia en quince" />
            <img src="/images/quince4.JPG" alt="experiencia en quince" />
            <img src="/images/quince5.png" alt="experiencia en quince" />
            <img src="/images/quince6.png" alt="experiencia en quince" />
          </div>
        </div>

        {/* ===== CORPORATIVOS ===== */}
        <div className="glam-category">
          <h3 className="glam-category-title">EVENTOS CORPORATIVOS</h3>

          <div className="glam-grid">
            <img src="/images/nosotros1.JPG" alt="experiencia en coorp" />
            <img src="/images/corp2.JPG" alt="experiencia en coorp" />
            <img src="/images/corp3.png" alt="experiencia en coorp" />
            <img src="/images/corp4.png" alt="experiencia en coorp" />
            <img src="/images/corp5.jpg" alt="experiencia en coorp" />
            <img src="/images/corp6.JPG" alt="experiencia en coorp" />
            <img src="/images/corp7.JPG" alt="experiencia en coorp" />
            <img src="/images/corp8.png" alt="experiencia en coorp" />
            <img src="/images/corp9.jpg" alt="experiencia en coorp" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
