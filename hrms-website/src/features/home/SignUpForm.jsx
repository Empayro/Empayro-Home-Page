import React from "react";
import { logo } from "@/assets";
import { NewsLetter } from "@/assets";

const SignUpForm = () => {
  return (
    <section className="relative w-full py-24 px-6 bg-gradient-to-b from-blue-50 to-white overflow-hidden" id="getintouch">
      {/* Background Clouds Effect */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_top,_#dbeafe,_transparent_70%)]"></div>
      </div>

      {/* Container */}
      <div className="relative max-w-3xl mx-auto text-center">
        {/* Logo */}
        <div className="flex justify-center items-center gap-2 mb-6">
          <img src={logo} alt="Empayro" className="h-20" />
        </div>

        {/* Title Box */}
        <div className="bg-blue-100/60 backdrop-blur-md rounded-2xl px-8 py-6 mb-10 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
            Book your free demo now!
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque repudiandae perferendis fugiat non! Quam eum sed ducimus est odio.
          </p>
        </div>

        {/* Illustration Section */}
        <div className="relative flex justify-center items-center mb-10">
          {/* Main Envelope */}
          <div className="relative rounded-2xl p-6 w-[280px] md:w-[320px]">
            {/* Paper */}
            <img src={NewsLetter} alt="" className="size-full" />
            {/* Envelope Bottom */}
          </div>

          {/* Floating Icons */}
          <div className="absolute -left-10 top-10 bg-white p-3 rounded-full shadow-md">
            🎯
          </div>

          <div className="absolute -right-10 top-6 bg-white p-3 rounded-full shadow-md">
            🔔
          </div>

          <div className="absolute -right-16 bottom-0 bg-white p-3 rounded-full shadow-md">
            📈
          </div>

          <div className="absolute left-0 bottom-0 bg-white p-3 rounded-full shadow-md">
            💬
          </div>
        </div>

        {/* Input + Button */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-5 py-4 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 text-white font-semibold shadow-md hover:scale-105 transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;
