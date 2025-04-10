import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <> 
      <footer className="footer  flex flex-col gap-3">

        <div className="footer-top">
          <div className="container flex items-center justify-between ">
            <Link to={"/"}>
              <h1 className="text-[28px] max-[376px]:text-[16px] font-[700] text-[#f2f2f2]">
                KADIROV<span className="text-[#f7e018]">JS</span>
              </h1>
            </Link>

            <div className="footer-top-right text-[10px] gap-[40px] flex items-center">
                    <a className="text-[1.3em] font-[400] text-[#a7a7a7]" href="tel:+998979661575">+998 97 966 1575</a>
                    <a className="text-[1.3em] font-[400] text-[#a7a7a7]" href="mailto:ffeodalik@gmail.com">ffeodalik@gmail.com</a>

                    <div className="flex items-center gap-3">

                    <div className="social-icons flex items-center gap-[0.7em] text-[2em] text-[#a7a7a7]">
                            <button><FaGithub />
                            </button>
                            <button><FaTelegram />
                            </button>
                    </div>
                    </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom h-[400px]">
            <div className="container flex items-center justify-between">

            <div className="footer-bottom-left flex items-center gap-[20px] text-[15px] text-[#a7a7a7] font-[400]">
                <Link to={'/'}> <h5 className="text-[]">Home</h5> </Link>
                <Link to={'/'}> <h5 className="text-[]">About me</h5> </Link>
                <Link to={'/'}> <h5 className="text-[]">Projects</h5> </Link>
                <Link to={'/'}> <h5 className="text-[]">Skills</h5> </Link>
            </div>
            <p>All right reserved 2025</p>
            </div>
        </div>



      </footer>
    </>
  );
};

export default Footer;
