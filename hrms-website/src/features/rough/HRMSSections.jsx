import React from "react";
import { FaBolt, FaShieldAlt, FaUsers, FaCheckCircle } from "react-icons/fa";

const benefits = [
  {
    title: "Save Time on HR Tasks",
    desc: "Automate repetitive workflows and reduce manual effort.",
    icon: <FaBolt />,
    color: "from-[#0078D4] to-blue-400",
  },
  {
    title: "Reduce Manual Errors",
    desc: "Accurate automation eliminates human mistakes.",
    icon: <FaCheckCircle />,
    color: "from-[#5CB400] to-green-300",
  },
  {
    title: "Improve Employee Experience",
    desc: "Empower employees with self-service tools.",
    icon: <FaUsers />,
    color: "from-[#F47B20] to-orange-300",
  },
  {
    title: "Compliance & Accuracy",
    desc: "Stay compliant with real-time tracking & reports.",
    icon: <FaShieldAlt />,
    color: "from-[#E8410A] to-red-300",
  },
];

const HRMSSections = () => {
  return (
    <div className="w-full max-w-300 m-auto overflow-hidden">

      {/* 🔹 BENEFITS (MODERN UI) */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-[#DEEEFA] to-white">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0078D4] mb-4">
            Powerful Benefits That Drive Results
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Designed to simplify HR operations while enhancing productivity and compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-br hover:scale-105 transition duration-300"
            >
              <div className="bg-white rounded-2xl p-6 h-full shadow-md group-hover:shadow-xl transition">

                {/* Icon */}
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-xl text-white text-xl mb-4 bg-gradient-to-br ${item.color}`}
                >
                  {item.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {item.desc}
                </p>

                {/* Hover Line */}
                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#0078D4] group-hover:w-full transition-all duration-300 rounded-b-xl"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 PRODUCT DEMO (PREMIUM UI) */}
      <section className="py-20 bg-white">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT TEXT */}
          <div>
            <h2 className="text-4xl font-bold text-[#0078D4] mb-6 leading-tight">
              Experience HRMS <br /> Like Never Before
            </h2>

            <p className="text-gray-600 mb-8">
              Explore a powerful dashboard designed to give you full control over
              your workforce with real-time insights and seamless workflows.
            </p>

            <div className="flex gap-4">
              <button className="px-6 py-3 bg-[#0078D4] text-white rounded-xl shadow-lg hover:scale-105 transition">
                Live Demo
              </button>

              <button className="px-6 py-3 border border-[#0078D4] text-[#0078D4] rounded-xl hover:bg-[#DEEEFA] transition">
                View Features
              </button>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative group">

            {/* Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-cyan-300 blur-2xl opacity-20 group-hover:opacity-40 transition"></div>

            {/* Main Card */}
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
              
              <img
                src="https://s3-alpha.figma.com/hub/file/6144454990/4039c41f-75a7-4160-8039-485241ad5ea0-cover.png"
                alt="Dashboard"
                className="w-full h-full object-cover"
              />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full text-[#0078D4] font-semibold shadow-lg hover:scale-110 transition">
                  ▶ Watch Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FLOATING MINI PREVIEWS */}
        <div className="mt-16 flex justify-center gap-6 flex-wrap">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="w-48 h-28 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition"
            >
              <img
                src="https://s3-alpha.figma.com/hub/file/6144454990/4039c41f-75a7-4160-8039-485241ad5ea0-cover.png"
                alt="preview"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default HRMSSections;