import circle from '../../../img//circle-companies.png'


const Companies = () => {
  return (
    <section className="companies bg-[#161616]">
        <div className="container pt-[35px] flex flex-col gap-[50px]">

            <h3 className="sanserif font-[700] text-[3.9em] text-[#70ff00] ">companies<span className="sanserif text-[#fff]">()</span></h3>

            <div className="main text-[10px] flex items-center justify-between">


            <div className="companiya-left">
            <h5>Salom</h5>
            </div>

            <div className='relative text-[10px] w-[200px] flex items-center justify-center'>
                <div  className="companiya-center h-[50em]  bg-[#70ff00] w-[10px]">

                </div>
                <img src={circle} className='absolute top-[3em] left-[8em] w-[4em] h-[4em]'  alt="" />
            </div>

            <div className="companiya-right">
            <h5>Salom</h5>

            </div>


            </div>


        </div>
    </section>
  )
}

export default Companies