import React from 'react';

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
  return (
    <section className="bg-white-100 py-12" style={{paddingRight:"2%",paddingLeft:"2%"}}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Open Vacancies</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {vacancies.map((vacancy, index) => (
            <div
              key={index}
              className="bg-[#FCE4EC] rounded-md p-6 transform hover:scale-105 transition duration-300 ease-in-out px-4"
            >
              <h3 className="text-lg font-semibold mb-2">{vacancy.title}</h3>
              <p className="text-gray-600">{vacancy.department}</p>
              <p className="text-gray-600">{vacancy.location}</p>
              <p className="text-sm text-gray-500 mt-4">{vacancy.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VacancySection;
