import React from "react";
import jsskill from "../../../img/jsskill.png";
import tsskill from "../../../img/tsskill.png";
import htmlskill from "../../../img/htmlskill.png";
import reactimg from "../../../img/reactskill.png";
import cssskill from "../../../img/cssskill.png";
import redux from "../../../img/redux.png";
import nodejs from "../../../img/nodejs-original.png";
import nextjs from "../../../img/nextjs-original.png";
import GithubCardShiny from "../../ui/github-card-shiny";

const imgarr= [jsskill ,tsskill , htmlskill , cssskill , reactimg , redux , nodejs , nextjs] 

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
 
            {
              imgarr.map((img) =>  <GithubCardShiny img={img}/>)
            }
           


          </div>
        </div>
      </section>
    );
  }
);

Skills.displayName = "Skills";

export default Skills;
