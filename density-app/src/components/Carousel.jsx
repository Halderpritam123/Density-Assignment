import React, { useState } from "react";

const CarouselItem = ({ emoji, heading, paragraph }) => (
  <div className="bg-white p-4 shadow-md rounded-lg text-center">
    <div className="text-3xl mb-2">{emoji}</div>
    <h3 className="text-xl font-semibold mb-2">{heading}</h3>
    <p className="text-gray-700">{paragraph}</p>
  </div>
);

const Carousel = () => {
  const dummyData = [
    {
      emoji: "😀",
      heading: "Positive Attitude",
      paragraph: "Keep a positive attitude and spread joy around you.",
    },
    {
      emoji: "🌟",
      heading: "Personal Growth",
      paragraph: "Invest in self-improvement to unlock your full potential.",
    },
    {
      emoji: "🧘",
      heading: "Mindfulness",
      paragraph: "Practice mindfulness to reduce stress and stay present.",
    },
    {
      emoji: "🎯",
      heading: "Goal Setting",
      paragraph: "Set clear goals to drive your progress and achievement.",
    },
    {
      emoji: "😀",
      heading: "Positive Attitude",
      paragraph: "Keep a positive attitude and spread joy around you.",
    },
    {
      emoji: "🌟",
      heading: "Personal Growth",
      paragraph: "Invest in self-improvement to unlock your full potential.",
    },
    {
      emoji: "🧘",
      heading: "Mindfulness",
      paragraph: "Practice mindfulness to reduce stress and stay present.",
    },
    {
      emoji: "🎯",
      heading: "Goal Setting",
      paragraph: "Set clear goals to drive your progress and achievement.",
    }
    // Add more data items
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = dummyData.slice(currentIndex, currentIndex + 4);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(dummyData.length - 4, prevIndex + 1));
  };

  return (
    <div style={{ paddingLeft: "11%", paddingRight: "11%" }}>
      <h2 className="text-4xl font-semibold text-gray-800 mb-4">
        Before You Get Started
      </h2>
      <div className="flex justify-center items-center mt-10" style={{ paddingLeft: "10%", paddingRight: "10%" }}>
        <button
          onClick={handlePrev}
          className="mr-4 p-2 bg-gray-800 text-white rounded"
          disabled={currentIndex === 0}
        >
          Prev
        </button>
        <div className="flex space-x-4 overflow-hidden">
          {visibleItems.map((item, index) => (
            <CarouselItem key={index} {...item} />
          ))}
        </div>
        <button
          onClick={handleNext}
          className="ml-4 p-2 bg-gray-800 text-white rounded"
          disabled={currentIndex === dummyData.length - 4}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
