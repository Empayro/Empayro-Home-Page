import { Link } from "react-router-dom";
import { MenuVideo } from "@/assets";
import { useEffect, useRef, useState } from "react";
import { ComingLogo } from "@/assets";

import { FiMenu, FiX } from "react-icons/fi";
import { FaHeadset, FaPhone, FaUser } from "react-icons/fa6";
import { FcAssistant, FcVoicePresentation } from "react-icons/fc";
import { logo } from "../../assets";

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

  const [showHeader, setShowHeader] = useState(true);
const lastScrollY = useRef(0);


const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // ✅ Background toggle
    setScrolled(currentScrollY > 20);

    // ✅ Always show at top
    if (currentScrollY < 10) {
      setShowHeader(true);
      lastScrollY.current = currentScrollY;
      return;
    }

    // ✅ Prevent jitter (threshold)
    if (Math.abs(currentScrollY - lastScrollY.current) < 10) return;

    if (currentScrollY > lastScrollY.current) {
      // 🔽 scrolling DOWN
      setShowHeader(false);
    } else {
      // 🔼 scrolling UP
      setShowHeader(true);
    }

    lastScrollY.current = currentScrollY;
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    // <div className=" fixed z-50 bg-transparent w-full md:w-[200px] h-auto md:h-screen top-0 left-0">
    <div
  className={`
    sticky top-0 lg:fixed
    z-50 bg-transparent 
    w-full lg:w-[200px] 
    h-auto lg:h-screen 
    transition-transform duration-300 ease-in-out

    ${showHeader ? "translate-y-0" : "-translate-y-full"} 
    lg:translate-y-0
  `}
>
      {/* INNER CONTAINER */}
      {/* <nav className=" flex md:flex-col justify-between items-center mx-auto px-4 md:px-6 py-4 md:py-10 h-auto md:h-screen"> */}
        <nav className={`
  flex lg:flex-col justify-between items-start 
  px-4 lg:px-6 py-4 lg:py-10 
  h-auto lg:h-screen
  transition-all duration-300

  ${scrolled ? "bg-white shadow-md" : "bg-white"}
  lg:bg-transparent lg:shadow-none
`}>
        {/* LOGO */}
        <Link to="/" className="flex  items-center gap-2">
          <img
            src={logo}
            alt="Logo"
            className="h-16 w-full"
          />
        </Link>

        {/* BARS ICON */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {isMenuOpen ? (
            <FiX size={24} className="text-black cursor-pointer" />
          ) : (
            <FiMenu size={24} className="text-black cursor-pointer" />
          )}
        </button>

        <div className="hidden lg:block">
          <a href="mailto:support@empayro.com">
            <FcVoicePresentation size={40} />
          </a>
        </div>
      </nav>

      {/* FULL SCREEN MENU OVERLAY */}
      <div
        className={` fixed top-0  left-[80px] h-screen w-[calc(100vw-80px)] bg-white z-30 transition-all duration-500
        ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"} `}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
        >
          <FiX size={24} className="text-slate-600" />
        </button>

        {/* Menu with left video + right item list */}
        <div className="w-full h-full  grid grid-cols-1 items-center md:grid-cols-2">
          <div className="h-full bg-white flex flex-col items-center md:items-start justify-center gap-6 px-6 md:px-16 py-10 md:py-16
">
            {menus.map((menu) => {
              return (
                <a
                  key={menu.name}
                  href={menu.path}
                  className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-700  hover:text-primary md:hover:text-5xl md:hover:font-bold transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {menu.name}
                </a>
              );
            })}
          </div>

          <div className="hidden md:flex h-full items-center justify-center pr-10 lg:pr-20">
            <video
              className="h-auto rounded-2xl"
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
