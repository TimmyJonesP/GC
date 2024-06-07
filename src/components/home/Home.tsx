import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Elemento {
  icono: string;
  titulo: string;
  descripcion: string;
  link: string;
}

const Home = () => {
  const [elementos, setElementos] = useState<Elemento[]>([]);

  useEffect(() => {
    fetch("link.json")
      .then((response) => response.json())
      .then((data) => setElementos(data))
      .catch((error) => console.error("error al cargar los elementos", error));
  }, []);

  return (
    <div className="lg:pt-[205px]">
      <header className="home h-[736px] w-full bg-[#012237]">
        <img
          src="/home.png"
          alt="Home image"
          className="home h-full w-full max-h-max"
        />
        <h1 className="text-golden lg:uppercase lg:px-96 px-5 text-[15px] font-bold absolute text-center bg-transparent top-[960px] w-full lg:text-[26px] lg:top-[700px]">
          Somos su socio estratégico en la gestión de seguros especializados y
          soluciones financieras
        </h1>
      </header>
      <section className="h-[632px] w-full">
        <article className=" flex flex-col items-center justify-center h-full w-full">
          <p className="  uppercase font-light text-[19px] text-white leading-[0.7]">
            Descubrí
          </p>
          <h2 className="uppercase font-bold text-[31px] text-subtitle">
            Quienés somos
          </h2>
          <h3 className="  text-golden text-[15px] font-normal text-center px-7 mx-6 pt-7 lg:px-96">
            Somos un despacho boutique de consultoría y correduría de seguros y
            productos financieros que opera con una red nacional e internacional
            de socios estratégicos.
          </h3>
          <h4 className="text-white font-light text-[12px] px-7 mx-5 pt-7 text-center lg:px-96">
            Nuestra misión es ofrecer a nuestros clientes una amplia gama de
            productos y esquemas disponibles en el mercado financiero y de
            seguros especializados, brindándoles el asesoramiento necesario para
            que puedan seleccionar los productos que mejor se adapten a sus
            necesidades.
          </h4>
        </article>
      </section>
      <section className="about-us flex flex-col items-center justify-center pb-[70px]">
        <article className="gradiente flex flex-col items-center justify-center h-full w-full">
          <p className="  uppercase font-light text-[19px] text-white leading-[0.7]">
            conocé
          </p>
          <h2 className="uppercase font-bold text-[31px] text-subtitle text-center leading-none pt-3">
            Nuestras Soluciones
          </h2>
          <h3 className="  text-golden text-[15px] font-normal text-center mx-6 pt-7">
            En GA contamos con partners expertos y especializados en diferentes
            nichos, lo que nos permite generar sinergias exclusivas y a la
            medida de nuestros clientes.
          </h3>
        </article>
        {elementos.map((element, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center justify-center h-full w-full"
          >
            <img src="divisor.svg" alt="Separador" className="py-6" />
            <img src={element.icono} alt="" />
            <h3 className=" font-bold text-[15px] text-golden py-5">
              {element.titulo}
            </h3>
            <div className="w-[23px] h-[3px] bg-white mb-5"></div>
            <h4 className=" text-white text-[12px] font-light px-28 pb-5">
              {element.descripcion}
            </h4>
            <Link
              to={element.link}
              className="bg-transparent text-[14px] gradiente-gold border-golden text-golden border py-1 px-8 font-semibold mt-5 "
            >
              Ver más
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
