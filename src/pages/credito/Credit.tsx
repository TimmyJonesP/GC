import { useEffect, useState } from "react";
import Enterprises from "../../components/reut/enterprises";
import Hero from "../../components/Hero/Hero";

interface Operation {
  body: string;
}

const Credit = () => {
  const [operations, setOperations] = useState<Operation[]>([]);
  const [benefits, setBenefits] = useState<Operation[]>([]);

  useEffect(() => {
    fetch("operations.json")
      .then((res) => res.json())
      .then((data) => {
        setOperations(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("beneficios.json")
      .then((res) => res.json())
      .then((data) => {
        setBenefits(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <Hero />
      <section className="flex flex-col items-center justify-center h-full w-full xl:px-96 my-28">
        <p className="uppercase font-light text-[19px] text-white leading-[0.7]">
          Nuestros
        </p>
        <h1 className="uppercase font-bold text-[31px] text-subtitle text-center">
          seguros de crédito
        </h1>
        <h3 className="text-golden text-[15px] font-semibold text-center px-7 mx-6 pt-7">
          Los Seguros de Crédito son instrumentos financieros cuya finalidad es
          proteger a las compañías frente al riesgo de impago de las cuentas por
          cobrar con sus clientes, ya sea en el mercado nacional como el
          internacional, y a causa de una insolvencia declarada (quiebra o
          concurso mercantil) o por una simple mora prolongada.
        </h3>
        <h4 className="text-golden font-light text-[12px] px-7 mx-5 pt-7 text-center">
          En GA trabajamos en conjunto con las aseguradoras para garantizarles a
          nuestros clientes una gestión óptima de sus cuentas por cobrar,
          protegiéndolos para que no deban preocuparse por sus deudores,
          evitándoles procesos legales extensos con altos costos y asegurándoles
          que su flujo de caja y capital de trabajo jamás se verán afectados por
          un impago. Además, nuestra red de alianzas estratégicas nos permite
          tener acceso global en la emisión de contratos locales en cada país
          donde nuestros clientes tengan presencia, por lo que podemos
          brindarles un servicio global adaptado a su internacionalización.
        </h4>
      </section>
      <section className="w-full h-full flex flex-col items-center justify-center">
        <h2 className="uppercase text-subtitle font-bold text-[20px] text-center">
          ¿Cómo operamos?
        </h2>
        <article className="aligns-center justify-evenly flex flex-row flex-wrap mb-16">
          {operations.map((element, index) => (
            <div
              key={index}
              className="flex flex-col items-center align-middle justify-evenly h-[170px] w-[251px] mt-7"
            >
              <img src="/divisorCred.svg" alt="divisor" className="" />
              <p className="text-center text-xs font-light text-white px-4 my-auto">
                {element.body}
              </p>
              <img
                src="/divisorCred.svg"
                alt="divisor"
                className="rotate-180"
              />
            </div>
          ))}
        </article>
      </section>
      <section>
        <Enterprises />
      </section>
      <section className="w-full h-full flex flex-col items-center justify-center bg-[#001420] pt-12 relative">
        <div className="rombo" />
        <h2 className="uppercase text-subtitle font-bold text-[20px] text-center">
          entre los beneficios se destacan que:
        </h2>
        <article className="aligns-center justify-evenly flex flex-col flex-no-wrap mb-7">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center align-center justify-center h-[66px] w-[215px] m-7"
            >
              <img src="golden.svg" alt="" className="mb-4" />
              <p className="text-center text-xs font-light text-white px-4 m-auto">
                {benefit.body}
              </p>
            </div>
          ))}
        </article>
      </section>
    </main>
  );
};

export default Credit;
