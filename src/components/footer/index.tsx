import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <> 
      <footer className="footer  flex flex-col gap-3">

        <div className="footer-top ">
          <div className="container flex items-center justify-between  border-b border-[#252633] pb-[20px] max-[740px]:pb-[70px]  max-[428px]:flex-col max-[428px]:items-start max-[428px]:gap-[20px]">
            <Link to={"/"}>
              <h1 className="text-[28px] max-[376px]:text-[16px] font-[700] text-[#f2f2f2]">
                KADIROV<span className="text-[#f7e018]">JS</span>
              </h1>
            </Link>

            <div className="footer-top-right text-[10px] gap-[40px] flex items-center max-[736px]:text-[9px] max-[690px]:text-[7px] max-[580px]:flex-col max-[580px]:gap-[0px] max-[580px]:items-end max-[428px]:items-start max-[429px]:w-full max-[429px]:justify-between max-[429px]:flex-row">
                    <a className="text-[1.3em] font-[400] text-[#a7a7a7]" href="tel:+998979661575">+998 97 966 1575</a>

                    <div className="flex items-center gap-[2em] ">
                    <a className="text-[1.3em] font-[400] text-[#a7a7a7]" href="mailto:ffeodalik@gmail.com">ffeodalik@gmail.com</a>

                    <div className="social-icons flex items-center gap-[0.7em] text-[2em] text-[#a7a7a7]">
                              <a href="https://github.com/kdrv-devv" target="_blank">   <button><FaGithub />
                              </button></a>
                              
                            <a href="https://t.me/sarvarbek_qodirovv" target="_blank">
                            <button><FaTelegram />
                            </button>
                            </a>
                    </div>
                    </div>
            </div>
          </div>
        </div>

     



      </footer>
    </>
  );
};

export default Footer;
