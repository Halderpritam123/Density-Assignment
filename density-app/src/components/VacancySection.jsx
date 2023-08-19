import React from 'react';
import { useTrail, animated } from 'react-spring';

const vacancies = [
  {
    title: 'Frontend Developer',
    department: 'Software Development',
    location: 'Remote',
    description: 'Join our team as a Frontend Developer to build modern and responsive user interfaces using the latest web technologies.',
  },
  {
    title: 'Backend Developer',
    department: 'Software Development',
    location: 'New York, NY',
    description: 'Looking for a Backend Developer to design and implement scalable and efficient server-side applications.',
  },
  {
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'San Francisco, CA',
    description: 'We are seeking a talented UI/UX Designer to create intuitive and visually stunning user experiences for our products.',
  },
  // Add more vacancies...
];

const VacancySection = () => {
  const trail = useTrail(vacancies.length, {
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 300,
  });

  return (
    <section className="bg-white-100 py-12" style={{ paddingRight: '2%', paddingLeft: '2%' }}>
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold mb-6">Open Vacancies</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {trail.map((style, index) => (
            <animated.div
              key={index}
              className="relative group bg-[#FCE4EC] rounded-md p-6 transform hover:scale-105 transition duration-300 ease-in-out px-4"
              style={style}
            >
              <h3 className="text-lg font-semibold mb-2">{vacancies[index].title}</h3>
              <p className="text-gray-600">{vacancies[index].department}</p>
              <p className="text-gray-600">{vacancies[index].location}</p>
              <p className="text-sm text-gray-500 mt-4">{vacancies[index].description}</p>
              <button className="hidden bg-black text-white px-4 py-2 rounded-md absolute bottom-4 left-4 transition duration-300 ease-in-out transform hover:scale-105 group-hover:block">
                Apply Now
              </button>
            </animated.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VacancySection;
