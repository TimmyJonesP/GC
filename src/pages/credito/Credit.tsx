import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import { useTranslation } from "react-i18next";

interface Operation {
  body: string;
  bodyn?: string;
  body2?: string;
}

const Credit = () => {
  const { t } = useTranslation();
  const operations: Operation[] = t("credit.elements", { returnObjects: true });
  const benefits: Operation[] = t("credit.bene", { returnObjects: true });
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
    <main>
      <Hero text={t("credit.title")} />
      <img
        src="/scroll.png"
        alt=""
        className="fixed z-20 right-[10%] md:left-[48.7%] bottom-[20px]"
        id="scroll"
      />
      <section className="flex flex-col items-center justify-center h-full w-full  mb-16 max-w-screen-lg m-auto">
        <h3 className="text-golden text-[17px] font-regular text-center px-7 mx-6 pt-7">
          {t("credit.sub")}
          <span className="font-bold ">{t("credit.subN")} </span>
          {t("credit.subb")}
        </h3>
        <h4 className="text-golden font-light text-[15px] px-7 mx-5 pt-7 text-center">
          {t("credit.sub2")}
        </h4>
        <h5 className="text-golden font-light text-[15px] px-7 mx-5 pt-7 text-center">
          {t("credit.sub3")}
        </h5>
      </section>
      <section className="w-full h-full flex flex-col items-center justify-center max-w-screen-lg m-auto">
        <h2 className="uppercase text-subtitle font-bold text-[23px] text-center">
          {t("credit.ope")}
        </h2>
        <article className="align-center justify-center flex flex-row flex-wrap my-[50px] gap-8 lg:gap-36">
          {operations.map((element, index) => (
            <div
              key={index}
              className="flex flex-col items-center align-middle justify-evenly h-[300px] w-[251px]"
            >
              <img src="/divisorCred.svg" alt="divisor" className="" />
              <p className="text-center text-[15px] font-light text-white px-4 my-auto">
                {element.body}
                <span className="font-bold">{element.bodyn}</span>
                {element.body2}
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
        <article className=" w-full bg-white items-center justify-center flex flex-col relative">
          <div className="rombo bg-ultrablue" />
          <p className="text-[15px] text-[#012237] font-semibold my-[80px] mx-[20px] text-center">
            {t("white")}
          </p>
          <img
            src="./logosV.webp"
            alt="Companies that trust in us"
            className="mb-[80px] h-[484px] w-[331px] lg:hidden"
          />
          <img
            src="/logosH.webp"
            className="hidden lg:block h-[81px] w-[1017px] max-h-max mb-[80px]"
            alt=""
          />
        </article>
      </section>
      <section className="bg-[#001420]">
        <article className="w-full h-full flex flex-col items-center justify-center relative max-w-screen-lg m-auto ">
          <div className="rombo" />
          <h2 className="uppercase text-subtitle font-bold text-[23px] py-12 text-center">
            {t("credit.dest")}
          </h2>
          <article className="align-center justify-evenly flex flex-col flex-no-wrap mb-7 md:grid md:grid-cols-2 md:gap-8 lg:grid  lg:grid-cols-4 gap-8 max-w-screen-lg m-auto pb-28">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center align-center h-[170px] w-[215px] m-3 lg:m-0"
              >
                <img src="golden.svg" alt="" className="mb-4" />
                <p className="text-center text-[15px] font-light text-white px-4">
                  {benefit.body}
                </p>
              </div>
            ))}
          </article>
        </article>
      </section>
    </main>
  );
};

export default Credit;
