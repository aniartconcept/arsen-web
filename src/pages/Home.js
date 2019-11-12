import React from 'react';

import HeroSection from './Home/HeroSection';
import UpcomingConcertsSection from './Home/UpcomingConcertsSection';
import HighlightsSection from './Home/HighlightsSection';
import ContactsSection from './Home/ContactsSection';

const Home = () => {
  return (
    <div className="home-page-content">
      <HeroSection />
      <UpcomingConcertsSection />
      <HighlightsSection />
      <ContactsSection />
    </div>
  );
};

export default Home;
