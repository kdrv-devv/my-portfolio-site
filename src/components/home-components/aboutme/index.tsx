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
                    <p className="text-[1.8em] text-[#f2f2f2] font-[400]  max-[774px]:text-center font-sans" >My name is Sarvarbek Qodirov,I am a Frontend Developer.
I am interested in creating websites. I enjoy working with ReactJS and always try to make websites as user-friendly as possible. Currently, I’m focused on improving myself and learning new technologies.

I’m also interested in teaching Frontend development to others. In the future, I hope to become a teacher and help young developers grow.

I want the websites I create to be simple, beautiful, and easy for users to navigate. </p>
                </div>

                <div className="aboutme-right   items-end flex flex-col gap-[9px] text-[10px] w-[45%] max-[1270px]:text-[8px]  max-[1133px]:text-[7px] max-[1029px]:text-[6px] max-[858px]:text-[5px]  max-[774px]:w-full" >
                    <div className="right-item1 p-[3em]  rounded-[6px] flex items-center justify-between w-[90%] h-[13.7em] bg-[#4f4f4f]  max-[774px]:w-full ">
                            <div className="flex flex-col gap-[1.5em]">
                                    <h5 aria-label='Frontend-developer' className="text-[3.3em] font-[700] text-[#fff]">Frontend Developer</h5>
                                  <a href="https://github.com/kdrv-devv"><h6 className="underline text-[2.5em] font-[400] text-[#6cee07]">Projects</h6></a>  
                            </div>
                            <img src={codeimg} alt="code img" />
                    </div>
                 
                 
                    <div className="right-item2 p-[3em]  rounded-[6px] flex items-center justify-between w-[90%] h-[13.7em] bg-[#4f4f4f]  max-[774px]:w-full ">
                            <div className="flex flex-col gap-[1.5em]">
                                    <h5 aria-label='Teacher' className="text-[3.3em] font-[700] text-[#fff]">Teacher</h5>
                                <a href="https://t.me/sarvarbek_qodirovv" target='_blank'> <h6 aria-label='hire me' className="underline text-[2.5em] font-[400] text-[#6cee07]">Hire me!</h6></a>
                                   
                            </div>
                            <img src={qavs} alt="code img"  />
                    </div>
                 
                </div>

        </div>  
    </section>
  )
}
)

export default Aboutme