import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Button = ({ children, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="relative overflow-hidden px-6 py-3 font-semibold text-white rounded-lg shadow-lg bg-gradient-to-r from-[#78C3FF] to-primary flex items-center gap-2"
    >
      {/* Button Text */}
      <span className="relative z-10 flex items-center gap-2">
        {children} <FaArrowRight size={16} />
      </span>

      {/* Diagonal Gold/White Shine */}
      <span className="absolute top-0 left-[-50%] w-5 h-full bg-gradient-to-r from-transparent via-white to-transparent 
        opacity-30 transform rotate-12 animate-shine"></span>

      {/* Custom CSS for animation */}
      <style >{`
        @keyframes shine {
          0% {
            left: -50%;
          }
          100% {
            left: 150%;
          }
        }
        .animate-shine {
          animation: shine 2s linear infinite;
        }
      `}</style>
    </motion.button>
  );
};

export default Button;