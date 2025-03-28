import React from "react";
import { motion } from "framer-motion";
import { FaCircleCheck } from "react-icons/fa6";

const pricingPlans = [
    {
        title: "Common Entrance",
        price: "₦1,000",
        duration: "/subject/year",
        features: ["App access", "AI instructor", "Offline use", "Download all subject for ₦5,000/year"],
        bgGradient: "bg-gradient-to-r from-purple-500 to-purple-500",
        buttonColor: "bg-purple-600 hover:bg-purple-800",
        ctaText: "Get the App",
        checkColor: 'text-purple-600'
    },
    {
        title: "WAEC & GCE",
        price: "₦1,000",
        duration: "/subject/year",
        features: ["App access", "AI instructor", "Offline use", "Download all subject for ₦5,000/year"],
        bgGradient: "bg-gradient-to-r from-purple-500 to-purple-500",
        buttonColor: "bg-purple-600 hover:bg-purple-800",
        ctaText: "Get the App",
        checkColor: 'text-purple-600'
    },
    {
        title: "Adult Literacy",
        price: "₦10,000",
        duration: "/month",
        features: ["Live classes", "Interactive learning"],
        bgGradient: "bg-gradient-to-r from-green-500 to-emerald-500",
        buttonColor: "bg-green-600 hover:bg-green-800",
        ctaText: "Join Now",
        checkColor: 'text-green-600'
    },
];

const PricingSection = () => {
    return (
        <div className="flex flex-col items-center flex-wrap gap-8 py-12 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
            <motion.h1
                className="text-[3vmax] md:text-[2vmax] font-bold text-gray-900"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Choose Your Plan
            </motion.h1>

            <div className="flex justify-center flex-wrap gap-8 py-8">
                {pricingPlans.map((plan, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className={`relative rounded-lg shadow-xl overflow-hidden w-[320px] transition-all duration-300`}
                    >
                        {/* Background Gradient */}
                        <div className={`${plan.bgGradient} p-6 h-24 text-center text-white`}>
                            <h2 className="text-3xl font-bold">{plan.title}</h2>
                        </div>

                        {/* Glassmorphism Pricing Card */}
                        <div className="bg-white/80 h-[340px] backdrop-blur-md p-6 shadow-md rounded-b-lg">
                            <p className="text-4xl font-extrabold text-gray-900 mb-4">
                                {plan.price}
                                <span className="text-lg font-medium text-gray-600">{plan.duration}</span>
                            </p>

                            <ul className="text-left space-y-3 mb-6">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center">
                                        <FaCircleCheck className={`mr-2 ${plan.checkColor} w-[12%]`} />
                                        <span className="w-[88%] text-gray-800 font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`${plan.buttonColor} text-white px-6 py-3 rounded-full transition-all duration-300 shadow-md w-full text-lg font-semibold`}
                            >
                                {plan.ctaText}
                            </button>
                        </div>

                        {/* Decorative Glow Effect */}
                        <div className="absolute -top-6 -left-6 w-24 h-24 bg-white/10 blur-3xl rounded-full"></div>
                        <div className="absolute bottom-6 right-6 w-16 h-16 bg-white/10 blur-2xl rounded-full"></div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default PricingSection;
