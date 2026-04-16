import { CiMail } from "react-icons/ci";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function NavbarFooter() {
  return (
    <footer className="text-black w-full">
      <div className="bg-gradient-to-b from-[#f8fbff] to-[#e6f0ff] dark:from-[#000] dark:to-[#000000] dark:text-gray-400">
        
        {/* Container */}
        <div className="py-8 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto dark:border-t-1
                        flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Email */}
          <div className="flex items-center gap-2 text-sm sm:text-base text-center md:text-left">
            <CiMail size={22} />
            <a href="mailto:support@empayro.com" className="hover:underline">
              support@empayro.com
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs sm:text-sm text-center">
            © 2026 Empayro. All rights reserved.
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram size={20} className="hover:scale-110 transition" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF size={20} className="hover:scale-110 transition" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <FaXTwitter size={20} className="hover:scale-110 transition" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedinIn size={20} className="hover:scale-110 transition" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default NavbarFooter;