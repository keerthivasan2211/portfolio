import React from 'react';
import { HERO_CONTENT } from '../constants';
import { motion } from 'framer-motion';
import profilePic from '../assets/keerthivasan.jpg';
import resume from '../assets/Keerthivasan.pdf';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-100 pb-10 lg:mb-35">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pt-12 pb-6 text-6xl font-thin tracking-tight lg:mt-24 lg:text-7xl"
          >
            Keerthivasan S
          </motion.h1>
          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
          >
            Web Developer
          </motion.span>
          <motion.p
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="my-4 max-w-xl py-4 leading-relaxed text-xl tracking-tighter"
          >
            {HERO_CONTENT}
          </motion.p>
          <motion.a
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            href={resume}
            className="mt-4 px-6 py-3 border-2 rounded-lg font-bold text-white bg-gray-900 hover:bg-gray-700 transition-all"
          >
            Download CV
          </motion.a>
        </div>
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            src={profilePic}
            alt="Keerthivasan S"
            className="w-full max-w-xs lg:max-w-md rounded-xl object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
