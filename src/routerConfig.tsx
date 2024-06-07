import React from "react";

export interface RouteConfig {
  path: string;
  element: React.LazyExoticComponent<React.ComponentType<object>>;
  name?: string;
}

export const routes: RouteConfig[] = [
  {
    path: "/",
    element: React.lazy(() => import("./components/home/Home.tsx")),
    name: "Home",
  },
  {
    path: "/services",
    element: React.lazy(() => import("./pages/servicios/Servicios.tsx")),
    name: "Servicios de crédito",
  },
  {
    path: "/financing",
    element: React.lazy(
      () => import("./pages/financiamiento/Financiamiento.tsx")
    ),
    name: "Financiamiento",
  },
  {
    path: "/credit",
    element: React.lazy(() => import("./pages/credito/Credit.tsx")),
    name: "Otros Servicios",
  },
];
