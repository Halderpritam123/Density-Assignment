import React from 'react';

const vacancies = [
  {
    title: 'Frontend Developer',
    department: 'Software Development',
    location: 'Remote',
  },
  {
    title: 'Backend Developer',
    department: 'Software Development',
    location: 'New York, NY',
  },
  {
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'San Francisco, CA',
  },
  // Add more vacancies...
];

const VacancySection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Open Vacancies</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {vacancies.map((vacancy, index) => (
            <div
              key={index}
              className="bg-white rounded-md p-6 shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
            >
              <h3 className="text-lg font-semibold mb-2">{vacancy.title}</h3>
              <p className="text-gray-600">{vacancy.department}</p>
              <p className="text-gray-600">{vacancy.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VacancySection;
