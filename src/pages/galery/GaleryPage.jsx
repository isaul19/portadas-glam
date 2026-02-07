import { Navbar } from "../../components/navbar/Navbar";
import "./GaleryPage.css";

export const GaleryPage = () => {
  return (
    <div>
      <Navbar />

      <p>Bienvenido GaleryPage</p>

      <img width={100} height={300} src="/images/modelo2.jpg" alt="Modelo" />
    </div>
  );
};
