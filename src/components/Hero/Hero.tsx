const Hero = () => {
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
        className=" object-cover h-full w-full max-w-max md:hidden"
      />
      <div className="gradiente w-full absolute bottom-0 h-[100px] rotate-180" />
    </header>
  );
};

export default Hero;
