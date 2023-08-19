import React from 'react';
import './VacancySection.css';
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
    <section className="vacancy-section py-12">
      <div className="container mx-auto">
        <h2 className="section-title">Open Vacancies</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {vacancies.map((vacancy, index) => (
            <div
              key={index}
              className="vacancy-card relative group bg-[#FCE4EC] rounded-md p-6 transform hover:scale-105 transition duration-300 ease-in-out px-4 cursor-pointer animate-fade-in"
            >
              <h3 className="vacancy-title">{vacancy.title}</h3>
              <p className="vacancy-info">{vacancy.department} | {vacancy.location}</p>
              <p className="vacancy-description">{vacancy.description}</p>
              <button className="apply-button hidden absolute bottom-4 left-4 transition duration-300 ease-in-out transform opacity-0 group-hover:opacity-100 animate-button">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VacancySection;