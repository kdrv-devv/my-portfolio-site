import React from "react";
import jsskill from "../../../img/jsskill.png";
import tsskill from "../../../img/tsskill.png";
import htmlskill from "../../../img/htmlskill.png";
import reactimg from "../../../img/reactskill.png";
import cssskill from "../../../img/cssskill.png";
import redux from "../../../img/redux.png";
import nodejs from "../../../img/nodejs-original.png";
import nextjs from "../../../img/nextjs-original.png";

const Skills = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    return (
      <section
        ref={ref}
        {...props}
        className={`skills bg-[#161616] pb-[50px] ${props.className ?? ""}`}
      >
        <div className="container text-[10px] pt-[48px] flex flex-col gap-[70px] max-[379px]:text-[9px] max-[450px]:gap-[40px]">
          <h3 aria-label="Skills" className="text-[#70ff00] sanserif text-[5.9em] font-[700]">
            skills<span className="sanserif text-[#fff]">()</span>
          </h3>

          <div className="self-center skills-icon grid grid-cols-4 gap-[7em] max-[480px]:grid-cols-3 max-[379px]:grid-cols-2 items-center justify-center">
            <img src={jsskill} alt="JavaScript logo" />
            <img src={tsskill} alt="TypeScript logo" />
            <img src={htmlskill} alt="HTML logo" />
            <img src={cssskill} alt="CSS logo" />
            <img src={reactimg} alt="React logo" />
            <img src={redux} alt="Redux logo" />
            <img src={nodejs} alt="Node.js logo" />
            <img src={nextjs} alt="Next.js logo" />
          </div>
        </div>
      </section>
    );
  }
);

Skills.displayName = "Skills";

export default Skills;
