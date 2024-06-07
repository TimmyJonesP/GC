import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { AppRouter } from "./Router";
import { NavBar } from "./components/navBar/NavBar";
import { Footer } from "./components/footer/Footer";
import { Suspense } from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen">
              <div className="relative inline-flex">
                <div className="w-8 h-8 bg-golden rounded-full"></div>
                <div className="w-8 h-8 bg-golden rounded-full absolute top-0 left-0 animate-ping"></div>
                <div className="w-8 h-8 bg-golden rounded-full absolute top-0 left-0 animate-pulse"></div>
              </div>
            </div>
          }
        >
          <AppRouter />
          <Footer />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
