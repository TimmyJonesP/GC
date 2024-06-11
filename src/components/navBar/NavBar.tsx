import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../../routerConfig";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const location = useLocation();
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };
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
      className={`w-full z-50 h-[420px] lg:h-[205px] bg-[#012237] items-center justify-center flex flex-col lg:flex-row lg:justify-between`}
    >
      <div
        className={`w-screen flex flex-row items-center justify-between px-16 fixed lg:flex-row bg-[#012237] lg:px-24 py-5 transition-all duration-20 z-50 ${
          isScrolled || isMenuOpen ? "top-0" : ""
        } ${isMenuOpen ? "h-screen flex-col" : ""}`}
      >
        <div className="flex flex-row items-center justify-between w-full lg:w-auto">
          <Link to="/" onClick={handleLinkClick}>
            <img src="/garisk-logo.svg" alt="Garisk Capital's logo" />
          </Link>
          <div className="lg:hidden">
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
          className={`lg:flex flex-row items-center justify-center gap-x-10 text-subtitle text-xl font-light ${
            isMenuOpen
              ? "h-full flex-col text-[23px] w-full py-[60px] items-center"
              : "hidden"
          }`}
        >
          {routes.map((route) => (
            <li
              key={route.path}
              className={`${
                isMenuOpen ? "py-[45px] px-[60px] justify-center" : ""
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
          ))}
        </ul>
        <div className="hidden lg:block">
          <button className="text-golden gradiente-gold bg-transparent text-[14px] font-semibold border-2 text-center border-golden px-6 justify-center py-1 drop-shadow-sm shadow-white">
            {t("nav.contact")}
          </button>
        </div>
      </div>
    </nav>
  );
};
