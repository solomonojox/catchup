import React from "react";
import { Link } from "react-router-dom";
import feature from "../../Assets/featureImages/feature";

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: "AI-Powered Video Explanations",
      description: "Understand past questions with AI-generated video lessons.",
      image: feature.ailearning,
    },
    {
      id: 2,
      title: "Offline Learning",
      description: "Download lessons and study anywhere, anytime.",
      image: feature.offline,
    },
    {
      id: 3,
      title: "Live Literacy Classes",
      description: "Interactive live sessions for adult learners.",
      image: feature.liveclass,
    },
    {
      id: 4,
      title: "Easy Sign-ups & Payments",
      description: "Quick registration with multiple payment options.",
      image: feature.pay,
    },
  ];

  return (
    <div className="relative bg-gray-50 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn better with these powerful tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-32 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            to="/features"
            className="inline-flex items-center px-6 py-3 text-lg font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;