import React from "react";
import { FaInstagram, FaTiktok, FaTwitter, FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";
// import logo from "../assets/logo.png"; // Adjust path as needed

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-6 text-center">
                {/* Logo Section */}
                <div className="mb-6 flex justify-center">
                    {/* <img src={logo} alt="Catchup Logo" className="h-12" /> */}
                    <h1 className="text-2xl font-bold">CatchupApp</h1>
                </div>
                
                {/* Quick Links */}
                <div className="mb-6 flex justify-center space-x-6 text-gray-400">
                    <Link to="/" className="hover:text-white transition">Home</Link>
                    <Link to="/features" className="hover:text-white transition">Features</Link>
                    <Link to="/pricing" className="hover:text-white transition">Pricing</Link>
                    <Link to="/testimonials" className="hover:text-white transition">Testimonials</Link>
                </div>

                {/* Social Media Links */}
                <div className="flex justify-center space-x-6 mb-4">
                    <a
                        href="https://www.instagram.com/catchup_learning?igsh=MTE3Z2ltNnc0cmhuaw=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-400 transition"
                    >
                        <FaInstagram size={28} />
                    </a>
                    <a
                        href="https://www.tiktok.com/@catchup_education?_t=ZM-8uvb5m83pTz&_r=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 transition"
                    >
                        <FaTiktok size={28} />
                    </a>
                    <a
                        href="https://x.com/CatchupApp?t=tQewyiqG8FGC7m2bzozpdg&s=09"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition"
                    >
                        <FaTwitter size={28} />
                    </a>
                    <a
                        href="tel:07013567846"
                        className="hover:text-green-400 transition"
                    >
                        <FaPhone size={28} />
                    </a>
                </div>

                {/* Copyright Text */}
                <p className="text-sm text-gray-400 mt-4">
                    Copyright © {new Date().getFullYear()} <span className="text-white font-semibold">CatchupApp</span>. All rights reserved.
                </p>
                <p className="text-xs text-gray-500 mt-2 max-w-2xl mx-auto leading-relaxed">
                    This application and its associated documentation are protected by copyright law and international treaties. Unauthorized reproduction or distribution of this application, or any portion of it, may result in severe civil and criminal penalties and will be prosecuted to the maximum extent possible under the law.
                </p>
            </div>
        </footer>
    );
};

export default Footer;