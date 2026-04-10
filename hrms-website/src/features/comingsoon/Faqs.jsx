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
      title: "Technology Solutions",
      img: Service1,
      content:
        "We provide scalable tech solutions to streamline HR operations and boost efficiency across teams.",
    },
    {
      num: "02",
      title: "Education & Training",
      img: Service2,
      content:
        "Upskill your workforce with structured training programs and performance tracking tools.",
    },
    {
      num: "03",
      title: "Invitation & Design",
      img: Service3,
      content:
        "Create engaging internal communications and onboarding experiences with ease.",
    },
    {
      num: "04",
      title: "Creative Printing",
      img: Service4,
      content:
        "Design employee assets and HR materials with a creative edge.",
    },
    {
      num: "05",
      title: "Marketing Strategies",
      img: Service5,
      content:
        "Build employer branding and internal engagement strategies that work.",
    },
  ];

  return (
    <section
      className="
        max-w-7xl mx-auto 
        px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 
        py-12 sm:py-16 md:py-20
        flex flex-col lg:flex-row gap-10 lg:gap-16
      "
      id="faqs"
    >
      {/* LEFT SIDE */}
      <div className="lg:w-1/2 flex flex-col justify-center">
        
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="bg-primary text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl">
            <FaQuestion className="text-lg sm:text-2xl" />
          </div>
          <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide">
            Support & Help
          </p>
        </div>

        <h2 className="
          font-bold text-gray-900 leading-tight mb-4 sm:mb-6
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl
        ">
          Got Questions? <br /> We’ve Got Answers
        </h2>

        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-lg">
          Everything you need to know about our HRMS platform, features,
          and how we help you manage your workforce better.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="lg:w-1/2">
        <h3 className="
          font-semibold text-gray-900 mb-6 sm:mb-8
          text-lg sm:text-xl md:text-2xl
        ">
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
                  group hover:bg-[#DEEEFA]
                "
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="text-gray-400 text-xs sm:text-sm">
                    {item.num}
                  </span>
                  <span className="font-medium text-gray-800 text-sm sm:text-base">
                    {item.title}
                  </span>
                </div>

                <span
                  className={`text-lg sm:text-xl transition-transform duration-300 ${
                    activeIndex === index ? "rotate-45" : ""
                  }`}
                >
                  <GoArrowUpRight />
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
                <p className="px-4 sm:px-5 text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                  {item.content}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Faqs;