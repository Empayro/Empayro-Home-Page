import { GoArrowUpRight } from "react-icons/go";
import { useState } from "react";
import { Service1, Service2, Service3, Service4, Service5 } from "@/assets";
import { FaQuestion } from "react-icons/fa";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const items = [
    {
      num: "01",
      title: "When is Empayro launching?",
      content:
        "We're launching this winter. Waitlist members get early access before the general public - giving you time to set up your company, explore the platform, and be fully ready from day one.",
    },
    {
      num: "02",
      title: "We're a small team just getting started - is this right for us?",
      content:
        "Absolutely. Our Basic plan gives you attendance, leave management, payroll, and compliance without any bloat. As your company grows, upgrading takes a single click and all your data moves with you - nothing to reconfigure.",
    },
    {
      num: "03",
      title: "We already use another HRMS. How hard is migration?",
      content:
        "Our onboarding team handles the heavy lifting. We support Excel and CSV imports, and direct integrations with most commonly used tools. Most companies are fully live within 48 hours — employee data, leave balances, and payroll history included.",
    },
    {
      num: "04",
      title: "How exactly does the referral reward work?",
      content:
        "After joining the waitlist, we email you a personalised referral link. Every person who signs up through it counts as one referral. Reach 3 referrals and PMS is unlocked free for 1 month (limited users). Reach 5 and the Chat app is unlocked free for 1 month (limited users). Rewards are automatically applied to your account at launch — no action needed.",
    },
    {
      num: "05",
      title: "Is our employee data safe?",
      content:
        "Your data is stored on servers physically located in India — fully compliant with the DPDP Act 2023 and IT Act. We use AES-256 encryption, role-based access controls, and regular third-party security audits. Your employee data never leaves Indian borders.",
    },
    {
      num: "06",
      title: "What's the advantage of joining the waitlist now?",
      content:
        "Waitlist members get first access before general availability, priority onboarding support, early-adopter status, and the ability to earn add-on rewards through referrals — all of which are only available during the pre-launch period.",
    },
  ];

  return (
    <section
      className="dark:bg-black" id="faqs">
      <div className="max-w-350 mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 flex flex-col lg:flex-row gap-10 lg:gap-16"
      >
        {/* LEFT SIDE */}
        <div className=" lg:w-1/2 flex flex-col justify-center items-center sm:items-center lg:items-start">
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="bg-primary text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl">
              <FaQuestion className="text-lg sm:text-2xl" />
            </div>
            <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide">
              Questions? Answered.
            </p>
          </div>

          <h2
            className="
            font-bold text-gray-900 dark:text-white leading-tight mb-4 sm:mb-6
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
            text-center sm:text-center lg:text-start
          "
          >
            Everything you <br />
            <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
              wanted to know
            </span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-lg  text-center sm:text-center lg:text-start">
            Everything you need to know about our HRMS platform, features, and
            how we help you manage your workforce better.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:w-1/2">
          <h3
            className="
          font-semibold text-gray-900 dark:text-white mb-6 sm:mb-8
          text-lg sm:text-xl md:text-2xl
        "
          >
            Frequently Asked Questions
          </h3>

          <ul className="space-y-3 sm:space-y-4">
            {items.map((item, index) => (
              <li
                key={index}
                className="border border-blue-400 rounded-lg sm:rounded-xl overflow-hidden transition-all"
              >
                {/* Header */}
                <div
                  className="
                  flex justify-between items-center 
                  p-4 sm:p-5 
                  cursor-pointer 
                  group hover:bg-[#DEEEFA] dark:hover:bg-black
                "
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="text-gray-400 text-xs sm:text-sm">
                      {item.num}
                    </span>
                    <span className="font-medium text-gray-800 dark:text-gray-400 text-sm sm:text-base">
                      {item.title}
                    </span>
                  </div>

                  <span
                    className={`text-lg sm:text-xl transition-transform duration-300 ${
                      activeIndex === index ? "rotate-45" : ""
                    }`}
                  >
                    <GoArrowUpRight className="dark:text-white" />
                  </span>
                </div>

                {/* Content */}
                <div
                  className={`
                  transition-all duration-500 ease-in-out overflow-hidden
                  ${
                    activeIndex === index
                      ? "max-h-40 sm:max-h-60 md:max-h-80 py-3 sm:py-4 opacity-100"
                      : "max-h-0 opacity-0"
                  }
                `}
                >
                  <p className="px-4 sm:px-5 text-gray-600 dark:text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
