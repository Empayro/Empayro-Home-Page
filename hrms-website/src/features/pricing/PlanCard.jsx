import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

function PlanCard({
  title,
  price,
  subtitle,
  description,
  features = [],
  icons = [],
  buttonText,
  isPopular,
  gst,
}) {
  const [showAll, setShowAll] = useState(false);

  // 👉 Flatten all features with section reference
  const allFeatures = features.flatMap((section) =>
    section.items.map((item) => ({
      title: section.title,
      item,
    })),
  );

  // 👉 Limit to 5 globally
  const visibleFeatures = showAll ? allFeatures : allFeatures.slice(0, 5);

  // 👉 Group back by section
  const groupedFeatures = visibleFeatures.reduce((acc, curr) => {
    if (!acc[curr.title]) acc[curr.title] = [];
    acc[curr.title].push(curr.item);
    return acc;
  }, {});

  return (
    <div className="relative group">
      <div
        className={`backdrop-blur-xl bg-white/60 border border-white/40 p-6 rounded-2xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
          isPopular ? "ring-2 ring-primary" : ""
        }`}
      >
        {/* Badge */}
        {isPopular && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white text-xs px-4 py-1 rounded-full shadow">
            Most Popular
          </div>
        )}

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>

        {/* Price */}
        <div className="mt-3">
          <span className="text-3xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-600 text-sm ml-1">{subtitle}</span>
        </div>

        <p className="text-gray-500 text-sm mt-2">{description}</p>

        {/* Icons */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          {icons?.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary text-center"
            >
              <div className="text-xl py-2">{item.icon}</div>
              <p className="text-xs mt-1 font-medium text-gray-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="mt-6 space-y-4">
          {Object.entries(groupedFeatures).map(([sectionTitle, items]) => (
            <div key={sectionTitle}>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                {sectionTitle}
              </h3>

              <ul className="space-y-2 text-sm text-gray-600">
                {items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-secondary">✔</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Toggle */}
        {allFeatures.length > 5 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-3 flex items-center gap-1 text-sm text-primary font-medium hover:underline"
          >
            {showAll ? "View Less" : `View All (${allFeatures.length})`}

            <HiChevronDown
              className={`text-lg transition-transform duration-300 ${
                showAll ? "rotate-180" : ""
              }`}
            />
          </button>
        )}

        {/* CTA */}
        <button
          className={`mt-6 w-full py-2.5 rounded-lg font-medium transition-all ${
            isPopular
              ? "bg-gradient-to-r from-primary to-secondary text-white"
              : "bg-white border border-primary text-primary hover:bg-primary hover:text-white"
          }`}
        >
          {buttonText}
        </button>

        {gst && <p className="text-[#616161] my-2 text-sm">{gst}</p>}
      </div>
    </div>
  );
}

export default PlanCard;
