import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import "./ContactPage.css";

export const ContactPage = () => {
  return (
    <div>
      <Navbar />

      <h2 className="testimoniales__heading">
        <span className="heading-highlight">Contacto</span>
      </h2>
      <Footer />
    </div>
  );
};
