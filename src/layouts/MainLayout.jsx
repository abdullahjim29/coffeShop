import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";

const MainLayout = () => {
  return (
    <div>
      <header>
        <nav>
            <NavBar/>
        </nav>

        {/* banner */}
        <Banner/>
      </header>

      <main>
        <Outlet/>
      </main>

      <footer>
        <h2 className="font-raleway text-4xl">Hello World</h2>
      </footer>
    </div>
  );
};

export default MainLayout;
