import { useEffect, useState } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import "./ContactPage.css";
import { envs } from "../../config/env";

export const ContactPage = () => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    evento: "",
    fecha: "",
    distrito: "",
    mensaje: "",
  });

  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validar = () => {
    let nuevosErrores = {};

    if (!form.nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio";
    }

    if (!form.email.trim()) {
      nuevosErrores.email = "El correo es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      nuevosErrores.email = "Correo inválido";
    }

    if (!form.telefono.trim()) {
      nuevosErrores.telefono = "El teléfono es obligatorio";
    }

    if (!form.evento.trim()) {
      nuevosErrores.evento = "El tipo de evento es obligatorio";
    }

    if (!form.fecha.trim()) {
      nuevosErrores.fecha = "La fecha del evento es obligatoria";
    }

    if (!form.distrito.trim()) {
      nuevosErrores.distrito = "El distrito es obligatorio";
    }

    if (!form.mensaje.trim()) {
      nuevosErrores.mensaje = "Cuéntanos sobre tu evento";
    }

    setErrores(nuevosErrores);

    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validar()) {
      emailjs
        .send(
          envs.EMAIL_ID_SERVICE,
          envs.EMAIL_ID_TEMPLATE,
          {
            title: "Consultas Portadas Glam",
            nombre: form.nombre,
            email: form.email,
            telefono: form.telefono,
            evento: form.evento,
            fecha: form.fecha,
            distrito: form.distrito,
            mensaje: form.mensaje,
          },
          envs.EMAIL_TOKEN,
        )
        .then(() => {
          toast.success("Mensaje enviado correctamente ✉️");

          setForm({
            nombre: "",
            email: "",
            telefono: "",
            evento: "",
            fecha: "",
            distrito: "",
            mensaje: "",
          });
        })
        .catch((error) => {
          console.error(error);
          toast.error("Error al enviar el mensaje");
        });
    }
  };

  return (
    <div>
      <Navbar />

      <section className="elite-contact">
        <div className="elite-contact-container">
          <div className="elite-contact-info">
            <span className="elite-mini">CONTACTO</span>

            <h2>
              Hagamos que tu evento
              <br />
              <span>brille como portada.</span>
            </h2>

            <p>
              Cuéntanos tu idea y nuestro equipo se encargará de convertirla en
              una experiencia inolvidable.
            </p>

            <div className="elite-details">
              <div>
                <h4>Email</h4>
                <p>portadaglam@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="elite-contact-form">
            <form onSubmit={handleSubmit}>
              <div className="elite-input">
                <input
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                />
                <label>Nombre completo</label>
                {errores.nombre && (
                  <span className="error">{errores.nombre}</span>
                )}
              </div>

              <div className="elite-input">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
                <label>Correo electrónico</label>
                {errores.email && (
                  <span className="error">{errores.email}</span>
                )}
              </div>

              <div className="elite-input">
                <input
                  type="tel"
                  name="telefono"
                  value={form.telefono}
                  onChange={handleChange}
                />
                <label>Número telefónico</label>
                {errores.telefono && (
                  <span className="error">{errores.telefono}</span>
                )}
              </div>

              <div className="elite-input">
                <input
                  type="text"
                  name="evento"
                  value={form.evento}
                  onChange={handleChange}
                />
                <label>Tipo de evento</label>
                {errores.evento && (
                  <span className="error">{errores.evento}</span>
                )}
              </div>

              <div className="elite-input">
                <input
                  type="date"
                  name="fecha"
                  value={form.fecha}
                  onChange={handleChange}
                />
                <label>Fecha del evento</label>
                {errores.fecha && (
                  <span className="error">{errores.fecha}</span>
                )}
              </div>

              <div className="elite-input">
                <input
                  type="text"
                  name="distrito"
                  value={form.distrito}
                  onChange={handleChange}
                />
                <label>Distrito</label>
                {errores.distrito && (
                  <span className="error">{errores.distrito}</span>
                )}
              </div>

              <div className="elite-input">
                <textarea
                  rows="4"
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                ></textarea>
                <label>Cuéntanos sobre tu evento</label>
                {errores.mensaje && (
                  <span className="error">{errores.mensaje}</span>
                )}
              </div>

              <button type="submit">Enviar Solicitud</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
    </div>
  );
};
