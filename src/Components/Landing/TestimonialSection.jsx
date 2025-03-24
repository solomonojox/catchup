import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import assets from '../../Assets/assets';

const testimonials = [
    {
        quote: "Catchup Education helped me ace my WAEC! The AI instructor is amazing.",
        author: "Aisha O.",
        image: "https://via.placeholder.com/100", // Placeholder image URL
    },
    {
        quote: "Finally, I can learn to read and write as an adult. Best decision ever!",
        author: "Mr. Ade",
        image: "https://via.placeholder.com/100", // Placeholder image URL
    },
];

const TestimonialSection = () => {
    return (
        <div className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-8">Real Success Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-lg relative">
                            {/* Avatar and Quote */}
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 rounded-full">
                                    <img
                                        src={assets.testimony1}
                                        alt={testimonial.author}
                                        className="w-16 h-16 rounded-full object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <FaQuoteLeft className="text-gray-300 text-2xl mb-2" />
                                    <p className="text-lg italic text-gray-700 mb-6">
                                        {testimonial.quote}
                                    </p>
                                    <FaQuoteRight className="text-gray-300 text-2xl absolute bottom-4 right-4" />
                                </div>
                            </div>
                            {/* Author Name */}
                            <p className="text-right font-semibold text-gray-900 mt-4">– {testimonial.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;