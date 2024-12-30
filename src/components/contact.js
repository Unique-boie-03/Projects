import ResumeImg from '../Assests/resume.jpg';
export default function Contact(){
    return <section id="contact" className='flex flex-col bg-primary px-5 py-32'>
       
        <div className='flex flex-col items-center'>
            <h1 className='text-4xl  border-b-4 border-[#f70202] mb-5 w-[140px] font-bold text-white'>Contact</h1>
            <p className='pb-5 text-white'>If you want to discuss more in detail,Please Contact</p>
            <p className=' text-white'><span className='font-bold '>Email:</span> vlrgokulraj03@gmail.com</p>
            <p className=' text-white'><span className='font-bold'>Phone:</span> +91 9994234276</p>
        </div>
    </section>
}