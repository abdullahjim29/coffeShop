import service1 from '../assets/service1.png';
import service2 from '../assets/service2.png';
import service3 from '../assets/service3.png';
import service4 from '../assets/service4.png';

const Servises = () => {
    return (
        <div className='bg-[#ECEAE3] py-14'>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 w-9/12 mx-auto items-center gap-5'>
                <div className='space-y-2'>
                    <img src={service1} alt="" />
                    <h3 class='font-[rancho] text-2xl text-[#331A15]'>Awesome Aroma</h3>
                    <p class='font-[raleway] text-sm text-[#1B1A1A]'>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className='space-y-2'>
                    <img src={service2} alt="" />
                    <h3 class='font-[rancho] text-2xl text-[#331A15]'>High Quality</h3>
                    <p class='font-[raleway] text-sm text-[#1B1A1A]'>We served the coffee to you maintaining the best quality</p>
                </div>
                <div className='space-y-2'>
                    <img src={service3} alt="" />
                    <h3 class='font-[rancho] text-2xl text-[#331A15]'>Pure Grades</h3>
                    <p class='font-[raleway] text-sm text-[#1B1A1A]'>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div className='space-y-2'>
                    <img src={service4} alt="" />
                    <h3 class='font-[rancho] text-2xl text-[#331A15]'>Proper Roasting</h3>
                    <p class='font-[raleway] text-sm text-[#1B1A1A]'>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>
        </div>
    );
};

export default Servises;