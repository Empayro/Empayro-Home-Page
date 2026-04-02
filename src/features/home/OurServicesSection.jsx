import React from "react";
import {
  FaUsers,
  FaGraduationCap,
  FaCalendarAlt,
  FaChartBar,
  FaHandHoldingUsd,
  FaChartPie,
} from "react-icons/fa";
import Button from "../../components/ui/Button";

// Service data
const services = [
  {
    id: 1,
    title: "Employee Management",
    description: "Manage employee records, roles, and information.",
    icon: <FaUsers className="text-[#4A90E2] w-10 h-10" />,
  },
  {
    id: 2,
    title: "Attendance & Leave Management",
    description: "Automate payroll processing and track attendance.",
    icon: <FaCalendarAlt className="text-[#33B27D] w-10 h-10" />,
  },
  {
    id: 3,
    title: "Payroll Management",
    description: "Handle leave requests and time-off policies.",
    icon: <FaHandHoldingUsd className="text-[#8E6FFF] w-10 h-10" />,
  },
  {
    id: 4,
    title: "Performance Management",
    description: "Conduct evaluations and manage appraisals.",
    icon: <FaChartBar className="text-[#FF8C42] w-10 h-10" />,
  },
  {
    id: 5,
    title: "Training & Development",
    description: "Conduct evaluations and manage appraisals.",
    icon: <FaGraduationCap className="text-[#E04F5F] w-10 h-10" />,
  },
  {
    id: 6,
    title: "HR Analytics & Reports",
    description: "Conduct evaluations and manage appraisals.",
    icon: <FaChartPie className="text-[#33A2A2] w-10 h-10" />,
  },
];

// Define a shadow color for each service card
const shadowColors = [
  "rgba(74,144,226,0.3)", // Blue
  "rgba(51,178,125,0.3)", // Green
  "rgba(142,111,255,0.3)", // Purple
  "rgba(255,140,66,0.3)", // Orange
  "rgba(224,79,95,0.3)", // Red
  "rgba(51,162,162,0.3)", // Teal
];

const iconBg = [
  "#D7E4FF",
  "#DFF6ED",
  "#E6E0FF",
  "#FFF1E0",
  "#FFE6E6",
  "#E0F7F7",
];

const textColors = [
  "#4A90E2",
  "#33B27D",
  "#8E6FFF",
  "#FF8C42",
  "#E04F5F",
  "#33A2A2",
];

const OurServicesSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-16 max-w-350 m-auto">
      <div className="text-center mb-12">
        <div className="text-center mb-4">
          <span className="bg-[#0078D4]/10 text-[#0078D4] px-5 py-2 rounded-full text-sm font-medium">
            ● Our Services
          </span>
        </div>

        <h1 className="text-4xl md:text-4xl font-bold text-gray-900 leading-tight">
          Comprehensive HRMS Solution <br />
          <span className="bg-gradient-to-r from-[#0078D4] to-[#00A4EF] text-transparent bg-clip-text">
            to Empower your workforce
          </span>
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          Our HRMS platform streamlines your HR processes, boost productivity,<br /> and helps you manage your people more effectively.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`flex flex-col items-start p-6 border rounded-lg transition`}
            style={{
              boxShadow: `-5px 5px 0px ${shadowColors[index]}`, // dynamic shadow
            }}
          >
            <div
              className="mb-4 p-4 rounded-lg"
              style={{ backgroundColor: iconBg[index] }}
            >
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
            <p
              className="mt-4 cursor-pointer"
              style={{ color: textColors[index] }}
            >
              Read More →
            </p>
          </div>
        ))}
      </div>

      <div className="text-center flex items-center justify-between py-8 px-10 bg-[#DEEEFA] rounded-2xl w-275 m-auto">
        
        <div className=" text-start flex items-center justify-center gap-x-4">
          <div className="p-4 rounded-full text-white bg-[#0078D4]">
          <FaUsers size={50} />
        </div>
        <div>
          <h3 className="font-semibold mb-2 text-2xl">Ready to Transform Your HR Processes?</h3>
          <p className="text-grey-600">Discover how our HRMS platform can help you build a more <br /> productive and engaged workforce.</p>
        </div>
        </div>
        {/* <button className="bg-blue-700 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition">
          Get Started Today
        </button> */}
        <Button>Get Started Today</Button>
      </div>
    </section>
  );
};

export default OurServicesSection;
