import { useEffect, useState } from "react";

const solutions = [
  {
    id: 1,
    title: "Employee Management",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio itaque hic error ipsa neque nostrum, dicta, id omnis ad sed facere nulla vel, saepe tenetur earum. Magnam temporibus explicabo laborum, accusamus quod quia debitis, saepe error placeat, in ipsum provident tenetur aliquam veniam!",
    color: "#0c9367",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692",
  },
  {
    id: 2,
    title: "Payroll Automation",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio itaque hic error ipsa neque nostrum, dicta, id omnis ad sed facere nulla vel, saepe tenetur earum. Magnam temporibus explicabo laborum, accusamus quod quia debitis, saepe error placeat, in ipsum provident tenetur aliquam veniam!",
    color: "#C53B3A",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
  },
  {
    id: 3,
    title: "Attendance Tracking",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio itaque hic error ipsa neque nostrum, dicta, id omnis ad sed facere nulla vel, saepe tenetur earum. Magnam temporibus explicabo laborum, accusamus quod quia debitis, saepe error placeat, in ipsum provident tenetur aliquam veniam!",
    color: "#09407E",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    id: 4,
    title: "HR Analytics",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio itaque hic error ipsa neque nostrum, dicta, id omnis ad sed facere nulla vel, saepe tenetur earum. Magnam temporibus explicabo laborum, accusamus quod quia debitis, saepe error placeat, in ipsum provident tenetur aliquam veniam!",
    color: "#F1B333",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  {
    id: 5,
    title: "HR Analytics",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio itaque hic error ipsa neque nostrum, dicta, id omnis ad sed facere nulla vel, saepe tenetur earum. Magnam temporibus explicabo laborum, accusamus quod quia debitis, saepe error placeat, in ipsum provident tenetur aliquam veniam!",
    color: "#fdf7eb",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
];

export default function SlideSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      const index = Math.min(
        solutions.length - 1,
        Math.floor(scrollY / vh)
      );

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
            className="sticky top-0 h-screen w-full flex items-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              backgroundColor: item.color,
              zIndex: isActive ? 100 : index,

              transform: isPrev
                ? ""
                : "scale(1)",

              filter: isPrev ? "" : "blur(0px)",
            }}
          >
            {/* GRID LAYOUT */}
            <div className="max-w-7xl mx-auto w-full flex items-center gap-y-10 justify-between flex-col px-6">
                
              
              {/* LEFT CONTENT */}
              <div className="text-white flex items-center justify-center flex-col">
                <h2 className="text-[92px] font-bold mb-6 leading-tight">
                  {item.title}
                </h2>
                <p className="text-lg opacity-90 mb-6 w-[70%] text-center">
                  {item.desc}
                </p>

                <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:scale-105 transition">
                  Learn More →
                </button>
              </div>

              {/* RIGHT IMAGE */}
              <div className="flex justify-center">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full max-w-md rounded-2xl shadow-2xl object-cover"
                />
              </div>

            </div>
          </div>
        );
      })}
    </section>
  );
}