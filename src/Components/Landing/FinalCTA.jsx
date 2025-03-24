import React from "react";
import { motion } from "framer-motion";
import { BiBookOpen, BiTimeFive, BiBrain } from "react-icons/bi";

const FinalCTA = () => {
    return (
        <section className="bg-gradient-to-r from-black to-purple-600 text-white text-center py-12 px-6">
            <div className="mx-auto">
                {/* Call to Action Heading */}
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Start Learning Instantly with CatchupApp!
                </motion.h2>

                {/* Key Benefits */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 text-left mb-6">
                    <div className="flex items-center gap-2 border p-4">
                        <BiBookOpen className="text-yellow-300 text-2xl" />
                        <p className="text-lg md:text-xl">Gain access to expert-curated lessons</p>
                    </div>
                    <div className="flex items-center gap-2 border p-4">
                        <BiTimeFive className="text-yellow-300 text-2xl" />
                        <p className="text-lg md:text-xl">Learn at your own pace, anytime, anywhere</p>
                    </div>
                    <div className="flex items-center gap-2 border p-4">
                        <BiBrain className="text-yellow-300 text-2xl" />
                        <p className="text-lg md:text-xl">Improve your skills with interactive AI-based learning</p>
                    </div>
                </div>

                {/* Call to Action Button */}
                <motion.a
                    href="/signup"
                    className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold text-lg px-6 py-3 rounded-full shadow-lg transition-all duration-300 inline-block"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Sign Up Now – Start Learning Instantly!
                </motion.a>
            </div>
        </section>
    );
};

export default FinalCTA;
