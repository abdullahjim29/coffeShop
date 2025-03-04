import Banner from "../components/Banner";
import Products from "../components/Products";
import Servises from "../components/Servises";
const Home = () => {
    return (
        <div>
            {/* banner section */}
        <Banner/>

        {/* our servises section */}
        <Servises/>

        {/* our popular products */}
        <Products/>
        </div>
    );
};

export default Home;