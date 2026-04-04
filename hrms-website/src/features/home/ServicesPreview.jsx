import { useState } from "react";
import { motion } from "framer-motion";

import {
  FaUsers,
  FaGraduationCap,
  FaCalendarAlt,
  FaChartBar,
  FaHandHoldingUsd,
  FaChartPie,
} from "react-icons/fa";
import Button from "../../components/ui/Button";

const services = [
  {
    id: 1,
    title: "Brand Strategy",
    description:
      "We craft narratives that transform brands into cultural landmarks. Deep research, bold positioning.",
    icon: <FaUsers className="w-10 h-10" />,
    accent: "#4A90E2",
    cardBg: "#FFF",
    border: "#000",
    shadow: "-5px 5px 0px rgba(74,144,226,0.3)",
    badge: "STRATEGY",
    tag: "01",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Interfaces that whisper elegance. Every pixel placed with intention, every interaction a revelation.",
    icon: <FaCalendarAlt className="w-10 h-10" />,
    accent: "#33B27D",
    cardBg: "#FFF",
    border: "#000",
    shadow: "rgba(51,178,125,0.3)",
    badge: "DESIGN",
    tag: "02",
  },
  {
    id: 3,
    title: "Web Development",
    description:
      "Blazing-fast digital experiences built with modern stacks. Performance is non-negotiable.",
    icon: <FaHandHoldingUsd className="w-10 h-10" />,
    accent: "#8E6FFF",
    cardBg: "#FFF",
    border: "#000",
    shadow: "rgba(142,111,255,0.3)",
    badge: "DEV",
    tag: "03",
  },
  {
    id: 4,
    title: "Motion & 3D",
    description:
      "Reality-bending animations and immersive 3D worlds. Make jaws drop on first scroll.",
    icon: <FaChartBar className="w-10 h-10" />,
    accent: "#FF8C42",
    cardBg: "#FFF",
    border: "#000",
    shadow: "rgba(255,140,66,0.3)",
    badge: "MOTION",
    tag: "04",
  },
  {
    id: 5,
    title: "AI Integration",
    description:
      "Future-proof your product with intelligent automation. We embed AI where it actually matters.",
    icon: <FaGraduationCap className="w-10 h-10" />,
    accent: "#E04F5F",
    cardBg: "#FFF",
    border: "#000",
    shadow: "rgba(224,79,95,0.3)",
    badge: "AI",
    tag: "05",
  },
  {
    id: 6,
    title: "Growth & Analytics",
    description:
      "Data-driven decisions that compound. We track what matters and optimize relentlessly.",
    icon: <FaChartPie className="w-10 h-10" />,
    accent: "#33A2A2",
    cardBg: "#FFF",
    border: "#000",
    shadow: "rgba(51,162,162,0.3)",
    badge: "GROWTH",
    tag: "06",
  },
];

const cardAnimOrigins = [
  { x: -100, y: 70, rotate: -7 },
  { x: 0, y: 110, rotate: 0, scale: 0.82 },
  { x: 100, y: 70, rotate: 7 },
  { x: -100, y: 70, rotate: -7 },
  { x: 0, y: 110, rotate: 0, scale: 0.82 },
  { x: 100, y: 70, rotate: 7 },
];

function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false);
  const origin = cardAnimOrigins[index];
  const row = Math.floor(index / 3);
  const col = index % 3;
  const delay = col * 0.13 + row * 0.06;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: origin.x,
        y: origin.y,
        rotate: origin.rotate || 0,
        scale: origin.scale || 1,
      }}
      whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{
        y: -10,
        scale: 1.03,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      style={{
        background: service.cardBg,
        border: `1px solid ${service.border}`,
        borderRadius: 8,
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow orb */}
      <motion.div
        animate={{ opacity: hovered ? 0.35 : 0.15 }}
        transition={{ duration: 0.4 }}
        style={{
          position: "absolute",
          top: -40,
          right: -40,
          borderRadius: "50%",
          background: service.accent,
          pointerEvents: "none",
        }}
      />

      {/* Top row */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
            width: 70,
            height: 70,
            borderRadius: 8,
            background: service.accent + "16",
            border: `1px solid ${service.accent}38`,
            color: service.accent,
            flexShrink: 0,
          }}
        >
          {service.icon}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 6,
          }}
        >
         
        </div>
      </div>

      {/* Text */}
      <div
        style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1 }}
      >
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {service.title}
        </h3>
        <p className="text-gray-600">
          {service.description}
        </p>
      </div>


      {/* Bottom line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 2,
          background: service.accent,
          transformOrigin: "left",
          borderRadius: "0 0 20px 20px",
        }}
      />
    </motion.div>
  );
}

export default function ServicesPreview() {
  return (
    <section
      className="bg-white py-16 px-4 md:px-16 max-w-350 m-auto"
      id="services"
    >
      <div className="text-center mb-12">
        <div className="text-center mb-4">
          <span className="bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-medium">
            ● Our Services
          </span>
        </div>
        <h1 className="text-4xl md:text-4xl font-bold text-gray-900 leading-tight">
          Comprehensive HRMS Solution <br />
          <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            to Empower your workforce
          </span>
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Our HRMS platform streamlines your HR processes, boost productivity,
          <br /> and helps you manage your people more effectively.
        </p>
      </div>



      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>

      <div className="text-center flex items-center justify-between py-8 px-10 bg-[#DEEEFA] rounded-2xl w-275 m-auto">
        <div className=" text-start flex items-center justify-center gap-x-4">
          <div className="p-4 rounded-full text-white bg-primary">
            <FaUsers size={50} />
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-2xl">
              Ready to Transform Your HR Processes?
            </h3>
            <p className="text-grey-600">
              Discover how our HRMS platform can help you build a more <br />{" "}
              productive and engaged workforce.
            </p>
          </div>
        </div>
        <Button>Get Started Today</Button>
      </div>
    </section>
  );
}
