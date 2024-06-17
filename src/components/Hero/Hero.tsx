import React from "react";

interface HeroProps {
  text: string;
}

const Hero: React.FC<HeroProps> = ({ text }) => {
  return (
    <header className="home h-full w-full bg-[#012237] relative flex items-center justify-center">
      <img
        src="/desktop-h.png"
        alt="Home image"
        className="home h-full w-full max-h-max hidden md:block"
      />
      <img
        src="/mobile-h.png"
        alt="Home image"
        className="object-cover h-full w-full max-w-max md:hidden"
      />
      <h1 className="text-subtitle uppercase absolute px-14 text-[19px] z-10 font-bold text-center bottom-[-75px] md:bottom-[25px] xl:bottom-[70px] lg:text-[40px] mx-auto max-w-screen-lg">
        {text}
      </h1>
      <div className="gradiente w-full absolute bottom-0 h-[100px] rotate-180" />
    </header>
  );
};

export default Hero;
