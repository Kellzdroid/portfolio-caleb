import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.png";

const Hero = () => {
  return (
    <section id="home" className="h-[700px] pt-48 pb-20 bg-[#F0FBFF]">
      <motion.div
        className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Hi, I'm <span className="text-poppins">Caleb</span>
          </h1>
          <p className="text-lg text-gray-800">
            A UI/UX Designer & Front-End Developer
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="bg-[#FFA500] text-white px-10 py-2 rounded-sm font-medium hover:opacity-90 transition"
          >
            Hire Me
          </motion.a>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center border-b-2 border-[#FFA500] mb-10 md:mb-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <img
            src={profile}
            alt="Caleb"
            className="w-64 h-64 object-cover border-b-2 border-[#FFA500] shadow"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
