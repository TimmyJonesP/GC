import { FormEvent, useRef } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

export const Footer = () => {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);
  const footerRef = useRef(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_j6w1y3z", "template_bh320rq", form.current, {
          publicKey: "hv16itZ0B6boTfvVo",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text, error);
          }
        );
    }
  };

  return (
    <footer
      className="h-[880px] lg:h-[514px] w-full bg-ultrablue flex flex-col justify-center items-center text-center relative lg:justify-evenly max-w-screen-xl m-auto"
      ref={footerRef}
      id="footer"
    >
      <div className="rombo" />
      <h2 className="text-subtitle text-[31px] font-bold uppercase">
        {t("footer.footer")}
      </h2>
      <h3 className=" text-golden text-[15px] font-bold px-16 py-9 lg:hidden">
        {t("footer.footer_body")}
      </h3>
      <section className="w-full flex flex-col lg:flex-row lg:justify-between px-10 lg:px-20">
        <article className="lg:order-2 lg:w-1/2 flex justify-center lg:mt-0 l">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col items-center w-full gap-7 lg:gap-3 mx-2 my-7 text-[11px] font-light"
          >
            <input
              type="text"
              name="name"
              placeholder={t("form.name")}
              className="w-[90%] lg:w-full text-subtitle bg-[#012237] border-sky-950 border lg:py-1 py-2 px-2"
            />
            <div className="w-[90%] lg:w-full flex flex-col lg:flex-row gap-7">
              <input
                type="tel"
                name="phone"
                placeholder={t("form.tel")}
                className="lg:w-1/2 w-full text-subtitle bg-[#012237] border-sky-950 border lg:py-1 py-2 px-2"
              />
              <input
                type="email"
                name="email"
                placeholder={t("form.email")}
                className="lg:w-1/2 w-full text-subtitle bg-[#012237] border-sky-950 border lg:py-1 py-2 px-2"
              />
            </div>
            <textarea
              name="body"
              placeholder={t("form.body")}
              className="w-[90%] lg:w-full lg:h-[135px] h-[191px] text-subtitle bg-[#012237] lg:pt-1 border-sky-950 border px-2 textarea-no-scrollbar"
            />
            <div className="lg:self-start justify-center">
              <button
                type="submit"
                className="text-black px-5 text-[14px] font-semibold py-2 bg-subtitle"
              >
                {t("footer.footer_btn")}
              </button>
            </div>
          </form>
        </article>
        <article className="lg:order-1 lg:w-1/2 flex flex-col items-center lg:items-start lg:text-left">
          <h3 className="text-golden text-[15px] font-bold py-9 hidden lg:block">
            {t("footer.footer_body")}
          </h3>
          <a href="mailto:info@gariskcapital.com">
            <div className="flex flex-row justify-center lg:justify-start items-center gap-2 mt-3">
              <img src="/mail.svg" alt="e-mail" />
              <p className="text-white font-bold text-[15px]">
                info@gariskcapital.com
              </p>
            </div>
          </a>
          <div className="flex flex-row justify-center lg:justify-start items-center gap-2 mt-3">
            <img src="/brand-whatsapp.svg" alt="whatsapp" />
            <p className="text-white font-bold text-[15px]">+52 55 3455 0049</p>
          </div>
          <div className="flex justify-center lg:justify-start mt-[50px]">
            <a href="/">
              <img src="/footer-brand.svg" alt="brand logo" />
            </a>
          </div>
        </article>
      </section>
    </footer>
  );
};
