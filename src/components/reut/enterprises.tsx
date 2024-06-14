import React from "react";
interface EnterprisesProps {
  text: string;
}

const Enterprises: React.FC<EnterprisesProps> = ({ text }) => {
  return (
    <article className=" w-full bg-white items-center justify-center flex flex-col relative">
      <div className="rombo bg-ultrablue" />
      <p className="text-[12px] text-[#012237] font-semibold my-[80px] mx-[20px] text-center">
        {text}
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
  );
};

export default Enterprises;
