import { useState, ChangeEvent, FormEvent } from "react";
export const Footer = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <footer className="h-[880px] w-full bg-ultrablue flex flex-col justify-center items-center text-center relative">
      <div className="rombo" />
      <h2 className="text-subtitle text-[31px] font-bold uppercase">
        Contactanos
      </h2>
      <h3 className=" text-golden text-[15px] font-bold px-16 py-9">
        Dejá tu consulta, te responderemos a la brevedad
      </h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full gap-7 mx-2 my-7"
      >
        <input
          type="text"
          name="nombre"
          placeholder="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="w-[90%] text-subtitle bg-[#012237] border-sky-950 border py-2 px-2"
        />
        <input
          type="tel"
          name="telefono"
          placeholder="número telefónico"
          value={formData.telefono}
          onChange={handleChange}
          className="w-[90%] text-subtitle bg-[#012237] border-sky-950 border py-2 pl-2"
        />
        <input
          type="email"
          name="email"
          placeholder="e-mail"
          value={formData.email}
          onChange={handleChange}
          className="w-[90%] text-subtitle bg-[#012237] border-sky-950 border py-2 pl-2"
        />
        <textarea
          name="mensaje"
          placeholder="hola humano,

además, contamos con alianzas estratégicas que nos permiten tener acceso global en la emisión de contratos locales en cada país donde nuestros clientes tengan presencia; pudiendo así brindar un servicio global adaptado a la internacionalización de nuestros clientes.

gracias!"
          value={formData.mensaje}
          onChange={handleChange}
          className="w-[90%] h-[191px]  text-subtitle bg-[#012237] border-sky-950 border m-auto text-left px-2"
        />
        <button
          type="submit"
          className=" text-black px-5 text-[14px] font-semibold  py-2 bg-subtitle uppercase"
        >
          Enviar
        </button>
      </form>
      <section className="flex flex-row justify-center items-center  gap-2 mt-3">
        <img src="/mail.svg" alt="e-mail" />
        <p className="text-white font-bold text-[15px]">
          info@gariskcapital.com
        </p>
      </section>
      <div className="flex flex-row justify-center items-center gap-2 mt-3">
        <img src="/brand-whatsapp.svg" alt="whatsapp" />
        <p className="text-white font-bold text-[15px]">+52 55 3455 0049</p>
      </div>
      <article className="flex flex-row justify-center items-center mt-[70px]">
        <a href="/">
          <img src="/footer-brand.svg" alt="brand logo" />
        </a>
      </article>
    </footer>
  );
};
