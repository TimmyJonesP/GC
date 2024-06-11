import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface Elemento {
  icon: string;
  title: string;
  description: string;
  link: string;
}

const Home = () => {
  const { t } = useTranslation();
  const elementos: Elemento[] = t("solutions", { returnObjects: true });

  return (
    <main>
      <header className="home h-[736px] w-full bg-[#012237]">
        <img
          src="/home.webp"
          alt="Home image"
          className="home h-full w-full max-h-max"
        />
        <h1 className="text-golden uppercase px-14 text-[17px] font-bold absolute text-center bg-transparent top-[880px] w-full lg:text-[26px] lg:top-[700px] xl:px-96">
          {t("home.hero")}
        </h1>
      </header>
      <section className="h-[632px] w-full">
        <article className=" flex flex-col items-center justify-center h-full w-full xl:px-96">
          <h2 className="uppercase font-bold text-[31px] text-subtitle">
            {t("home.about")}
          </h2>
          <h3 className="  text-golden text-[15px] font-normal text-center px-7 mx-6 pt-7">
            {t("home.about_body")}
          </h3>
          <h4 className="text-white font-light text-[12px] px-7 mx-5 pt-7 text-center">
            {t("home.mission_body")}
          </h4>
        </article>
      </section>
      <section className="about-us flex flex-col items-center justify-center pb-[70px]">
        <article className="gradiente flex flex-col items-center justify-center h-full w-full">
          <p className="  uppercase font-light text-[19px] text-white leading-[0.7]">
            {t("home.know")}
          </p>
          <h2 className="uppercase font-bold text-[31px] text-subtitle text-center leading-none pt-3">
            {t("home.solutions")}
          </h2>
          <h3 className="  text-golden text-[15px] font-normal text-center mx-6 pt-7">
            {t("home.solutions_body")}
          </h3>
        </article>
        {elementos.map((element, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center justify-center h-full w-full"
          >
            <img src="divisor.svg" alt="Separador" className="py-6" />
            <img src={element.icon} alt="" />
            <h3 className=" font-bold text-[15px] text-golden py-5">
              {element.title}
            </h3>
            <div className="w-[23px] h-[3px] bg-white mb-5"></div>
            <h4 className=" text-white text-[12px] font-light px-28 pb-5">
              {element.description}
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
    </main>
  );
};

export default Home;
