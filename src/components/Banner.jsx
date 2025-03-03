import bannerImg from '../assets/3.png';

const Banner = () => {
    return (
        <div className='py-20 lg:py-60 bg-cover lg:bg-bottom' style={{backgroundImage: `url(${bannerImg})`}}>
            <div className='flex justify-between lg:w-10/12 mx-auto'>
                <div className='w-6/10 hidden lg:block'></div>
            <div id='banner' className='text-white space-y-4 w-11/12 mx-auto  lg:w-full lg:ml-32'>
                <h2 className='text-3xl md:text-5xl font-[rancho]'>Would you like a Cup of Delicious Coffee?</h2>
                <p className='font-[raleway] text-gray-200 text-sm'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className='btn bg-[#E3B577] text-lg border-none font-[rancho]'>Learn More</button>
            </div>
            </div>
        </div>
    );
};

export default Banner;