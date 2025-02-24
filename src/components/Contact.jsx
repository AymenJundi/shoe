import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

// Social icons import
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsTelegram, BsInstagram } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Address icon import

const Contact = () => {
  return (
    <motion.div variants={textVariant()}>
      <div className="text-center">
        <p className="text-black  sm:text-[18px] text-[14px] text-blackuppercase  tracking-wider">Get in touch!</p>
        <h2 className="vibrant-gold-text-gradient  font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">For more information.</h2>
      </div>

     
      <div className="mt-12 flex justify-center">
        <div className="bg-gradient-to-r from-black to-[#ffd700] w-full sm:w-[450px] md:w-[500px] p-[2px] rounded-xl shadow-lg">
          <div className="bg-white rounded-xl py-8 px-10 text-center">
            <h3 className="text-[#ffd700] text-[22px] font-bold mb-4">Contact Us</h3>
            <p className="text-black text-[16px] mt-2">
              Phone: <a href="tel:+251123456789" className="text-[#ffd700]">+251 123 456 789</a> <br />
              Phone2: <a href="tel:+251123456789" className="text-[#ffd700]">+251 123 456 789</a>
            </p>
            <p className="text-black text-[16px] mt-2">
              Email: <a href="mailto:aymenjundi11@gmail.com" className="text-[#ffd700]">daystar11@gmail.com</a>
            </p>

            {/* Social Icons */}
            <div className="flex justify-center gap-6 mt-8">
              <a
                href="https://www.linkedin.com/in/aymen-jundi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-black hover:text-[#ffd700] transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/AymenJundi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-black hover:text-[#ffd700] transition-colors duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://t.me/Kingaymen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-black hover:text-[#ffd700] transition-colors duration-300"
              >
                <BsTelegram />
              </a>
              <a
                href="https://www.instagram.com/elkingaj7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-black  hover:text-[#ffd700] transition-colors duration-300"
              >
                <BsInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Address Section */}
      <div className="mt-12 text-center">
        <h3 className="text-[#ffd700] text-[22px] font-bold">Our Location</h3>
        <div className="flex justify-center mt-4 items-center">
          <FaMapMarkerAlt className="text-2xl text-black mr-2" />
          <p className="text-[#ffd700] text-[16px]">
            Adama 14 Kebele
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Contact, "contact");