import { useTranslation } from "react-i18next";

const Enterprises = () => {
  const { t } = useTranslation();
  return (
    <article className=" w-full bg-white items-center justify-center flex flex-col relative">
      <div className="rombo bg-ultrablue" />
      <p className="text-[12px] text-[#012237] font-semibold my-[80px] mx-[20px] text-center">
        {t("white")}
      </p>
      <img
        src="./h-cred.png"
        alt="Companies that trust in us"
        className="mb-[80px] lg:hidden"
      />
      <img
        src="/hero-h.webp"
        className="hidden lg:block h-[81px] w-[1017px] max-h-max mb-[80px]"
        alt=""
      />
    </article>
  );
};

export default Enterprises;
