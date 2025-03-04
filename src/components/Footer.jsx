import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import footerBg from '../assets/13.jpg';
import logo from '../assets/logo1.png';
import footImg from '../assets/24.jpg';

const Footer = () => {
    return (
        <div>
            <div style={{backgroundImage: `url(${footerBg})`}} className='pt-20 pb-10'>
            <div className="w-9/12 mx-auto"><img className='w-[75px]' src={logo} alt="" /></div>
            <div className='w-9/12 mx-auto flex flex-col md:flex-row items-center'>
                {/* left footer */}
                <div className="space-y-8 w-full">
                    <div className="space-y-2">
                    <h3 className='text-[#331A15] font-[rancho] text-3xl font-semibold'>Espresso Emporium</h3>
                    <p className='font-[raleway] w-10/12'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                    </div>

                    {/* social media icons */}
                    <div className="flex items-center gap-2">
                        <FaFacebook className="text-[#331A15] text-3xl"/>
                        <FaTwitter className="text-[#331A15] text-3xl"/>
                        <FaInstagram className="text-[#331A15] text-3xl"/>
                        <FaLinkedin className="text-[#331A15] text-3xl"/>
                    </div>

                {/* reaching icons */}
                <div className="space-y-2">
                    <h3 className='text-[#331A15] font-[rancho] text-3xl font-semibold'>Get in Touch</h3>
                    <div className="flex items-center gap-2">
                        <FaPhoneAlt/>
                        <p>+88 01533 333 333</p>
                    </div>

                    <div className="flex items-center gap-2">
                    <MdEmail />
                    <p>info@gmail.com</p>
                    </div>

                    <div className="flex items-center gap-2">
                    <IoLocationSharp />
                    <p>72, Wall street, King Road, Dhaka</p>
                    </div>
                </div>

                </div>

                {/* right footer */}
                <div className="space-y-4 w-full md:w-6/12 my-14 md:my-0">
                    <h3 className='text-[#331A15] font-[rancho] text-3xl font-semibold'>Connect with Us</h3>
                    <div>
                    <input type="text" placeholder="Name" className="input font-[raleway] rounded-lg" />
                    </div>

                    <div>
                    <input type="text" placeholder="Email" className="input font-[raleway] rounded-lg" />
                    </div>

                    <div>
                    <textarea rows={5} className="textarea font-[raleway] rounded-lg" placeholder="Message"></textarea>
                    </div>

                    <div>
                        <button className="border border-[#331A15] text-[#331A15] btn rounded-3xl font-[rancho] font-normal text-xl hover:bg-[#331A15] hover:text-[white]">Send Message</button>
                    </div>
                </div>
            </div>
        </div>

        <div style={{backgroundImage: `url(${footImg})`}} className="border py-3 ">
            <p className="text-white font-[rancho] text-center text-xl ">Copyright Espresso Emporium ! All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;