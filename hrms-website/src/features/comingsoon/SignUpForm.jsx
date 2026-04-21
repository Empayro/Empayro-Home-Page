import React, { useState } from "react";
import { logo, NewsLetter } from "@/assets";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Please enter your email.");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setTimeout(() => {
      setSubmitted(true);
      setEmail("");
    }, 500);
  };

  return (
    <section
      className="
        relative w-full 
        py-12 sm:py-16 md:py-20 lg:py-24 
        px-4 sm:px-6 md:px-10 
        bg-gradient-to-b from-blue-50 to-white 
        overflow-hidden dark:from-[#000] dark:to-[#000000] 
      text-black dark:text-white 
      "
      id="getintouch"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-40  pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_top,_#dbeafe,_transparent_70%)] dark:bg-[radial-gradient(circle_at_top,_#000000,_transparent_70%)]"></div>
      </div>

      {/* Container */}
      <div className="relative max-w-3xl mx-auto text-center">
        
        {/* Logo */}
        <div className="flex justify-center items-center mb-4 sm:mb-6">
          <img
            src={logo}
            alt="Empayro"
            className="h-12 sm:h-16 md:w-70"
          />
        </div>

        {/* Title Box */}
        <div className="bg-blue-100/60 dark:border dark:bg-black backdrop-blur-md rounded-xl sm:rounded-2xl px-5 sm:px-8 py-5 sm:py-6 mb-8 sm:mb-10 shadow-sm">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-slate-800 dark:text-white mb-2 sm:mb-3">
            Don't let your team miss <br /> <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text ">India's HR, Finally Sorted.</span> 
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Secure your place at the front of the queue. Get first access <br /> the moment Empayro goes live.
          </p>
        </div>

        {/* Illustration */}
        <div className="relative flex justify-center items-center mb-8 sm:mb-10">
          
          <div className="relative rounded-2xl p-4 sm:p-6 w-[220px] sm:w-[260px] md:w-[320px]">
            <img src={NewsLetter} alt="" className="w-full h-auto" />
          </div>

          {/* Floating Icons (Responsive Positions) */}
          <div
            className="absolute left-2 sm:-left-10 top-6 sm:top-10 bg-white dark:bg-black dark:border p-2 sm:p-3 rounded-full shadow-md animate-float"
            style={{
              animation: "floatX 4s ease-in-out infinite",
            }}
          >
            🎯
          </div>

          <div
            className="absolute right-2 sm:-right-10 top-4 sm:top-6 bg-white dark:bg-black dark:border p-2 sm:p-3 rounded-full shadow-md animate-float-reverse"
            style={{
              animation: "floatX 4s ease-in-out infinite reverse",
            }}
          >
            🔔
          </div>

          <div
            className="absolute right-0 sm:-right-16 bottom-0 bg-white dark:bg-black dark:border p-2 sm:p-3 rounded-full shadow-md animate-float"
            style={{
              animation: "floatX 4s ease-in-out infinite",
            }}
          >
            📈
          </div>

          <div
            className="absolute left-0 bottom-0 bg-white dark:bg-black dark:border p-2 sm:p-3 rounded-full shadow-md animate-float"
            style={{
              animation: "floatX 4s ease-in-out infinite",
            }}
          >
            💬
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="
            flex flex-col sm:flex-row 
            items-center justify-center 
            gap-3 sm:gap-4 
            max-w-xl mx-auto
          "
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="
              w-full 
              px-4 sm:px-5 py-3 sm:py-4 
              rounded-full 
              border border-gray-200 
              shadow-sm 
              text-sm sm:text-base
              focus:outline-none focus:ring-2 focus:ring-blue-400
            "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="submit"
            className="
              w-full sm:w-auto
              px-6 sm:px-8 py-3 sm:py-4 
              rounded-full 
              bg-gradient-to-r from-blue-400 to-blue-500 
              text-white font-semibold 
              shadow-md 
              hover:scale-105 transition
            "
          >
            Subscribe
          </button>
        </form>

        {/* Messages */}
        {error && (
          <p className="mt-3 text-sm text-red-500">{error}</p>
        )}
        {submitted && (
          <p className="mt-3 text-sm sm:text-base text-primary font-medium">
            Thank you for joining! We'll keep you updated.
          </p>
        )}
      </div>
    </section>
  );
};

export default SignUpForm;