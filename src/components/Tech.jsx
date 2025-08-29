import React from 'react'
import { RiReactjsLine, RiHtml5Line } from 'react-icons/ri'
import { FaNodeJs, FaCloud, FaCss3Alt } from 'react-icons/fa'
import { SiMongodb, SiJavascript, SiPython, SiJquery, SiDotnet } from 'react-icons/si'
import { MdHttp } from 'react-icons/md'
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Tech = () => {
    return (
        <div className='border-b border-neutral-100 pb-24'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl'>
                Personal & Project Tech Stack
            </motion.h2>

            {/* Tech Grid */}
            <div className="max-w-6xl mx-auto space-y-8">
                
                {/* First Row - 6 logos */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.5 }}
                    className="grid grid-cols-6 gap-6 justify-items-center"
                >
                    {/* HTML */}
                    <motion.div variants={iconVariants(2)} initial="initial" animate="animate"
                        className="rounded-3xl border-2 border-neutral-500 p-4 flex flex-col items-center w-28 h-28">
                        <span className='text-sm font-semibold'>HTML</span>
                        <RiHtml5Line className='text-4xl text-orange-500 mt-2' />
                    </motion.div>

                    {/* CSS */}
                    <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate"
                        className="rounded-3xl border-2 border-neutral-500 p-4 flex flex-col items-center w-28 h-28">
                        <span className='text-sm font-semibold'>CSS</span>
                        <FaCss3Alt className='text-4xl text-blue-600 mt-2' />
                    </motion.div>

                    {/* JavaScript */}
                    <motion.div variants={iconVariants(3)} initial="initial" animate="animate"
                        className="rounded-3xl border-2 border-neutral-500 p-4 flex flex-col items-center w-28 h-28">
                        <span className='text-sm font-semibold'>JavaScript</span>
                        <SiJavascript className='text-4xl text-yellow-500 mt-2' />
                    </motion.div>

                    {/* ReactJS */}
                    <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate"
                        className="rounded-3xl border-2 border-neutral-500 p-4 flex flex-col items-center w-28 h-28">
                        <span className='text-sm font-semibold'>ReactJS</span>
                        <RiReactjsLine className='text-4xl text-blue-500 mt-2' />
                    </motion.div>

                    {/* NodeJS */}
                    <motion.div variants={iconVariants(4)} initial="initial" animate="animate"
                        className="rounded-3xl border-2 border-neutral-500 p-4 flex flex-col items-center w-28 h-28">
                        <span className='text-sm font-semibold'>NodeJS</span>
                        <FaNodeJs className='text-4xl text-green-500 mt-2' />
                    </motion.div>

                    {/* Python */}
                    <motion.div variants={iconVariants(4.5)} initial="initial" animate="animate"
                        className="rounded-3xl border-2 border-neutral-500 p-4 flex flex-col items-center w-28 h-28">
                        <span className='text-sm font-semibold'>Python</span>
                        <SiPython className='text-4xl text-blue-500 mt-2' />
                    </motion.div>
                </motion.div>

                {/* Second Row - 5 logos */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1.5 }}
                    className="grid grid-cols-5 gap-6 justify-items-center"
                >
                    {/* MongoDB */}
                    <motion.div variants={iconVariants(5)} initial="initial" animate="animate"
                        className="rounded-3xl border-2 border-neutral-500 p-4 flex flex-col items-center w-28 h-28">
                        <span className='text-sm font-semibold'>MongoDB</span>
                        <SiMongodb className='text-4xl text-green-500 mt-2' />
                    </motion.div>

                    {/* ASP.NET */}
                    <motion.div variants={iconVariants(5.5)} initial="initial" animate="animate"
                        className="rounded-3xl border-2 border-neutral-500 p-4 flex flex-col items-center w-28 h-28">
                        <span className='text-sm font-semibold'>ASP.NET</span>
                        <SiDotnet className='text-4xl text-purple-600 mt-2' />
                    </motion.div>

                    {/* jQuery */}
                    <motion.div variants={iconVariants(6)} initial="initial" animate="animate"
                        className="rounded-3xl border-2 border-neutral-500 p-4 flex flex-col items-center w-28 h-28">
                        <span className='text-sm font-semibold'>jQuery</span>
                        <SiJquery className='text-4xl text-blue-400 mt-2' />
                    </motion.div>

                    {/* AJAX */}
                    <motion.div variants={iconVariants(6.5)} initial="initial" animate="animate"
                        className="rounded-3xl border-2 border-neutral-500 p-4 flex flex-col items-center w-28 h-28">
                        <span className='text-sm font-semibold'>AJAX</span>
                        <MdHttp className='text-4xl text-gray-600 mt-2' />
                    </motion.div>

                    {/* SaaS */}
                    <motion.div variants={iconVariants(7)} initial="initial" animate="animate"
                        className="rounded-3xl border-2 border-neutral-500 p-4 flex flex-col items-center w-28 h-28">
                        <span className='text-sm font-semibold'>SaaS</span>
                        <FaCloud className='text-4xl text-gray-500 mt-2' />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Tech
