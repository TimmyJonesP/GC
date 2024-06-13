const Hero = () => {
  return (
    <header className="home h-[736px] w-full bg-[#012237] relative flex items-center justify-center">
      <img
        src="/image-home.webp"
        alt="Home image"
        className="home h-full w-full max-h-max"
      />
      <div className="gradiente w-full absolute bottom-[25px] md:bottom-0 h-[100px] rotate-180" />
    </header>
  );
};

export default Hero;
