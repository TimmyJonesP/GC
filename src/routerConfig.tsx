import { Credit, Financiamiento, Home, Servicios } from "./pages";

export interface RouteConfig {
  path: string;
  element: JSX.Element;
}

export const routes: RouteConfig[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/financing",
    element: <Financiamiento />,
  },
  {
    path: "/services",
    element: <Servicios />,
  },
  {
    path: "/credit",
    element: <Credit />,
  },
];
