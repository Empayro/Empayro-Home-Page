import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PlanCard from "../pricing/PlanCard";

function PlansCarousel({ plans }) {
  const [currentIndex, setCurrentIndex] = useState(
    plans.findIndex((p) => p.isPopular) || 0
  );
  const timeoutRef = useRef(null);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const slide = () => {
      setCurrentIndex((prev) => (prev + 1) % plans.length);
    };
    timeoutRef.current = setInterval(slide, 3000);

    return () => clearInterval(timeoutRef.current);
  }, [plans.length]);

  const handleMouseEnter = () => clearInterval(timeoutRef.current);
  const handleMouseLeave = () => {
    timeoutRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % plans.length);
    }, 3000);
  };

  // Determine which 3 plans to show
  const getVisiblePlans = () => {
    const total = plans.length;
    const prev = plans[(currentIndex - 1 + total) % total];
    const curr = plans[currentIndex];
    const next = plans[(currentIndex + 1) % total];
    return [prev, curr, next];
  };

  const visiblePlans = getVisiblePlans();

  return (
    <div
      className="overflow-hidden relative max-w-6xl mx-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex justify-center items-center gap-8">
        {visiblePlans.map((plan, idx) => (
          <motion.div
            key={plan.title + idx}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: idx === 1 ? 1 : 0.9 }}
            transition={{ duration: 0.5 }}
            className={`flex-shrink-0 w-80`}
          >
            <PlanCard {...plan} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default PlansCarousel;