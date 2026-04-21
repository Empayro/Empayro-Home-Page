import { Link } from "react-router-dom";
import { MenuVideo } from "@/assets";
import { useEffect, useRef, useState } from "react";
import { ComingLogo } from "@/assets";

import { FiSun, FiMoon } from "react-icons/fi";
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
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 20);

      // 💻 Desktop behavior
      if (!isMobile) {
        if (currentScrollY > 10) {
          setShowHeader(false); // always hide after scroll
        } else {
          setShowHeader(true); // only show at top
        }
        return;
      }

      // 📱 Mobile behavior
      if (currentScrollY < 10) {
        setShowHeader(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (Math.abs(currentScrollY - lastScrollY.current) < 10) return;

      if (currentScrollY > lastScrollY.current) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <>
      <div
        className={`z-50 w-full h-auto transition-all duration-300 ease-in-out fixed top-0
    ${!showHeader ? "-translate-y-full" : "translate-y-0"}
    ${
      isMobile
        ? scrolled
          ? "bg-white shadow-sm"
          : "bg-transparent"
        : "bg-transparent"
    }
  `}
      >
        <nav
          className={`
                      max-w-350 mx-auto flex justify-between items-center lg:px-6 lg:py-5 py-2 px-4 h-auto transition-all duration-300 
                      ${scrolled ? "border-none" : "border-b border-b-[#6161615e]"}
  `}
        >
          {/* LOGO */}
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="lg:w-75 lg:h-auto w-50 h-auto"
            />
          </Link>

          <div className="flex items-center justify-between gap-x-4">
            <div className="hidden lg:block">
              <a href="mailto:support@empayro.com">
                <FcVoicePresentation size={40} />
              </a>
            </div>

            <div
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="w-10 h-10 flex items-center justify-center rounded-full cursor-pointer 
             bg-secondary dark:bg-white/10 hover:scale-110 transition-all duration-300 "
            >
              <div className="transition-all duration-300 rotate-0 dark:rotate-180">
                {theme === "light" ? (
                  <FiSun className="text-black-500 text-lg" />
                ) : (
                  <FiMoon className="text-blue-400 text-lg" />
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavbarLanding;
