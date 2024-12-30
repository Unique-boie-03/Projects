import HeroImg from '../Assests/Hero.jpg';
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

export default function Hero() {
    return (
        <section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-between items-center'>
            {/* Text Section */}
            <div className='md:w-1/2 text-center md:text-left'>
                <h1 className='text-white text-6xl'>
                    Hi, <br />I'm <span className='text-red-600'>Gokul Raj</span>
                </h1>
                <p className='text-2xl mt-4 text-white'>I'm a Full-Stack Developer</p>
                <div className='flex justify-center md:justify-start py-10'>
                    <a 
                        href='https://www.instagram.com/unique_boie_03?igsh=NzhtcnU0M294YTJ3' 
                        className='text-red-600 pr-5 hover:text-white'
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <AiOutlineInstagram size={40} />
                    </a>
                    <a 
                        href='https://github.com/Unique-boie-03' 
                        className='text-red-600 pr-5 hover:text-white'
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <AiOutlineGithub size={40} />
                    </a>
                    <a 
                        href='https://www.linkedin.com/in/gokulraj03?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' 
                        className='text-red-600 pr-5 hover:text-white'
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <AiOutlineLinkedin size={40} />
                    </a>
                </div>
            </div>

            {/* Image Section */}
            <div className='md:w-1/2 mt-10 md:mt-0 flex justify-center'>
                <img className='w-full max-w-sm md:max-w-full' src={HeroImg} alt='Hero' />
            </div>
        </section>
    );
}
