import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import VacancySection from './components/VacancySection';
import WorkWithUs from './components/WorkWithUs';
import PrivacyStatement from './components/PrivacyStatement';

function App() {
  return (
    <div>
      <Navbar />
      <PrivacyStatement/>
      <WorkWithUs/>
      <VacancySection/>
      <Footer/>
    </div>
  );
}

export default App;
