import codeimg from '../../../img/code.svg'
import qavs from '../../../img/qavs.svg'
import React from "react"
const Aboutme = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
  return (
    <section   ref={ref}
    {...props}  className="aboutme pt-[167px] max-[560px]:pt-[100px] max-[360px]:pt-[60px]">
        <div className="container flex items-center justify-between max-[774px]:flex-col  max-[774px]:gap-[20px] pb-[50px]">        

                <div className="aboutme-left  text-[10px] flex flex-col gap-[30px]  max-[1029px]:gap-[20px] w-[49%] max-[1270px]:text-[8px] max-[1133px]:text-[7px] max-[1029px]:text-[6px]  max-[858px]:text-[5px] max-[774px]:w-full  max-[774px]:items-center  max-[774px]:text-[7px]  max-[459px]:text-[5.8px] max-[470px]:gap-[10px]">
                    <h3 className="text-[#70ff00] text-[4.9em] sanserif font-[700] "> aboutMe<span className="sanserif text-[#fff]">( )</span> </h3>
                    <p className="text-[1.8em] text-[#f2f2f2] font-[400]  max-[774px]:text-center" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer velit turpis, finibus eu condimentum ut, posuere at ipsum. Maecenas vel consequat mauris. Quisque sodales ipsum aliquet aliquam placerat. Proin varius condimentum sapien. Mauris quis elit nibh. Morbi ut facilisis nisl. Duis et leo ut odio rhoncus porta a a dui. Nullam arcu nibh, bibendum in enim sed, ullamcorper feugiat nunc. </p>
                </div>

                <div className="aboutme-right   items-end flex flex-col gap-[9px] text-[10px] w-[45%] max-[1270px]:text-[8px]  max-[1133px]:text-[7px] max-[1029px]:text-[6px] max-[858px]:text-[5px]  max-[774px]:w-full" >
                    <div className="right-item1 p-[3em]  rounded-[6px] flex items-center justify-between w-[90%] h-[13.7em] bg-[#4f4f4f]  max-[774px]:w-full ">
                            <div className="flex flex-col gap-[1.5em]">
                                    <h5 className="text-[3.3em] font-[700] text-[#fff]">Frontend Developer</h5>
                                  <a href="https://github.com/kdrv-devv"><h6 className="underline text-[2.5em] font-[400] text-[#6cee07]">Projects</h6></a>  
                            </div>
                            <img src={codeimg} alt="code img" />
                    </div>
                 
                 
                    <div className="right-item2 p-[3em]  rounded-[6px] flex items-center justify-between w-[90%] h-[13.7em] bg-[#4f4f4f]  max-[774px]:w-full ">
                            <div className="flex flex-col gap-[1.5em]">
                                    <h5 className="text-[3.3em] font-[700] text-[#fff]">Teacher</h5>
                                <a href="https://t.me/sarvarbek_qodirovv" target='_blank'> <h6 className="underline text-[2.5em] font-[400] text-[#6cee07]">Hire me!</h6></a>
                                   
                            </div>
                            <img src={qavs} alt="code img" />
                    </div>
                 
                </div>

        </div>  
    </section>
  )
}
)

export default Aboutme