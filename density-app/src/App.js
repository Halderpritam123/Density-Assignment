import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import VacancySection from './components/VacancySection';
import WorkWithUs from './components/WorkWithUs';
import PrivacyStatement from './components/PrivacyStatement';
import ProgressBars from './components/ProgressBars';
import Banner from './components/Banner';
import EmotionalIntelligence from './components/EmotionalIntelligence';
import Ahead from './components/Ahead';
import Carousel from './components/Carousel';


function App() {
  return (
    <div>
      <Navbar />
      <Banner/>
      <EmotionalIntelligence/>
      <Carousel/>
      <Ahead/>
      <ProgressBars/>
      <PrivacyStatement/>
      <WorkWithUs/>
      <VacancySection/>
      <Footer/>
    </div>
  );
}

export default App;
