import { useEffect } from "react";
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
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer");
      const scrollButton = document.getElementById("scroll");

      if (!footer || !scrollButton) return;

      const footerPosition = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (footerPosition < windowHeight) {
        scrollButton.classList.add("hidden");
      } else {
        scrollButton.classList.remove("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className="overflow-hidden">
      <img
        src="/scroll.png"
        alt=""
        className="fixed z-20 right-[10%] md:left-[48.7%] bottom-[20px]"
        id="scroll"
      />
      <header className="home h-full w-full bg-[#012237] relative flex items-center justify-center">
        <img
          src="/desktop-h.png"
          alt="Home image"
          className="home h-full w-full max-h-max hidden md:block"
        />
        <img
          src="/mobile-h.png"
          alt="Home image"
          className="home-mobil object-cover h-full w-full max-w-max md:hidden"
        />
        <h1 className="text-golden uppercase absolute px-14 text-[19px] z-10 font-bold text-center  bottom-[-75px] md:bottom-[25px] xl:bottom-[50px] lg:text-[31px] mx-auto max-w-screen-lg">
          {t("home.hero")}
        </h1>
        <div className="gradiente w-full absolute bottom-0 md:bottom-0 h-[100px] rotate-180" />
      </header>
      <section className="h-[632px] w-full relative">
        <img
          src="logo-home.svg"
          className="hidden lg:block absolute top-[-100px] w-[444px] h-[800px] left-[-175px] "
          alt=""
        />
        <img
          src="logo-home.svg"
          className="hidden lg:block absolute top-[-100px] w-[444px] h-[800px] right-[-175px] transform scale-x-[-1] "
          alt=""
        />
        <article
          className=" flex flex-col items-center justify-center h-full w-full max-w-screen-lg m-auto"
          id="aboutus"
        >
          <h2 className="uppercase font-bold text-[31px] text-subtitle">
            {t("home.about")}
          </h2>
          <h3 className="  text-golden text-[17px] font-normal text-center px-7 mx-6 pt-7">
            {t("home.about_body")}
          </h3>
          <h4 className="text-white font-light text-[15px] px-7 mx-5 pt-7 text-center lg:px-56">
            {t("home.mission_body")}
          </h4>
        </article>
      </section>
      <section
        className="flex flex-col items-center justify-center pb-[80px] w-full bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('img-back-soluciones.png')" }}
      >
        <div className="gradiente w-full absolute top-0 h-[100px]"></div>
        <article className="flex flex-col items-center justify-center h-full w-full max-w-screen-lg m-auto z-10">
          <h2 className="uppercase font-bold text-[33px] text-subtitle text-center leading-none pt-3">
            {t("home.solutions")}
          </h2>
          <h3 className="  text-golden text-[17px] font-normal text-center mx-6 pt-7">
            {t("home.solutions_body")}
          </h3>
        </article>
        <div className="w-full flex flex-col lg:flex-row lg:flex-wrap items-center align-middle justify-center mt-10 lg:mt-28 max-w-screen-xl lg:mx-auto">
          {elementos.map((element, index) => (
            <div
              key={index}
              className="flex flex-col items-center align-middle text-center justify-center h-full w-[250px] lg:flex-1 lg:mx-4 mb-8 lg:mb-0 lg:h-[400px] "
            >
              <img
                src="divisor.svg"
                alt="Separador"
                className="py-6 lg:hidden my-8"
              />
              <img
                src={element.icon}
                alt=""
                className="mb-4 w-[62px] h-[62px]"
              />
              <h3 className=" font-bold text-[17px] justify-start text-golden m-auto">
                {element.title}
              </h3>
              <div className="w-[23px] h-[3px] bg-white my-3" />
              <h4 className=" text-white text-[15px] font-light mb-10 m-auto justify-start lg:w-[325px] lg:h-[100px] h-[150px]">
                {element.description}
              </h4>
              <Link
                to={element.link}
                className="bg-transparent text-[18px] gradiente-gold border-golden text-golden border py-1 px-8 font-semibold mt-5 lg:m-auto "
              >
                {t("btn")}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
