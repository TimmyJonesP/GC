import { Link, useLocation } from "react-router-dom";
import { routes } from "../../routerConfig";

export const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="w-full z-50 h-[420px] lg:fixed lg:h-[205px] lg:px-24 bg-[#012237] items-center justify-center flex flex-col lg:flex-row lg:justify-between ">
      <a href="/">
        <img src="/garisk-logo.svg" alt="Garisk Capital's logo" />
      </a>
      <ul className="hidden lg:flex flex-row items-center justify-center gap-x-10 text-white text-xl font-light">
        {routes.map((route) => (
          <li key={route.path}>
            <Link
              to={route.path}
              className={`lg:hover:text-golden ${
                location.pathname === route.path ? " font-bold" : ""
              } xl:ml-3`}
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <button className="hidden lg:flex text-golden gradiente-gold bg-transparent text-[14px] font-semibold border-2 text-center border-golden px-6 justify-center py-1 drop-shadow-sm shadow-white">
          Contacto
        </button>
      </div>
    </nav>
  );
};
