import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="text-black max-w-full">
          <div className="border-none z-10 bg-gradient-to-b from-[#f8fbff] to-[#e6f0ff]">
            

            {/* Copy Right Section */}
            <div className="py-10 max-w-350 flex items-center justify-between m-auto ">
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
      </footer>
    </>
  );
}

export default Footer;
