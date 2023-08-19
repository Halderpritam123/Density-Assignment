import React from "react";
import "./ProgressBars.css"; // Import your CSS file for styling

const ProgressBars = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto text-center" style={{ backgroundColor: "#E8F5E9", paddingRight: "11%",paddingLeft:"11%", borderRadius: "10px" }}>
        <p className="text-gray-600 mt-2">
          Let your friends, family, and co-workers (anonymously) rate your social skills.
        </p>
        <h2 className="text-4xl font-semibold text-gray-800 mb-8">
          Ever wondered what others think of you?
        </h2>
        
        {/* Progress Bar - Step 1 */}
        <div className="progress-bar">
          <div className="progress-bar-fill step-1"></div>
          <div className="progress-bar-checkpoint step-1"></div>
        </div>
        <div className="progress-bar-options">
          <div className="progress-bar-option">Answer questions on your social skills</div>
          <div className="progress-bar-option">Let others anonymously answer the same questions about you</div>
          <div className="progress-bar-option">Find out where you and others see things the same way - and where not!</div>
        </div>
        
        {/* Progress Bar - Step 2 */}
        <div className="progress-bar mt-8">
          <div className="progress-bar-fill step-2"></div>
          <div className="progress-bar-checkpoint step-2"></div>
        </div>
        <div className="progress-bar-options">
          <div className="progress-bar-option">You</div>
          <div className="progress-bar-option">Anonymous 1</div>
          <div className="progress-bar-option">Anonymous 2</div>
          <div className="progress-bar-option">Anonymous 3</div>
        </div>
      </div>
    </section>
  );
};

export default ProgressBars;
