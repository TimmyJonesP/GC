import { useTranslation } from "react-i18next";
import Hero from "../../components/Hero/Hero";
import Enterprises from "../../components/reut/enterprises";
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

  return (
    <main>
      <Hero />
      <section className="flex flex-col items-center justify-center h-full w-full xl:px-96 my-28">
        <p className="uppercase font-light text-[19px] text-white leading-[0.7]">
          {t("financing.pre")}
        </p>
        <h1 className="uppercase font-bold text-[31px] text-subtitle text-center">
          {t("financing.title")}
        </h1>
        <h3 className="text-golden text-[15px] font-semibold text-center px-7 mx-6 pt-7">
          {t("financing.sub")}
        </h3>
        <h4 className="text-golden font-light text-[12px] px-7 mx-5 pt-7 text-center">
          {t("financing.sub2")}
        </h4>
      </section>
      <section className="w-full h-full flex flex-col items-center justify-center pt-12 relative">
        <h2 className="uppercase text-subtitle font-bold text-[20px] text-center">
          {t("financing.ope")}
        </h2>
        <article className="aligns-center justify-evenly flex flex-col flex-no-wrap mb-7">
          {elements.map((element, index) => (
            <div
              key={index}
              className="flex flex-col items-center align-center justify-center m-7 px-[100px]"
            >
              <img src="golden.svg" alt="" className="mb-4" />
              <p className="text-golden font-semibold text-center text-[16px]">
                {element.title}
              </p>
              {element.subtitle ? (
                <p className="text-center text-[12px] font-light text-golden px-4 leading-[0.8] m-auto">
                  {element.subtitle}
                </p>
              ) : null}
              <p className="text-center text-xs font-light text-white px-4 py-3 m-auto">
                {element.body}
              </p>
            </div>
          ))}
        </article>
      </section>
      <section className="w-full h-full flex flex-col items-center justify-center py-[76px] relative bg-[#001420]">
        <div className="rombo" />
        <h2 className="uppercase text-subtitle font-bold text-[20px] text-center">
          {t("financing.title2")}
        </h2>
        <p className="text-golden text-[12px] font-regular text-center px-7 mx-6 pt-7">
          {t("financing.sub3")}
          <span className=" font-semibold">{t("financing.span")}</span>
          {t("financing.sub4")}
        </p>
        <article className=" py-20">
          {opt.map((element, index) => (
            <div
              key={index}
              className="flex flex-col items-center align-center justify-center m-7 px-[100px]"
            >
              <img src="golden.svg" alt="" className="mb-4" />
              <p className="text-golden font-semibold text-center text-[16px]">
                {element.title}
              </p>
              {element.subtitle ? (
                <p className="text-center text-[12px] font-light text-golden px-4 leading-[0.8] m-auto">
                  {element.subtitle}
                </p>
              ) : null}
              <p className="text-center text-xs font-light text-white px-4 py-3 m-auto">
                {element.body}
              </p>
            </div>
          ))}
        </article>
        <p className="text-[12px] font-regular text-center text-subtitle px-7 mx-6 pt-7">
          {t("financing.foot")}
        </p>
      </section>
      <section>
        <Enterprises />
      </section>
    </main>
  );
};

export default Financiamiento;
