import { useTranslation } from "react-i18next";
import Hero from "../../components/Hero/Hero";
import { useEffect } from "react";
interface TranslationElement {
  title: string;
  subtitle?: string;
  body: string;
}

const Financiamiento = () => {
  const { t } = useTranslation();
  const elements: TranslationElement[] = t("financing.elements", {
    returnObjects: true,
  });

  const opt: TranslationElement[] = t("financing.opt", {
    returnObjects: true,
  });
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
    <main className="">
      <img
        src="/scroll.png"
        alt=""
        className="fixed z-20 right-[10%] md:left-[48.7%] bottom-[20px]"
        id="scroll"
      />
      <Hero text={t("financing.title")} />
      <section className="flex flex-col items-center justify-center h-full w-full max-w-screen-lg m-auto mb-16">
        <h3 className="text-golden text-[17px] font-regular text-center px-7 mx-6 pt-7">
          {t("credit.sub")}
          <span className="font-bold ">{t("credit.subN")} </span>
          {t("credit.subb")}
        </h3>
        <h4 className="text-golden font-light text-[15px] px-7 mx-5 pt-7 text-center">
          {t("financing.sub2")}
        </h4>
      </section>
      <section className="w-full h-full flex flex-col items-center justify-center pt-12 relative">
        <h2 className="uppercase text-subtitle font-bold text-[23px] text-center">
          {t("financing.ope")}
        </h2>
        <article className="aligns-center justify-evenly flex flex-col flex-no-wrap mb-7 md:grid md:grid-cols-2 md:gap-8 lg:grid lg:grid-cols-4 gap-8 max-w-screen-lg m-auto mt-14">
          {elements.map((element, index) => (
            <div
              key={index}
              className="flex flex-col text-start items-center align-center justify-center m-3 w-[300px] lg:w-[225px]"
            >
              <img src="golden.svg" alt="" className="mb-4" />
              <div className=" h-[48px]">
                <p className="text-golden font-semibold text-center text-[17px]">
                  {element.title}
                </p>
                {element.subtitle ? (
                  <p className="text-center text-[17px] font-light text-golden px-4 leading-[0.8] m-auto">
                    {element.subtitle}
                  </p>
                ) : null}
              </div>
              <p className="text-center text-[15px] font-light text-white px-4 py-3 m-auto justify-start flex-grow">
                {element.body}
              </p>
            </div>
          ))}
        </article>
      </section>
      <section className="w-full h-full bg-[#001420]">
        <article className="w-full h-full flex flex-col items-center justify-center py-[76px] relative max-w-screen-lg m-auto">
          <div className="rombo" />
          <h2 className="uppercase text-subtitle font-bold text-[23px] text-center">
            {t("financing.title2")}
          </h2>
          <p className="text-golden text-[15px] font-regular text-center px-4 mx-6 pt-7">
            {t("financing.sub3")}
            <span className=" font-semibold">{t("financing.span")}</span>
            {t("financing.sub4")}
          </p>
          <article className="aligns-center justify-evenly flex flex-col flex-no-wrap mb-7 md:grid md:grid-cols-2 md:gap-8 lg:grid lg:grid-cols-4 gap-8 max-w-screen-lg m-auto mt-14">
            {opt.map((element, index) => (
              <div
                key={index}
                className="flex flex-col items-center align-center justify-center m-3 w-[300px] lg:w-[225px]"
              >
                <img src="golden.svg" alt="" className="mb-4" />
                <div className="h-[48px]">
                  <p className="text-golden font-semibold text-center text-[17px]">
                    {element.title}
                  </p>
                  {element.subtitle ? (
                    <p className="text-center text-[15px] font-light text-golden px-4 leading-[0.8] m-auto">
                      {element.subtitle}
                    </p>
                  ) : null}
                </div>
                <p className="text-[15px] font-light text-center text-white px-4 py-3 justify-start flex-grow">
                  {element.body}
                </p>
              </div>
            ))}
          </article>
          <p className="text-[15px] font-regular text-center text-subtitle px-7 mx-6 pt-7">
            {t("financing.foot")}
          </p>
        </article>
      </section>
      <section>
        <article className=" w-full bg-white items-center justify-center flex flex-col relative">
          <div className="rombo bg-ultrablue" />
          <p className="text-[15px] text-[#012237] font-semibold my-[40px] mx-[20px] text-center">
            {t("white2")}
          </p>
          <img
            src="/fin-H.png"
            className="hidden lg:block h-[85px] w-[986px] max-h-max mb-[90px] mr-[30px]"
            alt=""
          />
          <div className="flex flex-col justify-center items-center lg:flex-row lg:relative">
            <p className="text-center font-semibold text-[15px] py-[15px] lg:absolute lg:right-[165px] lg:bottom-[30px] lg:w-[200px] lg:order-2">
              {t("white2p")}
            </p>
            <img
              src="tradi-v.png"
              alt=""
              className="lg:hidden h-[207px] w-[279px] mr-10"
            />
            <p className="text-center  font-semibold text-[15px] py-[17px] lg:absolute lg:left-[242px] lg:bottom-[30px] contain-content lg:order-1">
              {t("white2pp")}
            </p>
            <img
              src="fin-v.png"
              alt=""
              className="lg:hidden h-[217px] w-[251px] mb-[40px] justify-center"
            />
          </div>
        </article>
      </section>
    </main>
  );
};

export default Financiamiento;
