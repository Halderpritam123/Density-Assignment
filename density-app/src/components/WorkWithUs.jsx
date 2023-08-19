import React from "react";
import { FiUser, FiBriefcase } from "react-icons/fi";
import "./WorkUs.css"
const WorkWithUs = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Left Section */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 ease-in-out">
            <h2 className="text-4xl font-semibold text-indigo-800 mb-8">Work with Us</h2>
            <div className="flex items-center mb-4">
              <FiUser className="text-3xl mr-2 text-indigo-600" />
              <h3 className="text-xl font-semibold text-gray-800">About Us</h3>
            </div>
            <p className="text-gray-600 mb-4">
              <span className="text-indigo-600 font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span> Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              <span className="text-indigo-600 font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span> Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
            <div className="flex items-center">
              <FiBriefcase className="text-3xl mr-2 text-indigo-600" />
              <h3 className="text-xl font-semibold text-gray-800">Our Products</h3>
            </div>
            <p className="text-gray-600">
              <span className="text-indigo-600 font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span> Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              <span className="text-indigo-600 font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span> Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
          </div>
          {/* Right Section */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 ease-in-out">
            <h2 className="text-4xl font-semibold text-indigo-800 mb-8">Ahead</h2>
            <div className="overflow-y-auto max-h-96 custom-scrollbar">
              {/* Dummy Scrollable Boxes */}
              {[...Array(10)].map((_, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-lg p-4 mb-4 hover:bg-gray-50 transition duration-300 ease-in-out"
                >
                  <h3 className="text-lg font-semibold text-indigo-800 mb-2">Option {index + 1}</h3>
                  <p className="text-gray-600">
                    <span className="text-indigo-600 font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span> Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
