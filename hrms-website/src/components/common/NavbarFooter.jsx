import { CiMail } from "react-icons/ci";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaUsers,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function NavbarFooter() {
  return (
    <>
      <footer className="text-black max-w-full">
        <div className="border-none z-10 bg-gradient-to-b from-[#f8fbff] to-[#e6f0ff]">
          {/* Copy Right Section */}
          <div className="py-10 max-w-350 flex items-center justify-between m-auto ">

            <div className="flex items-center justify-center gap-2">
              <CiMail size={25}/>
              <p><a href="mailto:support@empayro.com">support@empayro.com</a></p>
            </div>

            <div className="">© 2026 Empayro . All rights reserved.</div>

            <div className=" flex items-center justify-between gap-4">
              <Link to="www.instagram.com">
                <FaInstagram  size={24} />
              </Link>
              <Link to="www.facebook.com">
                <FaFacebookF  size={24} />
              </Link>
              <Link to="www.twitter.com">
                <FaXTwitter size={24} />
              </Link>
              <Link to="www.linkdin.com">
                <FaLinkedinIn  size={24} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default NavbarFooter;
