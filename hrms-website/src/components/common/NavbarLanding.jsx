import { Link } from "react-router-dom";
import { MenuVideo } from "@/assets";
import { useState } from "react";
import { ComingLogo } from "@/assets";

import { FiMenu, FiX } from "react-icons/fi";
import { FaHeadset, FaPhone, FaUser } from "react-icons/fa6";
import { FcAssistant, FcVoicePresentation } from "react-icons/fc";

/* ---------------- MENU DATA ---------------- */
const menus = [
  {
    name: "Home",
    type: "link",
    path: "#home",
  },
  {
    name: "Services",
    type: "link",
    path: "#services",
  },
  {
    name: "Solution",
    type: "link",
    path: "#solution",
  },
  {
    name: "FAQs",
    type: "link",
    path: "#faqs",
  },
  {
    name: "Get in Touch",
    type: "link",
    path: "#getintouch",
  },
];

/* ---------------- COMPONENT ---------------- */
function NavbarLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed left-0 z-101 transition-all duration-300 max-w-31 h-screen top-0 bg-transparent backdrop-blur-lg">
      {/* INNER CONTAINER */}
      <nav className="flex flex-col justify-between items-center transition-all duration-300 h-screen mx-auto px-8 py-10">
        {/* LOGO */}
        <Link to="/" className="flex  items-center gap-2">
          <img src={ComingLogo} alt="Logo" className="h-20 w-20" />
        </Link>

        {/* BARS ICON */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {isMenuOpen ? (
            <FiX size={24} className="text-black" />
          ) : (
            <FiMenu size={24} className="text-black" />
          )}
        </button>

        <div>
          <a href="mailto:support@empayro.com">
            {/* <FaPhone size={25} /> */}
            <FcVoicePresentation size={40} />
          </a>
        </div>
      </nav>

      {/* FULL SCREEN MENU OVERLAY */}
      <div
        className={`fixed top-0 left-32 right-0 w-screen h-screen bg-white z-999 transition-all duration-500 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute bottom-6 left-6 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
        >
          {/* <FiX size={24} className="text-slate-600" /> */}
        </button>

        {/* Menu with left video + right item list */}
        <div className="w-full h-full grid grid-cols-2">
          <div className="h-full bg-white flex flex-col items-start justify-center gap-6 px-16 py-16">
            {menus.map((menu) => {
              return (
                <a
                  key={menu.name}
                  href={menu.path}
                  className="text-3xl font-semibold text-slate-700 hover:text-primary hover:text-5xl hover:font-bold transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {menu.name}
                </a>
              );
            })}
          </div>

          <div className="h-full flex items-center justify-center pr-50">
            <video
              className="w-[90%] h-auto rounded-2xl "
              src={MenuVideo}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default NavbarLanding;
