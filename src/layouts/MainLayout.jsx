import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

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
        <h2 className="font-raleway text-4xl">FOOOOOOOOOOOTER</h2>
      </footer>
    </div>
  );
};

export default MainLayout;
