import React from "react";

const JoinOurTeam = () => {
  return (
    <section className="bg-blue-50 py-12 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 relative">
          Join Our Team
          <span className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-500"></span>
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 mt-4">
          We offer attractive prospects for fresh graduates as well as for
          experienced professionals to be part of a fast-growing, progressive
          organization. You will have the opportunity to work with our
          multinational business partners and gain the opportunity to work with
          some of the best brands in the world and gain the latest know-how in
          the FMCG business.
        </p>

        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-8">
          We are looking to recruit talented individuals to join our workforce.
          If you are highly motivated, goal-oriented and thrive on challenges,
          do get in touch with us.
        </p>

        {/* Apply Now Button */}
        <button className="bg-blue-900 text-white font-semibold py-3 px-10 hover:bg-blue-700 transition duration-300">
          APPLY NOW
        </button>
      </div>
    </section>
  );
};

export default JoinOurTeam;
