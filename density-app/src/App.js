import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import VacancySection from './components/VacancySection';
import WorkWithUs from './components/WorkWithUs';
import PrivacyStatement from './components/PrivacyStatement';
import ProgressBars from './components/ProgressBars';
import Banner from './components/Banner';

function App() {
  return (
    <div>
      <Navbar />
      <Banner/>
      <ProgressBars/>
      <PrivacyStatement/>
      <WorkWithUs/>
      <VacancySection/>
      <Footer/>
    </div>
  );
}

export default App;
