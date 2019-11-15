import React, { useEffect } from 'react';

import HeroSection from './Home/HeroSection';
import UpcomingConcertsSection from './Home/UpcomingConcertsSection';
import HighlightsSection from './Home/HighlightsSection';
import ContactsSection from './Home/ContactsSection';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
