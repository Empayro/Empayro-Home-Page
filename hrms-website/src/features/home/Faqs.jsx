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
      content: "We provide scalable tech solutions to streamline HR operations and boost efficiency across teams.",
    },
    {
      num: "02",
      title: "Education & Training",
      img: Service2,
      content: "Upskill your workforce with structured training programs and performance tracking tools.",
    },
    {
      num: "03",
      title: "Invitation & Design",
      img: Service3,
      content: "Create engaging internal communications and onboarding experiences with ease.",
    },
    {
      num: "04",
      title: "Creative Printing",
      img: Service4,
      content: "Design employee assets and HR materials with a creative edge.",
    },
    {
      num: "05",
      title: "Marketing Strategies",
      img: Service5,
      content: "Build employer branding and internal engagement strategies that work.",
    },
  ];

  return (
    <section className="max-w-350 mx-auto p-20 flex flex-col lg:flex-row gap-16" id="faqs">
      
      {/* LEFT SIDE */}
      <div className="lg:w-1/2 flex flex-col justify-center">
        
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-[#0078D4] text-white p-4 rounded-2xl">
            <FaQuestion size={28} />
          </div>
          <p className="text-sm text-gray-500 uppercase tracking-wide">
            Support & Help
          </p>
        </div>

        <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
          Got Questions? <br /> We’ve Got Answers
        </h2>

        <p className="text-gray-600 mb-8">
          Everything you need to know about our HRMS platform, features,
          and how we help you manage your workforce better.
        </p>

        {/* Optional Image Preview
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img src={Service1} alt="Preview" className="w-full h-auto object-cover" />
        </div> */}
      
      </div>

      {/* RIGHT SIDE */}
      <div className="lg:w-1/2">
        <h3 className="text-2xl font-semibold text-gray-900 mb-8">
          Frequently Asked Questions
        </h3>

        <ul className="space-y-4">
          {items.map((item, index) => (
            <li
              key={index}
              className="border border-blue-400 rounded-xl overflow-hidden transition-all"
            >
              {/* Header */}
              <div
                className="flex justify-between items-center p-5 cursor-pointer group hover:bg-[#DEEEFA]"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center gap-4">
                  <span className="text-gray-400 text-sm">{item.num}</span>
                  <span className="font-medium text-gray-800">
                    {item.title}
                  </span>
                </div>

                <span
                  className={`text-xl transition-transform duration-300 ${
                    activeIndex === index ? "rotate-45" : ""
                  }`}
                >
                  <GoArrowUpRight />
                </span>
              </div>

              {/* Content */}
              <div
                className={`px-5 transition-all duration-500 ease-in-out ${
                  activeIndex === index
                    ? "max-h-50 py-4 opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <p className="text-gray-600 text-sm leading-relaxed">
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