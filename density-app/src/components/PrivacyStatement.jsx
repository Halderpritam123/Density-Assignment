import React from "react";

const PrivacyStatement = () => {
  return (
    <div className="bg-gray-100 py-8 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto text-center">
        <p className="text-gray-600 mt-2">We take privacy seriously</p>
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">
          Before You Get Started
        </h2>
        <p className="text-gray-600 mb-4">
          "We won't share your answers with anyone (and won't ever tell you
          which friends said what about you)"
        </p>
        <p className="text-gray-600 mb-4">
          <span className="font-semibold">With love,</span>{" "}
          <span className="italic">Pritam Hader</span>
        </p>
        <button className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-md transition duration-300 ease-in-out">
          Start a Test
        </button>
        <p className="text-gray-600 mt-2">Take only 5 minutes</p>
      </div>
    </div>
  );
};

export default PrivacyStatement;
