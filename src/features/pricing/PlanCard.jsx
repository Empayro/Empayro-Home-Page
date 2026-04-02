function PlanCard({
  title,
  price,
  subtitle,
  description,
  features,
  icons,
  buttonText,
  isPopular,
  gst,
}) {
  return (
    <div className="relative group">
      {/* 🔥 GLASS CARD */}
      <div
        className={`backdrop-blur-xl bg-white/60 border border-white/40 p-6 rounded-2xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
          isPopular ? "ring-2 ring-[#0078D4]" : ""
        }`}
      >
        {/* 🔥 BADGE */}
        {isPopular && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0078D4] to-[#00A4EF] text-white text-xs px-4 py-1 rounded-full shadow">
            Most Popular
          </div>
        )}

        {/* 🔹 TITLE */}
        <h2 className="text-4xl md:text-2xl font-bold text-gray-900">
          {title}
        </h2>

        {/* 🔹 PRICE */}
        <div className="mt-3">
          <span className="text-3xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-600 text-sm ml-1">{subtitle}</span>
        </div>

        <p className="text-gray-500 text-sm mt-2">{description}</p>

        <div className="grid grid-cols-3 gap-3 mt-6">
          {icons.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-gradient-to-br from-[#0078D4]/10 to-[#00A4EF]/10 text-[#0078D4] text-center"
            >
              <div className="text-xl py-2">{item.icon}</div>
              <p className="text-xs mt-1 font-medium text-gray-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* 🔹 FEATURES LIST WITH HEADINGS */}
        <div className="mt-6 space-y-4">
          {features.map((section, index) => (
            <div key={index}>
              {/* Section Title */}
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                {section.title}
              </h3>

              {/* Features */}
              <ul className="space-y-2 text-sm text-gray-600">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[#00A4EF]">✔</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* 🔥 CTA */}
        <button
          className={`mt-6 w-full py-2.5 rounded-lg font-medium transition-all ${
            isPopular
              ? "bg-gradient-to-r from-[#0078D4] to-[#00A4EF] text-white border border-transparent"
              : "bg-white border border-[#0078D4] text-[#0078D4] hover:bg-[#0078D4] hover:text-white"
          }`}
        >
          {buttonText}
        </button>
        <p className="text-[#616161] my-2 text-sm">{gst}</p>
      </div>
    </div>
  );
}

export default PlanCard;
