import React, { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "UX Researcher",
    details: [
      "User journey mapping",
      "Usability testing",
      "Competitor analysis",
      "Persona development",
    ],
  },
  {
    title: "Graphic Designer",
    details: [
      "Logo & brand identity",
      "Poster & print design",
      "Social media creatives",
      "Illustrations",
    ],
  },
  {
    title: "UI/UX Designer",
    details: [
      "Wireframing & prototyping",
      "Figma interface design",
      "Accessibility design",
      "Interaction flows",
    ],
  },
  {
    title: "Front-End Developer",
    details: [
      "Responsive web design",
      "React + Tailwind builds",
      "API integration",
      "Performance optimization",
    ],
  },
];

// Animation Variants for stagger reveal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const Services = () => {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e, index) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - card.left;
    const y = e.clientY - card.top;
    const centerX = card.width / 2;
    const centerY = card.height / 2;
    const rotateX = ((y - centerY) / 20).toFixed(2);
    const rotateY = ((centerX - x) / 20).toFixed(2);
    setTilt({ [index]: { rotateX, rotateY } });
  };

  const handleMouseLeave = (index) => {
    setTilt({ [index]: { rotateX: 0, rotateY: 0 } });
  };

  return (
    <section id="services" className="py-20 bg-[#F0FBFF] md:mt-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-8 flex items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="text-primary border-b-5 border-[#FFA500]">
            Services
          </span>
        </motion.h2>

        <motion.p
          className="text-gray-700 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Massa nullam viverra sem aliquam laoreet. Trididunt urna nunc maecenas
          at. Leo in nulla ipsum mi arcu senectus.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="relative w-full h-64 perspective"
            >
              <motion.div
                style={{
                  transform: `rotateY(${
                    tilt[index]?.rotateY || 0
                  }deg) rotateX(${tilt[index]?.rotateX || 0}deg)`,
                }}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
                whileHover={{
                  rotateY: 180,
                  scale: 1.05,
                  transition: { duration: 0.7 },
                }}
                className="relative w-full h-full preserve-3d cursor-pointer shadow-lg rounded-lg"
              >
                {/* Front */}
                <div className="absolute inset-0 bg-white flex items-center justify-center text-xl font-semibold text-gray-800 rounded-lg backface-hidden transition-transform duration-500">
                  {service.title}
                </div>

                {/* Back */}
                <div className="absolute inset-0 bg-[#FFA500] text-white rounded-lg p-6 rotate-y-180 backface-hidden flex flex-col justify-center items-start">
                  <ul className="list-disc list-inside space-y-2 text-left text-sm">
                    {service.details.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
