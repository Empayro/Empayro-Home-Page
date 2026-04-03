import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { logo } from "@/assets";
import { Link } from "react-router-dom";
import { FooterVideo } from "../../assets";
import FooterNewsletter from "./FooterNewsletter";

function Footer() {
  return (
    <>
      <footer className="text-black mt-10 max-w-full">
        <div className=" w-full">
          <div className="rounded-b-[80px] border-none z-10 backface-hidden bg-[#f2f1f3] overflow-hidden relative">
            <div className="py-[80px] max-w-350 mx-auto flex flex-wrap justify-between items-start border-b gap-x-7">
              {/* LINKS */}
              <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <div className="flex flex-col justify-center gap-y-2 text-[14px]">
                  <Link to="/pricing" className="hover:text-[#0078D4]">
                    Home
                  </Link>
                  <Link to="/pricing" className="hover:text-[#0078D4]">
                    Why Empayro
                  </Link>
                  <Link to="/pricing" className="hover:text-[#0078D4]">
                    HR Toolkit
                  </Link>
                  <Link to="/pricing" className="hover:text-[#0078D4]">
                    Blogs
                  </Link>
                  <Link to="/pricing" className="hover:text-[#0078D4]">
                    Privacy Policy
                  </Link>
                  <Link to="/pricing" className="hover:text-[#0078D4]">
                    Security
                  </Link>
                  <Link to="/pricing" className="hover:text-[#0078D4]">
                    Terms & Condition
                  </Link>
                </div>
              </div>

              {/* LINKS */}
              <div>
                <h3 className="font-semibold mb-4">Our Products</h3>
                <div className="flex flex-col items-start justify-center gap-y-2 text-[14px]">
                  <Link to="/pricing" className="hover:text-[#0078D4]">
                    HRMS
                  </Link>
                  <Link to="/pricing" className="hover:text-[#0078D4]">
                    Payroll
                  </Link>
                  <Link to="/pricing" className="hover:text-[#0078D4]">
                    PMS
                  </Link>
                  <Link to="/pricing" className="hover:text-[#0078D4]">
                    ATS
                  </Link>
                  <Link to="/pricing" className="hover:text-[#0078D4]">
                    Chat
                  </Link>
                  <Link to="/pricing" className="hover:text-[#0078D4]">
                    Survey
                  </Link>
                  <Link to="/pricing" className="hover:text-[#0078D4]">
                    Assets
                  </Link>
                </div>
              </div>

              {/* LINKS */}
              <div>
                <h3 className="font-semibold mb-4">Compare with</h3>
                <div className="flex flex-col items-start justify-center gap-y-2 text-[14px]">
                  <Link to="/pricing" className="hover:text-[#0078D4]">
                    Keka
                  </Link>
                  <Link to="/pricing" className="hover:text-[#0078D4]">
                    Workable
                  </Link>
                  <Link to="/pricing" className="hover:text-[#0078D4]">
                    Kredily
                  </Link>
                  <Link to="/pricing" className="hover:text-[#0078D4]">
                    GreytHR
                  </Link>
                  <Link to="/pricing" className="hover:text-[#0078D4]">
                    Global HR
                  </Link>
                  <Link to="/pricing" className="hover:text-[#0078D4]">
                    Smartoffice
                  </Link>
                  <Link to="/pricing" className="hover:text-[#0078D4]">
                    Superworks
                  </Link>
                </div>
              </div>

              {/* LINKS */}
              <div>
                <h3 className="font-semibold mb-4">Book Demo</h3>
                <div className="flex flex-col items-start justify-center gap-y-2 text-[14px]">
                  <Link to="/pricing" className="hover:text-[#0078D4]">
                    All In One
                  </Link>
                  <Link to="/pricing" className="hover:text-[#0078D4]">
                    HRMS
                  </Link>
                  <Link to="/pricing" className="hover:text-[#0078D4]">
                    Project
                  </Link>
                  <Link to="/pricing" className="hover:text-[#0078D4]">
                    Payroll
                  </Link>
                  <Link to="/pricing" className="hover:text-[#0078D4]">
                    ATS
                  </Link>
                  <Link to="/pricing" className="hover:text-[#0078D4]">
                    EMS
                  </Link>
                  <Link to="/pricing" className="hover:text-[#0078D4]">
                    Performance
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <div className="flex flex-col items-start justify-center gap-y-2 text-[14px]">
                  <Link to="/pricing" className="hover:text-[#0078D4]">
                    About Us
                  </Link>
                  <Link to="/pricing" className="hover:text-[#0078D4]">
                    Contact Us
                  </Link>
                  <Link to="/pricing" className="hover:text-[#0078D4]">
                    Blogs
                  </Link>
                  <Link to="/pricing" className="hover:text-[#0078D4]">
                    Pricing
                  </Link>
                  <Link to="/pricing" className="hover:text-[#0078D4]">
                    Testimonial
                  </Link>
                  <Link to="/pricing" className="hover:text-[#0078D4]">
                    Career
                  </Link>
                </div>
              </div>
            </div>

            {/* Copy Right Section */}
            <div className="py-20 max-w-350 flex items-center justify-between m-auto ">
              <div className="">© 2026 Empayro . All rights reserved.</div>
              <div className=" flex items-center justify-between gap-4">
                <Link to="www.instagram.com">
                  <FaInstagram color="#E4405F" size={24} />
                </Link>
                <Link to="www.facebook.com">
                  <FaFacebook color="#1877F2" size={24} />
                </Link>
                <Link to="www.youtube.com">
                  <FaYoutube color="#FF0000" size={24} />
                </Link>
                <Link to="www.twitter.com">
                  <FaTwitter color="#1DA1F2" size={24} />
                </Link>
                <Link to="www.linkdin.com">
                  <FaLinkedin color="#0077B5" size={24} />
                </Link>
              </div>
            </div>
          </div>
          <FooterNewsletter />
        </div>
      </footer>
    </>
  );
}

export default Footer;
