import { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { routes } from "../../routerConfig";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [initialTop, setInitialTop] = useState<number | null>(null);
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const navbarRef = useRef<HTMLDivElement>(null);

  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollToAbout = () => {
    navigate("/");
    setTimeout(() => {
      const aboutElement = document.getElementById("aboutus");
      if (aboutElement) {
        aboutElement.scrollIntoView({ behavior: "smooth" });
      } else {
        console.log("aboutus element not found");
      }
    }, 100);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        const navbarTop = navbarRef.current.getBoundingClientRect().top;

        if (initialTop === null) {
          setInitialTop(navbarTop);
        }

        if (window.scrollY > (initialTop ?? 0)) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [initialTop]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (location.hash === "#aboutus") {
      const aboutElement = document.getElementById("aboutus");
      if (aboutElement) {
        aboutElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMenuOpen]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`w-full z-50 h-[200px] bg-[#012237] items-center justify-center flex flex-col lg:flex-row lg:justify-between`}
    >
      <div
        ref={navbarRef}
        className={`w-full flex flex-row items-center justify-between px-6 lg:flex-row bg-[#012237] xl:px-24 py-3 z-50 ${
          isScrolled || isMenuOpen ? "fixed top-0" : "relative"
        } ${isMenuOpen ? "h-screen flex-col" : ""}`}
      >
        <div className="flex flex-row items-center justify-between w-full lg:w-auto transition-all duration-300 ease-in-out">
          <Link to="/" onClick={handleLinkClick}>
            <img src="/garisk-logo.svg" alt="Garisk Capital's logo" />
          </Link>
          <div className="lg:hidden ">
            <button className="text-white" onClick={toggleMenu}>
              <img
                src="/hamburger.svg"
                alt=""
                className={` fill-current ${isMenuOpen ? "hidden" : ""}`}
              />
              <img
                src="cross.svg"
                alt=""
                className={`fill-current ${isMenuOpen ? "" : "hidden"}`}
              />
            </button>
          </div>
        </div>
        <ul
          className={`lg:flex flex-row items-center justify-center gap-x-10 text-subtitle text-[12px] xl:text-[16px] font-light ${
            isMenuOpen
              ? "h-full flex-col text-[23px] w-full py-[60px] items-center"
              : "hidden"
          }`}
        >
          {routes.map((route, index) => (
            <>
              <li
                key={route.path}
                className={`${
                  isMenuOpen ? "py-[30px] px-[60px] justify-center" : ""
                }`}
              >
                <Link
                  to={route.path}
                  className={`lg:hover:text-golden ${
                    location.pathname === route.path
                      ? " font-bold text-golden"
                      : ""
                  }
                  ${isMenuOpen ? "" : ""} xl:ml-3`}
                  onClick={handleLinkClick}
                >
                  {t(route.name)}
                </Link>
              </li>
              {index === 0 && (
                <li
                  className={`${
                    isMenuOpen ? "py-[30px] px-[60px] justify-center" : ""
                  }`}
                >
                  <button
                    onClick={handleScrollToAbout}
                    className={`lg:hover:text-golden
                    ${isMenuOpen ? "" : ""} xl:ml-3`}
                  >
                    {t("nav.about")}
                  </button>
                </li>
              )}
            </>
          ))}
          <div className=" lg:hidden px-[50px] py-[30px]">
            <button onClick={() => changeLanguage("en")}>
              <img src="en-btn.png" className="px-4" alt="" />
            </button>
            <button onClick={() => changeLanguage("es")}>
              <img src="es-btn.png" alt="" />
            </button>
          </div>
        </ul>
        <div className="hidden lg:block absolute right-[140px] xl:right-[240px] top-[30px]">
          <button onClick={() => changeLanguage("es")}>
            <img src="es-btn.png" alt="spanish" />
          </button>
          <button onClick={() => changeLanguage("en")}>
            <img src="en-btn.png" className="px-4" alt="english" />
          </button>
        </div>
        <div className="hidden lg:block">
          <button
            onClick={scrollToFooter}
            className="text-golden gradiente-gold bg-transparent xl:ml-[125px] text-[14px] font-semibold border-2 text-center border-golden px-6 justify-center py-1 drop-shadow-sm shadow-white"
          >
            {t("nav.contact")}
          </button>
        </div>
      </div>
    </nav>
  );
};
