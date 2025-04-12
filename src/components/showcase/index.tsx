import React from "react";
import reactimg from "../../img/react-img.png";
import typescript from "../../img/type-scriptimg.png";
import jslogo from "../../img/jslogo.webp";
import leftdot from "../../img/showcase-left-dot.svg";
import rightdot from "../../img/showcase-right-dot.svg";
import rightlittledot from "../../img/showcase-right-little-dot.svg";
import meimg from "../../img/my-img.jpg";
import BlurryBlob from "../ui/blurry-blob";

const Showcase = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref)  => {
    return (
      <section
        ref={ref}
        {...props}
        className={`showcase pt-[60px] max-[774px]:pt-[40px] ${props.className ?? ""}`}
      >
        <div className="container relative flex items-center justify-between max-[774px]:flex-col max-[774px]:gap-[30px] max-[348px]:gap-[20px]">
          {/* Left Side */}
          <div className="showcase-left max-[774px]:order-2 flex flex-col gap-[20px] text-[10px] w-[50%] max-[1270px]:text-[7px] max-[1031px]:text-[5px] max-[774px]:w-full max-[774px]:items-center max-[774px]:gap-0 max-[563px]:text-[4px] max-[448px]:text-[3.1px] max-[348px]:text-[2.9px]">
            <h5 aria-label="hello i'm" className="text-[3.9em] font-[700] text-[#e0e0e0] ">Hello, I am</h5>
            <h2 className="text-[7.8em] w-[100%] z-10  max-[774px]:w-auto font-[700]   inline-flex animate-shine bg-[linear-gradient(110deg,#70ff00,45%,#2b5c02,55%,#70ff00)] bg-[length:200%_100%] text-transparent bg-clip-text">
              {"< Qodirov Sarvarbek />"}
            </h2>
            <h3 aria-label="Frontend developer" className="text-[5.7em] text-[#e0e0e0] font-[700] max-[774px]:text-center  ">
              Frontend Developer
            </h3>
          </div>

          {/* Right Side */}
          <div className="showcase-right   max-[774px]:order-1 w-[40%] flex justify-end text-[10px] max-[1270px]:text-[7px] max-[1031px]:text-[5px] max-[774px]:text-[8px] max-[774px]:w-full max-[774px]:justify-center max-[563px]:text-[6px] max-[348px]:text-[5.4px] relative">
            {/* Positioned Dots */}
            <img
              className="absolute left-[0.2em] top-[4em]"
              src={leftdot}
              alt="kadirov js portfolio"
            />
            <img
              className="absolute right-0 top-[-3em]"
              src={rightdot}
              alt="Qodirov Sarvarbek"
            />
            <img
              className="absolute right-[-3em] bottom-[9em]"
              src={rightlittledot}
              alt="Qodirov Sarvarbek Portfolio"
            />

            {/* Circle with Technologies */}
            <div className="circle z-50 relative w-[45.9em] h-[45.8em] flex items-center justify-center bg-[#2d2d2d] rounded-full">
              <div className="w-[13em] absolute right-[0.2em] top-[3em] h-[13em] flex items-center justify-center bg-[#333] rounded-full">
                <img className="w-[60%] h-[60%] me" src={jslogo} alt="JavaScript logo" />
              </div>
              <img
                className="absolute left-[1em] bottom-[4em] w-[15em] h-[15em] me rotate-infinite "
                src={reactimg}
                alt="React logo"
              />
              <img
                className="absolute right-[0.7em] bottom-[7.2em] w-[13em] h-[13em] me"
                src={typescript}
                alt="TypeScript logo"
              />
              <img
                className="w-[40em] rounded-full h-[40em] !select-none me"
                src={meimg}
                alt="Qodirov Sarvarbek rasmi"
              />
            </div>
      
      
          <BlurryBlob  className={"rounded-xl !z-0 opacity-50 top-[100px]  right-[40px]"}  firstBlobColor={"bg-[#333]"} secondBlobColor={"bg-[#333]"} />
      
      
          </div>


        </div>
      </section>
    );
  }
);

Showcase.displayName = "Showcase";

export default Showcase;
