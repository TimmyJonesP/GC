import { Route, Routes } from "react-router-dom";
import { RouteConfig, routes } from "./routerConfig";

export const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route: RouteConfig, index: number) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};
