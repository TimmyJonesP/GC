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
    <main className="">
      <Hero />
      <section className="flex flex-col items-center justify-center h-full w-full max-w-screen-lg m-auto my-16">
        <h1 className="uppercase font-bold text-[31px] text-subtitle text-center">
          {t("financing.title")}
        </h1>
        <h3 className="text-golden text-[15px] font-regular text-center px-7 mx-6 pt-7">
          {t("credit.sub")}
          <span className="font-bold ">{t("credit.subN")} </span>
          {t("credit.subb")}
        </h3>
        <h4 className="text-golden font-light text-[12px] px-7 mx-5 pt-7 text-center">
          {t("financing.sub2")}
        </h4>
      </section>
      <section className="w-full h-full flex flex-col items-center justify-center pt-12 relative">
        <h2 className="uppercase text-subtitle font-bold text-[20px] text-center">
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
                <p className="text-golden font-semibold text-center text-[16px]">
                  {element.title}
                </p>
                {element.subtitle ? (
                  <p className="text-center text-[12px] font-light text-golden px-4 leading-[0.8] m-auto">
                    {element.subtitle}
                  </p>
                ) : null}
              </div>
              <p className="text-center text-[12px] font-light text-white px-4 py-3 m-auto justify-start flex-grow">
                {element.body}
              </p>
            </div>
          ))}
        </article>
      </section>
      <section className="w-full h-full bg-[#001420]">
        <article className="w-full h-full flex flex-col items-center justify-center py-[76px] relative max-w-screen-lg m-auto">
          <div className="rombo" />
          <h2 className="uppercase text-subtitle font-bold text-[20px] text-center">
            {t("financing.title2")}
          </h2>
          <p className="text-golden text-[12px] font-regular text-center px-4 mx-6 pt-7">
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
                  <p className="text-golden font-semibold text-center text-[16px]">
                    {element.title}
                  </p>
                  {element.subtitle ? (
                    <p className="text-center text-[12px] font-light text-golden px-4 leading-[0.8] m-auto">
                      {element.subtitle}
                    </p>
                  ) : null}
                </div>
                <p className="text-[12px] font-light text-center text-white px-4 py-3 justify-start flex-grow">
                  {element.body}
                </p>
              </div>
            ))}
          </article>
          <p className="text-[12px] font-regular text-center text-subtitle px-7 mx-6 pt-7">
            {t("financing.foot")}
          </p>
        </article>
      </section>
      <section>
        <Enterprises text={t("white2")} />
      </section>
    </main>
  );
};

export default Financiamiento;
