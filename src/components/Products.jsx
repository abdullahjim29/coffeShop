import { BiSolidCoffee } from "react-icons/bi";
import bg4 from '../assets/4.png';

const Products = () => {
    return (
        <div className="my-16">
            <div style={{backgroundImage: `url(${bg4})`}}className="text-center space-y-3 bg-no-repeat bg-contain py-20">
                <h4 className="font-[relway]">--- Sip & Savor ---</h4>
                <h2 className="font-[rancho] text-4xl text-[#331A15]">Our Popular Products</h2>
                <button className="btn font-normal bg-[#E3B577] border border-black font-[rancho] text-white text-lg">Add Coffee <BiSolidCoffee  className="text-black"/></button>
            </div>
        </div>
    );
};

export default Products;