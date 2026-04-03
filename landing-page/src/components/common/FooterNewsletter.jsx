import { FooterVideo } from "../../assets";
import { IoIosArrowForward } from "react-icons/io";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import Button from "../ui/Button";


function FooterNewsletter() {
    return(
        <>
           {/* Footer NewsLetter */}
                  <div className="flex items-center justify-center h-[80vh] w-full bg-[#04356A] bg-black text-white sticky bottom-0 left-0 px-100 gap-20 border-none rounded-t-[80px]">
                    <div className="flex flex-col gap-5 w-[50%] overflow-hidden">
                      <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full max-w-full object-cover"
                src={FooterVideo}
              ></video>
                    </div>
        
                    <div className="flex flex-col gap-5 w-[50%] leading-tight ">
                      <h3 className="text-[34px] font-semibold">
                        The Ultimate Solution To All Your Organizational and HR Needs
                      </h3>
                      <div className="flex items-center gap-[15px] text-[25px]">
                        <a href="#">
                          <FaLinkedin />
                        </a>
                        <a href="#">
                          <FaInstagram />
                        </a>
                        <a href="#">
                          <FaTwitter />
                        </a>
                      </div>
                      {/* Subscribe */}
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <input
                          className="px-[24px] py-[12px] rounded-[8px] border-1 border-white text-white outline-none w-[43%]"
                          type="email"
                          placeholder="Email Address..."
                        />
                        {/* <button className="px-[18px] py-[12px] rounded-[99px] border-1 bg-white text-black outline-none w-[48%] flex items-center justify-center gap-2.5 cursor-pointer hover:bg-primary transition-colors duration-300">
                          REQUEST A FREE DEMO <IoIosArrowForward />
                        </button> */}
                        <Button>REQUEST A FREE DEMO</Button>
                      </div>
                    </div>
                  </div>
                  </>
    )
}

export default FooterNewsletter;