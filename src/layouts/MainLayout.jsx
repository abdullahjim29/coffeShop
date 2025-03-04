import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <header>
        <nav>
            <NavBar/>
        </nav>
      </header>

      <main>
        <Outlet/>
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default MainLayout;
