import React from "react";
import { motion } from "framer-motion";
import { CiYoutube } from "react-icons/ci";

const About = () => {
  return (
    <section id="about" className="h-[620px] bg-white pt-32">
      <motion.div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left Title */}
        <motion.div className="w-1/2 space-y-6">
          <motion.h2
            className="text-3xl font-bold text-gray-800 mb-6 flex items-center justify-center md:justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="text-primary mr-2 border-b-5 border-[#FFA500]">
              About me
            </span>
          </motion.h2>
        </motion.div>

        {/* Right Content */}
        <motion.div className="md:w-1/2">
          <motion.p
            className="text-gray-800 mb-16 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Lorem ipsum dolor sit amet consectetur. Id venenatis adipiscing
            posuere leo tellus. In imperdiet orci feugiat odio. Morbi aliquam
            mauris euismod varius luctus libero. Id malesuada vitae lacus
            egestas facilisis purus. Massa nullam viverra sem aliquam laoreet.
          </motion.p>

          <motion.p
            className="text-gray-800 mb-16 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Lorem ipsum dolor sit amet consectetur. Id venenatis adipiscing
            posuere leo tellus. In imperdiet orci feugiat odio. Morbi aliquam
            mauris euismod varius luctus libero.
          </motion.p>

          {/* Buttons Section */}
          <motion.div
            className="flex flex-col md:flex-row justify-start gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Button 1 */}
            <button className="bg-[#FFA500] text-white px-6 flex items-center justify-between gap-4 py-3 rounded-sm font-medium hover:opacity-90 transition w-full md:w-auto">
              Hear me out <CiYoutube size={35} />
            </button>

            {/* Button 2 */}
            <button className="border-2 border-[#FFA500] text-primary px-6 py-3 rounded-sm font-medium hover:bg-[#FFA500] hover:text-white transition w-full md:w-auto">
              Download CV
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
