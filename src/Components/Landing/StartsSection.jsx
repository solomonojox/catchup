import React from "react";

export const StatsSection = () => {
  return (
    <div className="bg-[#6366F1] text-white lg:rounded-3xl max-w-6xl mx-auto my-10 px-6 md:px-10 py-20 md:text-center relative overflow-hidden">
      {/* SVG Background Pattern */}
      <BackgroundPattern />

      {/* Main Content */}
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          The revolutionary app everyone is talking about
        </h2>

        {/* Stats */}
        <div className="flex flex-wrap md:flex-row md:justify-center gap-4 mg:gap-10 md:gap-20 mt-8">
          <div>
            <h3 className="text-4xl font-bold">5m+</h3>
            <p className="text-lg opacity-80">App Downloads</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">7m+</h3>
            <p className="text-lg opacity-80">Questions Attempted</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">14m+</h3>
            <p className="text-lg opacity-80">Lessons Watched</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const BackgroundPattern = () => {
    return (
      <svg
        viewBox="0 0 800 400"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full opacity-20"
      >
        <defs>
          <radialGradient id="grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6B6EF9" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="400" cy="200" r="300" fill="url(#grad)" />
        <circle cx="400" cy="200" r="220" fill="none" stroke="white" strokeWidth="10" opacity="0.2" />
        <circle cx="400" cy="200" r="140" fill="none" stroke="white" strokeWidth="10" opacity="0.2" />
        <circle cx="400" cy="200" r="60" fill="none" stroke="white" strokeWidth="10" opacity="0.2" />
      </svg>
    );
  };  