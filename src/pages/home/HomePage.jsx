import { Navbar } from "../../components/navbar/Navbar";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div>
      <Navbar />

      <p>Bienvenido HomePage</p>

      <img width={100} height={300} src="/images/modelo2.jpg" alt="Modelo" />
    </div>
  );
};
