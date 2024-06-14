import { useTranslation } from "react-i18next";
import Hero from "../../components/Hero/Hero";
interface Services {
  body: string;
}
const Servicios = () => {
  const { t } = useTranslation();
  const services: Services[] = t("services.elements", { returnObjects: true });

  return (
    <main>
      <Hero />
      <section className="flex flex-col items-center justify-center h-full w-full max-w-screen-lg m-auto my-16">
        <h1 className="uppercase font-bold text-[31px] text-subtitle text-center">
          {t("services.title")}
        </h1>
        <h4 className="text-golden font-semibold text-[14px] md:px-60 mx-5 pt-7 text-center">
          {t("services.sub")}
        </h4>
        <article className="aligns-center justify-evenly flex flex-col flex-no-wrap md:grid md:grid-cols-2 md:gap-8 lg:grid lg:grid-cols-3 gap-8 max-w-screen-lg m-auto mt-14 mb-[100px]">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col text-start items-center align-center justify-center m-7 w-[220px]"
            >
              <img src="golden.svg" alt="" className="mb-4" />
              <div className=" h-[48px]">
                <p className="text-golden font-semibold text-center text-[16px]">
                  {service.body}
                </p>
              </div>
            </div>
          ))}
        </article>
      </section>
      <section className="w-full bg-white">
        <article className=" items-center justify-center flex flex-col relative max-w-screen-lg m-auto">
          <div className="rombo bg-ultrablue" />
          <p className="text-[14px] text-[#012237] font-regular my-[80px] mx-[20px] text-center">
            {t("services.sub1.p1")}
            <span className="font-bold">{t("services.sub1.pn")}</span>
            {t("services.sub1.pe")}
            <a href="https://www.gplatino.com/" target="__blank">
              <b>Grupo Platino </b>
            </a>
            {t("services.sub1.p2")}
          </p>
          <a
            href="
          https://www.gplatino.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src="./grupo-platino.svg"
              alt="Grupo Platino"
              className="mb-[80px]"
            />
          </a>
        </article>
      </section>
    </main>
  );
};

export default Servicios;
