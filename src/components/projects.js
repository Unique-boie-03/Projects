import websiteImg1 from '../Assests/ecommerce-website.jpg';
import wensiteImg2 from '../Assests/food-ecommerce.jpg';
import web from '../Assests/website-blog.jpg';
export default function projects(){
    return <section id="projects" className="flex flex-col py-20  px-5 justify-center bg-primary">
        <div className="w-full "> 
        <div className="flex flex-col px-10 py-5">
        <h1 className=" text-white text-4xl border-b-4
         mb-5 w-[150px] font-bold border-[#f70202]">Projects</h1>
        <p className='text-white'>These are some of my best projects.I have built these with React,MERN and vanilla Css.check them out.</p>
        </div>
        </div>
        <div className="w-full">
        <div className='flex flex-col md:flex-row px-10 gap-5'> 
            <div className='relative'> 
                <img className="h-[300px] w-[500px]" src={wensiteImg2}/>
                <div className='project-desc'>
                    <p className=' text-white text-center px-5 py-5'>A ecommerce Website Build with Mern Stack.</p>
                </div>
            </div>
           <div className='relative'>
            <img className="h-[300px] w-[500]" src={websiteImg1}/>
            <div className='project-desc'>
            <p className='text-white text-center px-5 py-5'>Food ecommerce build for food supply.</p>
            </div>
           </div>
           <div className='relative'>
            <img className="h-[300px] w-[500px]" src={web}/>
            <div className='project-desc'>
            <p className='text-white text-center py-5 px-5'>Basic Blog website build with mangodb.</p>
            </div>
            </div>
        </div>
        </div>
    </section>
}
