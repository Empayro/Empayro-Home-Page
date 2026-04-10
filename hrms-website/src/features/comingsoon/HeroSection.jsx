import { useEffect, useRef, useState } from "react";
import { MenuVideo } from "../../assets";
import { color } from "framer-motion";
import { useInView } from "../../hooks/useInView";

export default function HeroSection() {
  const sections = [
    {
      subtitle: "Overview",
      title: "Smart Payroll Dashboard",
      desc: "Get a complete overview of your workforce in one place.",
      color: "#0078D4",
      accent: "#DEEEFA",
      content:
        "Monitor attendance, payroll, and employee activity from a single dashboard designed for clarity and speed.",
      features: ["Real-time insights", "Custom widgets"],
      video: MenuVideo,
    },
    {
      subtitle: "Tracking",
      title: "Attendance Management",
      desc: "Track employee attendance in real-time effortlessly.",
      color: "#5CB400",
      accent: "#E5F3D3",
      content:
        "Eliminate manual errors with automated attendance tracking and real-time updates across teams.",
      features: ["Live tracking", "Geo tagging"],
      video: MenuVideo,
    },
    {
      subtitle: "Automation",
      title: "AI Recruitment",
      desc: "Process salaries without errors in seconds.",
      color: "#F47B20",
      accent: "#FDE8D4",
      content:
        "Automate payroll calculations, deductions, and compliance without worrying about mistakes.",
      features: ["Auto calculations", "Tax handling"],
      video: MenuVideo,
    },
    {
      subtitle: "Management",
      title: "Employee Management",
      desc: "Approve or reject leaves with one click.",
      color: "#8A6A00",
      accent: "#FDF3C0",
      content:
        "Simplify leave requests and approvals with a streamlined workflow built for HR teams.",
      features: ["Quick approval", "Leave tracking"],
      video: MenuVideo,
    },
    {
      subtitle: "Insights",
      title: "Performance Analytics",
      desc: "Make better decisions with real-time analytics.",
      color: "#E8410A",
      accent: "#FCDDD4",

      content:
        "Generate powerful reports and gain insights to improve productivity and decision-making.",
      features: ["Custom reports", "Visual analytics"],
      video: MenuVideo,
    },
  ];

  const [active, setActive] = useState(0);
  const [isManualScrolling, setIsManualScrolling] = useState(false);
  const refs = useRef([]);

  const [fadeRef, fadeVisible] = useInView();

  // ✅ Scroll Detection (Smooth + Stable)
  useEffect(() => {
    const handleScroll = () => {
      if (isManualScrolling) return;

      let newActive = active;

      refs.current.forEach((ref, index) => {
        if (!ref) return;

        const rect = ref.getBoundingClientRect();

        if (
          rect.top <= window.innerHeight * 0.35 &&
          rect.bottom >= window.innerHeight * 0.35
        ) {
          newActive = index;
        }
      });

      if (newActive !== active) {
        setActive(newActive);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [active, isManualScrolling]);

  // ✅ Tab Click Scroll
  const handleTabClick = (index) => {
    setActive(index); // 🔥 INSTANT UI UPDATE
    setIsManualScrolling(true);

    refs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    setTimeout(() => {
      setIsManualScrolling(false);
    }, 700);
  };

  return (
    <section className="bg-white text-black py-16 md:py-24">
      {/* Title */}
      <div
        ref={fadeRef}
        className={`fade-up ${
          fadeVisible ? "show text-center mb-8 md:mb-12 px-4" : ""
        }`}
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Comprehensive HRMS Solution <br />
          <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            to Empower your workforce
          </span>
        </h1>
        <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg">
          Our HRMS platform streamlines your HR processes, boost productivity.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-10 px-4 sm:px-6">
        {/* LEFT - Tabs */}
        <div className="w-1/4 hidden md:block border-r pr-4 lg:pr-6">
          <div className="sticky top-32 space-y-4">
            <div className="text-start mb-12">
              <h1 className="text-4xl md:text-4xl font-bold  bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                HRMS Solution <br />
                <span className=" text-[34px] text-gray-900 leading-tight">
                  to Empower your workforce
                </span>
              </h1>
            </div>

            {sections.map((item, index) => (
              <div
                key={index}
                onClick={() => handleTabClick(index)}
                className={`relative cursor-pointer overflow-hidden p-4 rounded-xl border transition ${
                  active === index
                    ? "bg-blue-50 border-blue-400"
                    : "hover:bg-gray-100"
                }`}
              >
                {/* Active Indicator */}
                <div
                  className={`absolute left-0 top-0 h-full w-1 bg-blue-600 rounded transition ${
                    active === index ? "opacity-100" : "opacity-0"
                  }`}
                />

                <p
                  className={`ml-2 font-medium ${
                    active === index ? "text-blue-600" : "text-gray-500"
                  }`}
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT - Content */}
        <div className="w-full md:w-3/4">
          {sections.map((item, index) => (
            <div
              key={index}
              ref={(el) => (refs.current[index] = el)}
              className="grid grid-cols-1 md:grid-cols-2 items-center py-12 md:py-20 min-h-[auto] md:min-h-[80vh] border-b border-gray-200"
            >
              {/* TEXT */}
              <div className="p-4 sm:p-6 text-center md:text-left">
                <p
                  className="text-sm font-semibold uppercase"
                  style={{
                    color: item.color,
                  }}
                >
                  {item.subtitle}
                </p>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
                  {item.title}
                </h3>

                <p className="text-gray-500 mt-4">{item.desc}</p>
                <p className="text-gray-400 mt-3 text-sm">{item.content}</p>

                {/* Features */}
                <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {item.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center gap-3 px-4 py-3 rounded-lg border border-blue-100"
                      style={{
                        border: item.accent,
                      }}
                    >
                      <div
                        className="w-6 h-6 flex items-center justify-center bg-blue-600 text-white border rounded-full text-xs p-2.5"
                        style={{
                          borderColor: item.color,
                          backgroundColor: item.accent,
                          color: item.color,
                        }}
                      >
                        ✓
                      </div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* VISUAL (Smooth Animation) */}
              <div className="relative h-[220px] sm:h-[280px] md:h-[350px] overflow-hidden mt-6 md:mt-0">
                <div
                  className={`transition-all duration-700 ease-out transform ${
                    active === index
                      ? "opacity-100 translate-x-0 blur-0"
                      : "opacity-0 translate-x-16 blur-sm"
                  }`}
                >
                  <video
                    key={active === index ? "active" : "inactive"}
                    src={item.video}
                    autoPlay={active === index}
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
