import React from "react";
import toshqaychi from "../../../img/toshqaychi.png";
import magiccinema from "../../../img/magicticket.png";
import travelhut from "../../../img/travelhut.png";
import dash from "../../../img/dashboard-login.png";
import audiolibrary from "../../../img/audiolibrary.png";
import techheim from "../../../img/techheim.png";
import youtubeclone from "../../../img/youtubeclone.png";
import shadcn from "../../../img/nextjs-light-black.png";
import greenshop from "../../../img/greenshop.png";
// Import Swiper styles

import { PinContainer } from "../../ui/3d-pin";

// import required modules

const Projects = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  return (
    <section ref={ref} {...props} className="projects pb-[200px]">
      <div className="container text-[10px] flex flex-col gap-[60px] pt-[80px] max-[811px]:text-[8px] max-[444px]:text-[7px] max-[362px]:text-[6px]">
        <h4
          aria-label="Projects section"
          className="text-[4.9em] sanserif font-[700] text-[#70ff00]"
        >
          projects<span className=" sanserif text-[#fff]">()</span>
        </h4>

        <div className="projects grid grid-cols-4 max-[1270px]:grid-cols-3 max-[1270px]:gap-[4em] max-[1028px]:grid-cols-2  gap-[3em] max-[593px]:grid-cols-1 max-[400px]:gap-0">


          {/* magic cinema */}
          <PinContainer
            title="https://magic-cinema-ticket.uz"
            href="https://ticket-sale-for-magic-city.vercel.app/"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[24em] max-[1028px]:w-[30em] h-[32em]  max-[593px]:w-[42em]  max-[593px]:h-[35em]">
              <h3 className="text-[1.5em] font-[700] !pb-2 !m-0  text-slate-100">
                MAGIC CINEMA
              </h3>
              <div className=" text-[1.2em] font-[500] !m-0 !p-0 ">
                <p className="text-slate-500 ">REACT + TS + TAILWIND</p>
                <p className="text-slate-500 ">NodeJs + MongoDB</p>
              </div>
              <img
                className="h-[23em] rounded-md mt-[1em] "
                src={magiccinema}
                alt="Rock paper sckissors"
              />
            </div>
          </PinContainer>

          {/* TEch heim */}
          <PinContainer
          className=""
            title="https://tech-heim.uz"
            href="https://tech-heim-exam.vercel.app/"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[24em] max-[1028px]:w-[30em] h-[32em] max-[593px]:w-[42em]  max-[593px]:h-[35em] ">
              <h3 className="text-[1.5em] font-[700] !pb-2 !m-0  text-slate-100">
                TECH HEIM 
              </h3>
              <div className=" text-[1.2em] font-[500] !m-0 !p-0 ">
                <p className="text-slate-500 ">REACT + JS + SCSS</p>
                <p className="text-[1em]">Beckend:  ExpressJs</p>
              </div>
              <img
                className="h-[23em] rounded-md mt-[1em] "
                src={techheim}
                alt="Tech heim img"
              />
            </div>
          </PinContainer>

          {/* Audio library */}
          <PinContainer
          className=""
            title="https://audio-library.uz"
            href="https://audio-library-full.vercel.app/"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[24em] max-[1028px]:w-[30em] h-[32em] max-[593px]:w-[42em]  max-[593px]:h-[35em]">
              <h3 className="text-[1.5em] font-[700] !pb-2 !m-0  text-slate-100">
                AUDIO LIBRARY
              </h3>
              <div className=" text-[1.2em] font-[500] !m-0 !p-0 ">
                <p className="text-slate-500 ">REACT + JS + TAILWIND</p>
                <i className="text-[0.7em]">just style</i>
              </div>
              <img
                className="h-[23em] rounded-md mt-[1em] "
                src={audiolibrary}
                alt="audio library"
              />
            </div>
          </PinContainer>

    {/* Greenshop qaychi */}
    <PinContainer
            title="https://greenshop.uz"
            href=" https://greenshop-kdrv-wsrn.vercel.app/"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[24em] max-[1028px]:w-[30em] h-[32em] max-[593px]:w-[42em]  max-[593px]:h-[35em]">
              <h3 className="text-[1.5em] font-[700] !pb-2 !m-0  text-slate-100">
                GREENSHOP
              </h3>
              <div className=" text-[1.2em] font-[500] !m-0 !p-0 ">
                <span className="text-slate-500 ">REACT + TS + TAILWIND</span>
              </div>
              <img
                className="h-[23em] rounded-md mt-[1em] "
                src={greenshop}
                alt="Greenshop project"
              />
            </div>
          </PinContainer>


         
          {/* tosh qaychi */}
          <PinContainer
            title="https://tosh-qaychi-qogoz.uz"
            href="https://tosh-qaychi-qogoz.vercel.app/"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[24em] max-[1028px]:w-[30em] h-[32em] max-[593px]:w-[42em]  max-[593px]:h-[35em]">
              <h3 className="text-[1.5em] font-[700] !pb-2 !m-0  text-slate-100">
                TOSH-QAYCHI-QOGOZ
              </h3>
              <div className=" text-[1.2em] font-[500] !m-0 !p-0 ">
                <span className="text-slate-500 ">HTML + CSS +JAVASCRIPT</span>
              </div>
              <img
                className="h-[23em] rounded-md mt-[1em] "
                src={toshqaychi}
                alt="Rock paper sckissors"
              />
            </div>
          </PinContainer>

        

          {/* Multi lang */}
          <PinContainer
            title="https://multi-language-site.uz"
            href="https://change-language-site.vercel.app/"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[24em] max-[1028px]:w-[30em] h-[32em] max-[593px]:w-[42em]  max-[593px]:h-[35em] ">
              <h3 className="text-[1.5em] font-[700] !pb-2 !m-0  text-slate-100">
                TRAVEL HUT
              </h3>
              <div className=" text-[1.2em] font-[500] !m-0 !p-0 ">
                <p className="text-slate-500 ">REACT + JS + TAILWIND</p>
                <p className="text-slate-500 ">Multi language: i18Next</p>
              </div>
              <img
                className="h-[23em] rounded-md mt-[1em] "
                src={travelhut}
                alt="TRAVEL HUT"
              />
            </div>
          </PinContainer>


          {/* Dashboard login */}
          <PinContainer
            title="https://dashboard-no-responsive.uz"
            href="https://dashboard-login-page.vercel.app/"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[24em] max-[1028px]:w-[30em] h-[32em] max-[593px]:w-[42em]  max-[593px]:h-[35em]">
              <h3 className="text-[1.5em] font-[700] !pb-2 !m-0  text-slate-100">
                DASHBOARD
              </h3>
              <div className=" text-[1.2em] font-[500] !m-0 !p-0 ">
                <p className="text-slate-500 ">REACT + JS + TAILWIND</p>
                <i>no responsive</i>
              </div>
              <img
                className="h-[23em] rounded-md mt-[1em] "
                src={dash}
                alt="Dashboard img"
              />
            </div>
          </PinContainer>

          {/* Youtube clone */}
          <PinContainer
            title="https://youtube-clone.uz"
            href="https://youtube-clone-ten-cyan.vercel.app/"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[24em] max-[1028px]:w-[30em] h-[32em] max-[593px]:w-[42em]  max-[593px]:h-[35em]">
              <h3 className="text-[1.5em] font-[700] !pb-2 !m-0  text-slate-100">
                YouTube - clone
              </h3>
              <div className=" text-[1.2em] font-[500] !m-0 !p-0 ">
                <p className="text-slate-500 ">REACT + JS + TAILWIND</p>
                <i>no responsive</i>
              </div>
              <img
                className="h-[23em] rounded-md mt-[1em] "
                src={youtubeclone}
                alt="Youtube clone img"
              />
            </div>
          </PinContainer>

          {/* ShadCn clone */}
          <PinContainer
            title="https://shadcn-clone.uz"
            href="https://next-chnage-ui-color-7lhy.vercel.app/"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[24em] max-[1028px]:w-[30em] h-[32em] max-[593px]:w-[42em]  max-[593px]:h-[35em]">
              <h3 className="text-[1.5em] font-[700] !pb-2 !m-0  text-slate-100">
                Shadcn - clone
              </h3>
              <div className=" text-[1.2em] font-[500] !m-0 !p-0 ">
                <p className="text-slate-500 ">Next + TS + TAILWIND</p>
                <i>no responsive</i>
              </div>
              <img
                className="h-[23em] rounded-md mt-[1em] "
                src={shadcn}
                alt="Youtube clone img"
              />
            </div>
          </PinContainer>



    
          

        </div>

       


      </div>
    </section>
  );
});

export default Projects;
