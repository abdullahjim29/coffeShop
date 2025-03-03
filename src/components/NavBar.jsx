import navBg from '../assets/15.jpg';
import logo from '../assets/logo1.png';
const NavBar = () => {
    return (
        <div style={{backgroundImage: `url(${navBg})`}} className='py-2'>
        <div className="flex items-center justify-center gap-3">
        <img className="w-[70px]" src={logo} alt="" />
        <h1 className="text-2xl md:text-5xl text-white fonr-bold font-[rancho]">Espresso Emporium</h1>
        </div>
        </div>
    );
};

export default NavBar;