import React from 'react';
import toshqaychi from '../../../img/toshqaychi.png'
// Import Swiper styles
import { FaRegEye } from "react-icons/fa";

// import required modules

const Projects =React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
  return (
    <section ref={ref} {...props} className="projects pb-[200px]">
      <div className="container text-[10px] flex flex-col gap-[60px] pt-[80px]">
        <h4 aria-label='Projects section' className="text-[4.9em] sanserif font-[700] text-[#70ff00]">
          projects<span className=" sanserif text-[#fff]">()</span>
        </h4>

        <div className="projects-swiper grid grid-cols-4  gap-[30px]">


             <a aria-label='Project tosh-qaychi-qogoz' href="https://tosh-qaychi-qogoz.vercel.app" target="_blank">
             <div className="relative cursor-pointer group projects-item w-[30em]  h-[23em] rounded-md border-4  border-white hover:border-[#70ff00] transition-all ">
                <img src={toshqaychi} alt="Tosh qaychi qog'oz o'yini" className="!w-[100%] !h-[100%]" />
                <div className = "w-full h-full   hidden group-hover:flex  items-center justify-center left-0 top-0   backdrop-blur-sm  bg-black/30 absolute">

                <div className="flex flex-col gap-[10px] items-center">
                <FaRegEye className="text-[4em] text-[#70ff00]" />
                <h5 className="text-[2em] text-[#70ff00] font-[600]">Click to view full project</h5>
                </div>

                </div>

                <div className="absolute bottom-0 left-0 z-50 h-[50px] !w-[100%] backdrop-blur-2xl flex items-center gap-[1em] px-[2em] text-[white] text-[1.1em] font-[500] "  >
                    <h6>JS</h6> <h6>+</h6>  <h6>HTML</h6> <h6>+</h6>  <h6>SCSS</h6>  <h5>=</h5> <h6>This App</h6>
                </div>

              </div>
             </a>
           
        </div>
      </div>
    </section>
  );
    
})


export default Projects;
