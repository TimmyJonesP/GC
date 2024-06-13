import Enterprises from "../../components/reut/enterprises";
import Hero from "../../components/Hero/Hero";
import { useTranslation } from "react-i18next";

interface Operation {
  body: string;
}

const Credit = () => {
  const { t } = useTranslation();
  const operations: Operation[] = t("credit.elements", { returnObjects: true });
  const benefits: Operation[] = t("credit.bene", { returnObjects: true });
  return (
    <main>
      <Hero />
      <section className="flex flex-col items-center justify-center h-full w-full  my-16 max-w-screen-lg m-auto ">
        <h1 className="uppercase font-bold text-[31px] text-subtitle text-center">
          {t("credit.title")}
        </h1>
        <h3 className="text-golden text-[15px] font-semibold text-center px-7 mx-6 pt-7">
          {t("credit.sub")}
        </h3>
        <h4 className="text-golden font-light text-[12px] px-7 mx-5 pt-7 text-center">
          {t("credit.sub2")}
        </h4>
      </section>
      <section className="w-full h-full flex flex-col items-center justify-center max-w-screen-lg m-auto">
        <h2 className="uppercase text-subtitle font-bold text-[20px] text-center">
          {t("credit.ope")}
        </h2>
        <article className="align-center justify-center flex flex-row flex-wrap my-28 gap-8 lg:gap-36">
          {operations.map((element, index) => (
            <div
              key={index}
              className="flex flex-col items-center align-middle justify-evenly h-[200px] w-[251px]"
            >
              <img src="/divisorCred.svg" alt="divisor" className="" />
              <p className="text-center text-[12px] font-light text-white px-4 my-auto">
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
      <section className="bg-[#001420]">
        <article className="w-full h-full flex flex-col items-center justify-center relative max-w-screen-lg m-auto ">
          <div className="rombo" />
          <h2 className="uppercase text-subtitle font-bold text-[20px] py-12 text-center">
            {t("credit.dest")}
          </h2>
          <article className="align-center justify-evenly flex flex-col flex-no-wrap mb-7 md:grid md:grid-cols-2 md:gap-8 lg:grid  lg:grid-cols-4 gap-8 max-w-screen-lg m-auto pb-28">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center align-center h-[100px] w-[215px] m-7 lg:m-0"
              >
                <img src="golden.svg" alt="" className="mb-4" />
                <p className="text-center text-[12px] font-light text-white px-4">
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
