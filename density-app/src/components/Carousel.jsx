import React from 'react';

const Carousel = () => {
  const carouselItems = [
    { id: 1, emoji: '😀', heading: 'Card 1', content: 'This is the content of card 1.' },
    { id: 2, emoji: '🚗', heading: 'Card 2', content: 'This is the content of card 2.' },
    { id: 3, emoji: '🌟', heading: 'Card 3', content: 'This is the content of card 3.' },
    { id: 4, emoji: '🎉', heading: 'Card 4', content: 'This is the content of card 4.' },
    { id: 5, emoji: '🌈', heading: 'Card 5', content: 'This is the content of card 5.' },
    { id: 6, emoji: '🔥', heading: 'Card 6', content: 'This is the content of card 6.' },
    { id: 7, emoji: '🌊', heading: 'Card 7', content: 'This is the content of card 7.' },
    { id: 8, emoji: '🌺', heading: 'Card 8', content: 'This is the content of card 8.' },
  ];

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full p-4 sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2">
        <div className="relative overflow-hidden">
          <div className="flex -mx-2 transition-transform duration-300 ease-in-out">
            {carouselItems.map((item) => (
              <div key={item.id} className="px-2 w-full sm:w-1/2 md:w-1/4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-center mb-2">{item.emoji}</div>
                  <h3 className="text-lg font-semibold mb-1">{item.heading}</h3>
                  <p className="text-gray-600">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
