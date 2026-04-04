import { useEffect, useState } from "react";
import {Service1, Service2, Service3, Service4} from "@/assets";

const solutions = [
  {
    id: 1,
    title: "Employee Management",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores amet quae perspiciatis at laboriosam, aut ullam accusamus dolore repellat soluta! Repudiandae doloremque ea ",
    color: "#DEEEFA",
    textColor: "#0078D4",
    images: [
      Service1,
      Service2,
      Service3,
      Service4,
    ],
  },
  {
    id: 2,
    title: "Payroll Automation",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores amet quae perspiciatis at laboriosam, aut ullam accusamus dolore repellat soluta! Repudiandae doloremque ea ",
    color: "#E5F3D3",
    textColor: "#5CB400",
    images: [
      Service1,
      Service2,
      Service3,
      Service4,
    ],
  },
  {
    id: 3,
    title: "Attendance Tracking",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores amet quae perspiciatis at laboriosam, aut ullam accusamus dolore repellat soluta! Repudiandae doloremque ea ",
    color: "#FDE8D4",
    textColor: "#F47B20",
    images: [
      Service1,
      Service2,
      Service3,
      Service4,
    ],
  },
  {
    id: 4,
    title: "HR Analytics",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores amet quae perspiciatis at laboriosam, aut ullam accusamus dolore repellat soluta! Repudiandae doloremque ea ",
    color: "#D4EFFC",
    textColor: "#00A4EF",
    images: [
      Service1,
      Service2,
      Service3,
      Service4,
    ],
  },
  {
    id: 5,
    title: "HR Insights",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores amet quae perspiciatis at laboriosam, aut ullam accusamus dolore repellat soluta! Repudiandae doloremque ea ",
    color: "#FDF3C0",
    textColor: "#8A6A00",
    images: [
      Service1,
      Service2,
      Service3,
      Service4,
    ],
  },
];

export default function SlideSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      const index = Math.min(solutions.length - 1, Math.floor(scrollY / vh));

      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative w-full"
      style={{ height: `${solutions.length * 100}vh` }}
    >
      {solutions.map((item, index) => {
        const isActive = index === activeIndex;
        const isPrev = index === activeIndex - 1;

        return (
          <div
            key={item.id}
            className="sticky top-0 h-screen w-full flex items-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] relative" id="solution"
            style={{
              backgroundColor: item.color,
              zIndex: isActive ? 100 : index,

              transform: isPrev ? "" : "scale(1)",

              filter: isPrev ? "" : "blur(0px)",
            }}
          >
            {/* Section Index Indicator */}
            <div className="absolute flex items-center justify-center top-8 gap-x-2 right-8 z-50"
            style={{
              color: item.textColor,
            }}
            >
              <div className="text-4xl font-bold">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="flex gap-x-2 items-center justify-center">
                {solutions.map((_, i) => (
                  <div
                    key={i}
                    className={`w-1 rounded-xl transition-all duration-300 ${
                      i === index
                        ? 'h-10'
                        : 'h-4 bg-black/30'
                    }`}
                    style={i === index ? { backgroundColor: item.textColor } : {}}
                  />
                ))}
              </div>
            </div>

            <div className="max-w-7xl mx-auto w-full flex flex-col items-center justify-center gap-y-6 px-6">
              {/* LEFT CONTENT */}
              <div className=" text-center flex flex-col items-center"
              style={{
                color: item.textColor,
              }}
              >
                <h2 className="text-[80px] font-bold mb-6 leading-tight">
                  {item.title}
                </h2>
                
                <p className="text-black text-lg opacity-90 mb-6 max-w-4xl">{item.desc}</p>

                <button className="text-black rounded-lg font-medium hover:scale-105 transition">
                  Learn More →
                </button>
              </div>

              {/* RIGHT IMAGE GRID */}
              <div className="w-full max-w-250 grid grid-cols-3 gap-6">
                {item.images.slice(0, 2).map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${item.title} ${i + 1}`}
                    className={`rounded-2xl object-cover shadow-[2px_2px_5px_#6161614d] w-full h-64 transition-transform duration-500 ${
                      index % 2 === 0
                        ? i === 0
                          ? 'col-span-2'
                          : 'col-span-1'
                        : i === 0
                          ? 'col-span-1'
                          : 'col-span-2'
                    }`}
                  />
                ))}
              </div>

              {/* RIGHT IMAGE GRID */}
              <div className="w-full max-w-250 grid grid-cols-3 gap-6">
                {item.images.slice(2, 4).map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${item.title} ${i + 1}`}
                    className={`rounded-2xl object-cover shadow-[2px_2px_5px_#6161614d] w-full h-64 transition-transform duration-500 ${
                      index % 2 === 0
                        ? i === 0
                          ? 'col-span-1'
                          : 'col-span-2'
                        : i === 0
                          ? 'col-span-2'
                          : 'col-span-1'
                    }`}
                  />
                ))}
              </div>


            </div>
          </div>
        );
      })}
    </section>
  );
}
