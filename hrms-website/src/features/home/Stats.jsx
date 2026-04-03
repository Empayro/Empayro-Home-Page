import { useEffect, useState } from "react";
import { Users, Building2, BarChart3, TrendingUp } from "lucide-react";

function Counter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <h2 className="text-3xl font-bold text-gray-900">
      {count}
      {suffix}
    </h2>
  );
}

function Stats() {
  const data = [
    {
      icon: <Building2 className="text-white" />,
      value: 500,
      suffix: "+",
      label: "Corporate Clients",
    },
    {
      icon: <BarChart3 className="text-white" />,
      value: 15,
      suffix: "+",
      label: "Industry Served",
    },
    {
      icon: <Users className="text-white" />,
      value: 150,
      suffix: "k+",
      label: "Active Users",
    },
    {
      icon: <TrendingUp className="text-white" />,
      value: 3,
      suffix: "x",
      label: "Productivity Growth",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-2 gap-y-16 gap-x-16 text-center">

        {data.map((item, index) => (
          <div key={index} className="space-y-3">

            {/* ICON */}
            <div className="w-12 h-12 mx-auto flex items-center justify-center bg-gradient-to-r from-[#22C2D8] via-[#3080BB] to-[#3761AD] rounded-lg shadow">
              {item.icon}
            </div>

            {/* COUNTER */}
            <Counter end={item.value} suffix={item.suffix} />

            {/* LABEL */}
            <p className="text-gray-600">{item.label}</p>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Stats;