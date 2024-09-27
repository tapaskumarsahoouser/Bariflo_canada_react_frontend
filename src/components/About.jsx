import React from "react";

function About() {
  const aboutUsStyle = {
    fontFamily: "Poppins, sans-serif",
    fontSize: "16px",
    color: "#0369A1",
  };

  const breakBarrierStyle = {
    color: "#172554",
    fontSize: "36px",
  };

  const pStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '18px',
  };

  const sectionTitleStyle = "text-2xl font-bold text-center text-blue-600 mb-4";
  // const aboutTextStyle = "text-lg leading-relaxed text-center text-black mb-6";

  return (
    <div className="bg-white shadow-lg rounded-lg border border-gray-200 p-6 md:p-10 lg:mx-16 my-5">
      <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
        <img
          src="./aqua.jpg"
          alt="bariflo-cybernetics"
          className="w-[614px] h-[508px] rounded-lg shadow-md"
        />
        <div className="flex-1 space-y-4">
          <h3 style={aboutUsStyle}>About Us ~</h3>
          <h3 style={breakBarrierStyle}>Let's Break the Barrier</h3>
          <h2 className={sectionTitleStyle} style={{ color: "#0369A1" }}>
            Bariflo Cybernetics
          </h2>
          <p className={pStyle} style={{ fontFamily: "Poppins, sans-serif" }}>
            Bariflo Cybernetics is an industry 4.0 compliant startup that has developed a water body management system based on Fluid dynamics, IOT, robotics, and AI for aqua-farm management and urban water-body management. We offer technological solutions for aquafarmers, co-operatives, villages, communities, cities, and industries at a variety of scales.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
