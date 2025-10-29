import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { FaGlobe, FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#F0FBFF]">
      <motion.div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-16 flex items-center justify-center md:justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="text-primary border-b-5 border-[#FFA500]">
            Contact
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Side */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="font-semibold text-gray-800">Contact info:</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-primary" /> Nigeria
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-primary" /> kellzdroid@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-primary" /> +234818294640
              </li>
              <li className="flex items-center gap-3">
                <FaGlobe className="text-primary" /> www.caleb.com
              </li>
            </ul>

            <div className="mt-6 ">
              <p className="font-semibold mb-3  text-gray-800">
                Follow Me: <span className="text-primary">@Kellzdroid on,</span>
              </p>
              <div className="flex space-x-5 text-xl text-gray-600">
                <FaFacebook className="hover:text-primary cursor-pointer" />
                <FaXTwitter className="hover:text-primary cursor-pointer" />
                <FaInstagram className="hover:text-primary cursor-pointer" />
              </div>
            </div>
          </motion.div>

          {/* Right Side (Form) */}
          <motion.form
            className="space-y-5 "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Enter your name"
                className="border border-gray-300 px-4 py-3 w-full rounded-sm focus:outline-[#FFA500]"
              />
              <input
                type="email"
                placeholder="Enter your Email"
                className="border border-gray-300 px-4 py-3 w-full rounded-sm focus:outline-[#FFA500]"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Enter your phone number"
                className="border border-gray-300 px-4 py-3 w-full rounded-sm focus:outline-[#FFA500]"
              />
            </div>

            <textarea
              rows="5"
              placeholder="Type your message..."
              className="border border-gray-300 px-4 py-3 w-full rounded-sm focus:outline-[#FFA500]"
            ></textarea>

            <button
              id="#"
              className="text-white bg-[#FFA500] px-16 py-3 rounded-sm font-medium hover:opacity-90 transition"
            >
              Send
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
