import AboutImg from '../Assests/about.jpg';
export default function About(){
    return <section className='flex md:flex-row flex-col bg-primary px-5 'id='about'>
        <div className='md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex just-center'>
            <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl  border-b-4 border-[#f70202] mb-5 w-[170px] font-bold'>About Me</h1>
            <p className='pb-5'>Hi, Iam  Gokul raj .Iam a full stack developer.I built beautifull websites with React.js,Tailwind Css</p>
            <p className='pb-5'>I am proficient in frontend skills like React.js,Redux,Redux Tool Kit,Axios,Tailwind Css,SaSS,Css3 and many more.</p>
            <p className=''>In Backend I know Node.js,Express.js,MongoDB and Mongoose.</p>
            </div>
        </div>
    </section>
}

