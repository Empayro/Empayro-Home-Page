import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { logo } from "@/assets";
import Button from "../../components/ui/Button";

import {
  FiUser,
  FiCalendar,
  FiDollarSign,
  FiFolder,
  FiSettings,
  FiGrid,
  FiUserPlus,
  FiLock,
  FiFileText,
  FiClock,
  FiMessageSquare,
  FiChevronDown,
} from "react-icons/fi";

/* ---------------- MENU DATA ---------------- */
const menus = [
  {
    name: "Products",
    type: "mega",
    items: [
      {
        icon: FiUser,
        title: "Profile",
        description: "View & manage employee profile",
      },
      {
        icon: FiUser,
        title: "Profile",
        description: "View & manage employee profile",
      },
      {
        icon: FiCalendar,
        title: "Leave",
        description: "Apply or track leave requests",
      },
      {
        icon: FiCalendar,
        title: "Leave",
        description: "Apply or track leave requests",
      },
      {
        icon: FiClock,
        title: "Attendance",
        description: "Monitor daily attendance logs",
      },
      {
        icon: FiClock,
        title: "Attendance",
        description: "Monitor daily attendance logs",
      },
      {
        icon: FiDollarSign,
        title: "Payroll",
        description: "Salary slips & disbursements",
      },
      {
        icon: FiDollarSign,
        title: "Payroll",
        description: "Salary slips & disbursements",
      },
      {
        icon: FiFolder,
        title: "Documents",
        description: "Upload & manage your files",
      },
      {
        icon: FiFolder,
        title: "Documents",
        description: "Upload & manage your files",
      },
      {
        icon: FiSettings,
        title: "Settings",
        description: "Account & preferences",
      },
      {
        icon: FiSettings,
        title: "Settings",
        description: "Account & preferences",
      },
    ],
  },
  {
    name: "Solutions",
    type: "mega",
    items: [
      {
        icon: FiGrid,
        title: "Dashboard",
        description: "HR analytics & key metrics",
      },
      {
        icon: FiGrid,
        title: "Dashboard",
        description: "HR analytics & key metrics",
      },
      {
        icon: FiUserPlus,
        title: "Add Employee",
        description: "Onboard & register new staff",
      },
      {
        icon: FiUserPlus,
        title: "Add Employee",
        description: "Onboard & register new staff",
      },
      {
        icon: FiLock,
        title: "Permissions",
        description: "Role-based access control",
      },
      {
        icon: FiLock,
        title: "Permissions",
        description: "Role-based access control",
      },
      {
        icon: FiFileText,
        title: "Reports",
        description: "Generate & export HR reports",
      },
      {
        icon: FiFileText,
        title: "Reports",
        description: "Generate & export HR reports",
      },
      {
        icon: FiCalendar,
        title: "Calendar",
        description: "Events, holidays & schedules",
      },
      {
        icon: FiCalendar,
        title: "Calendar",
        description: "Events, holidays & schedules",
      },
      {
        icon: FiMessageSquare,
        title: "Messages",
        description: "Internal team communication",
      },
      {
        icon: FiMessageSquare,
        title: "Messages",
        description: "Internal team communication",
      },
    ],
  },
  {
    name: "Features",
    type: "link",
    path: "/features",
  },
  {
    name: "Pricing",
    type: "link",
    path: "/pricing",
  },
];

const getColumns = (items, rows = 3) => {
  const cols = Math.ceil(items.length / rows);
  const perCol = Math.ceil(items.length / cols);
  const columnData = [];
  for (let i = 0; i < items.length; i += perCol) {
    columnData.push(items.slice(i, i + perCol));
  }
  return columnData;
};

/* ---------------- COMPONENT ---------------- */
function Navbarm() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (name) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(name);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  };

  return (
    <div
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "top-4" : "top-0 bg-white shadow-sm"
      }`}
    >
      {/* INNER CONTAINER */}
      <nav
        className={`flex justify-between items-center transition-all duration-300 ${
          scrolled
            ? "max-w-350 mx-auto bg-white/10 backdrop-blur-md shadow-lg rounded-xl px-6 py-3"
            : "max-w-350 mx-auto px-6 py-4"
        }`}
      >
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-13 w-auto" />
        </Link>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-2">
          {menus.map((menu) => {
            /* ================= LINK (NO SUBMENU) ================= */
            if (menu.type === "link") {
              return (
                <Link
                  key={menu.name}
                  to={menu.path}
                  className="px-3 py-2 rounded-lg text-md font-medium text-slate-600 hover:text-[#0078D4] hover:bg-[#0078D4]/8 transition-all"
                >
                  {menu.name}
                </Link>
              );
            }

            /* ================= MEGA MENU ================= */
            return (
              <div
                key={menu.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(menu.name)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg font-medium ${
                    openMenu === menu.name
                      ? "bg-[#0078D4]/10 text-[#0078D4]"
                      : "text-slate-600 hover:text-[#0078D4]"
                  }`}
                >
                  {menu.name}
                  <FiChevronDown
                    size={14}
                    className={`transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      openMenu === menu.name
                        ? "rotate-180 text-[#0078D4] translate-y-px"
                        : "rotate-0 text-slate-400"
                    }`}
                  />
                </button>

                {/* ===== MEGA DROPDOWN ===== */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 ${
                    openMenu === menu.name
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="bg-white backdrop-blur-xl rounded-2xl shadow-xl p-5 w-225">
                    <div
                      className="grid gap-2"
                      style={{
                        gridTemplateColumns: `repeat(${getColumns(menu.items).length}, 1fr)`,
                      }}
                    >
                      {getColumns(menu.items).map((col, i) => (
                        <div key={i}>
                          {col.map((item, j) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={j}
                                to="/"
                                className="flex items-start gap-3 p-2 rounded-lg hover:bg-blue-50"
                              >
                                <Icon
                                  size={17}
                                  className="text-[#0078D4] mt-1"
                                />
                                <div>
                                  <p className="text-sm font-semibold">
                                    {item.title}
                                  </p>
                                  <p className="text-xs text-gray-400">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <Link to="/appointment">
          <Button>Book Demo</Button>
        </Link>
      </nav>
    </div>
  );
}

export default Navbarm;
