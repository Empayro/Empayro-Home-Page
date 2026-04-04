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
      <footer className="text-black max-w-full">
        <div className=" w-full">
          <div className="rounded-b-[80px] border-none z-10 backface-hidden bg-[#f2f1f3] overflow-hidden relative">
            <div className="py-[80px] max-w-350 mx-auto flex flex-wrap justify-between items-start border-b gap-x-7">
              {/* LINKS */}
              <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <div className="flex flex-col justify-center gap-y-2 text-[14px]">
                  <Link to="/pricing" className="hover:text-primary">
                    Home
                  </Link>
                  <Link to="/pricing" className="hover:text-primary">
                    Why Empayro
                  </Link>
                  <Link to="/pricing" className="hover:text-primary">
                    HR Toolkit
                  </Link>
                  <Link to="/pricing" className="hover:text-primary">
                    Blogs
                  </Link>
                  <Link to="/pricing" className="hover:text-primary">
                    Privacy Policy
                  </Link>
                  <Link to="/pricing" className="hover:text-primary">
                    Security
                  </Link>
                  <Link to="/pricing" className="hover:text-primary">
                    Terms & Condition
                  </Link>
                </div>
              </div>

              {/* LINKS */}
              <div>
                <h3 className="font-semibold mb-4">Our Products</h3>
                <div className="flex flex-col items-start justify-center gap-y-2 text-[14px]">
                  <Link to="/pricing" className="hover:text-primary">
                    HRMS
                  </Link>
                  <Link to="/pricing" className="hover:text-primary">
                    Payroll
                  </Link>
                  <Link to="/pricing" className="hover:text-primary">
                    PMS
                  </Link>
                  <Link to="/pricing" className="hover:text-primary">
                    ATS
                  </Link>
                  <Link to="/pricing" className="hover:text-primary">
                    Chat
                  </Link>
                  <Link to="/pricing" className="hover:text-primary">
                    Survey
                  </Link>
                  <Link to="/pricing" className="hover:text-primary">
                    Assets
                  </Link>
                </div>
              </div>

              {/* LINKS */}
              <div>
                <h3 className="font-semibold mb-4">Compare with</h3>
                <div className="flex flex-col items-start justify-center gap-y-2 text-[14px]">
                  <Link to="/pricing" className="hover:text-primary">
                    Keka
                  </Link>
                  <Link to="/pricing" className="hover:text-primary">
                    Workable
                  </Link>
                  <Link to="/pricing" className="hover:text-primary">
                    Kredily
                  </Link>
                  <Link to="/pricing" className="hover:text-primary">
                    GreytHR
                  </Link>
                  <Link to="/pricing" className="hover:text-primary">
                    Global HR
                  </Link>
                  <Link to="/pricing" className="hover:text-primary">
                    Smartoffice
                  </Link>
                  <Link to="/pricing" className="hover:text-primary">
                    Superworks
                  </Link>
                </div>
              </div>

              {/* LINKS */}
              <div>
                <h3 className="font-semibold mb-4">Book Demo</h3>
                <div className="flex flex-col items-start justify-center gap-y-2 text-[14px]">
                  <Link to="/pricing" className="hover:text-primary">
                    All In One
                  </Link>
                  <Link to="/pricing" className="hover:text-primary">
                    HRMS
                  </Link>
                  <Link to="/pricing" className="hover:text-primary">
                    Project
                  </Link>
                  <Link to="/pricing" className="hover:text-primary">
                    Payroll
                  </Link>
                  <Link to="/pricing" className="hover:text-primary">
                    ATS
                  </Link>
                  <Link to="/pricing" className="hover:text-primary">
                    EMS
                  </Link>
                  <Link to="/pricing" className="hover:text-primary">
                    Performance
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <div className="flex flex-col items-start justify-center gap-y-2 text-[14px]">
                  <Link to="/pricing" className="hover:text-primary">
                    About Us
                  </Link>
                  <Link to="/pricing" className="hover:text-primary">
                    Contact Us
                  </Link>
                  <Link to="/pricing" className="hover:text-primary">
                    Blogs
                  </Link>
                  <Link to="/pricing" className="hover:text-primary">
                    Pricing
                  </Link>
                  <Link to="/pricing" className="hover:text-primary">
                    Testimonial
                  </Link>
                  <Link to="/pricing" className="hover:text-primary">
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
