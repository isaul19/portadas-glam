import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Swiper.css";

export const Carrusel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
    >
      <SwiperSlide>
        <h2 className="contenedor_carrusel">
          <img
            className="carrusel_img"
            src="/images/carrusel1.png"
            alt="primer carrusel"
          />
        </h2>
      </SwiperSlide>

      <SwiperSlide>
        <h2 className="contenedor_carrusel">
          <img
            className="carrusel_img"
            src="/images/carrusel2.png"
            alt="segundo carrusel"
          />
        </h2>
      </SwiperSlide>

      <SwiperSlide>
        <h2 className="contenedor_carrusel">
          <img
            className="carrusel_img"
            src="/images/carrusel3.png"
            alt="tercer carrusel"
          />
        </h2>
      </SwiperSlide>
    </Swiper>
  );
};
