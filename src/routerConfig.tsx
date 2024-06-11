import React from "react";

export interface RouteConfig {
  path: string;
  element: React.LazyExoticComponent<React.ComponentType<object>>;
  name: string;
}

export const routes: RouteConfig[] = [
  {
    path: "/",
    element: React.lazy(() => import("./components/home/Home.tsx")),
    name: "nav.home",
  },
  {
    path: "/credit",
    element: React.lazy(() => import("./pages/credito/Credit.tsx")),
    name: "nav.credit",
  },
  {
    path: "/financing",
    element: React.lazy(
      () => import("./pages/financiamiento/Financiamiento.tsx")
    ),
    name: "nav.finance",
  },
  {
    path: "/services",
    element: React.lazy(() => import("./pages/servicios/Servicios.tsx")),
    name: "nav.services",
  },
];
