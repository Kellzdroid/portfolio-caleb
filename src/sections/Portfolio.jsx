import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  { id: 1, category: "UI/UX DESIGN", title: "E-commerce Redesign" },
  { id: 2, category: "UI/UX DESIGN", title: "Portfolio Dashboard" },
  { id: 3, category: "FRONT-END DEVELOPMENT", title: "Landing Page Build" },
  { id: 4, category: "FRONT-END DEVELOPMENT", title: "Restaurant Website" },
  { id: 5, category: "UI/UX DESIGN", title: "Banking App UI" },
  { id: 6, category: "FRONT-END DEVELOPMENT", title: "Blog Platform UI" },
  { id: 7, category: "UI/UX DESIGN", title: "E-commerce Redesign" },
  { id: 8, category: "UI/UX DESIGN", title: "Portfolio Dashboard" },
  { id: 9, category: "FRONT-END DEVELOPMENT", title: "Landing Page Build" },
  { id: 10, category: "FRONT-END DEVELOPMENT", title: "Restaurant Website" },
  { id: 11, category: "UI/UX DESIGN", title: "Banking App UI" },
  { id: 12, category: "FRONT-END DEVELOPMENT", title: "Blog Platform UI" },
];

const Portfolio = () => {
  const [active, setActive] = useState("UI/UX DESIGN");

  const filtered = projects.filter((p) => p.category === active);

  return (
    <section
      id="portfolio"
      className="py-20 bg-white max-w-6xl mx-auto px-6 text-center"
    >
      <motion.h2
        className="text-3xl font-bold text-gray-800 mb-8 flex items-center justify-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span className="text-primary border-b-5 border-[#FFA500]">
          Portfolio
        </span>
      </motion.h2>

      {/* Category Toggle */}
      <motion.div
        className="flex justify-center gap-6 border-b-2 border-[#FFA500]/20 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {["UI/UX DESIGN", "FRONT-END DEVELOPMENT"].map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`font-medium transition-colors ${
              active === cat
                ? "text-primary"
                : "text-gray-600 hover:text-primary"
            }`}
          >
            <span
              className={`mr-2 inline-block w-3 h-3 rounded-full ${
                active === cat && cat === "UI/UX DESIGN"
                  ? "bg-red-500"
                  : active === cat
                  ? "bg-gray-800"
                  : "bg-gray-300"
              }`}
            ></span>
            {cat}
          </button>
        ))}
      </motion.div>

      <motion.p
        className="text-gray-700 mb-10 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Massa nullam viverra sem aliquam laoreet. Leo in nulla ipsum mi arcu
        senectus.
      </motion.p>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
        <AnimatePresence>
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              className="bg-light h-70 rounded-md flex items-center justify-center text-gray-800 font-semibold shadow-sm hover:shadow-md cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              {item.title}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
