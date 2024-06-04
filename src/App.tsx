import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { AppRouter } from "./Router";
import { NavBar } from "./components/navBar/NavBar";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
