import React from 'react';

import HeroSection from './Home/HeroSection';
import UpcomingConcertsSection from './Home/UpcomingConcertsSection';
import HighlightsSection from './Home/HighlightsSection';

const Home = () => {
  return (
    <div className="home-page-content">
      <HeroSection />
      <UpcomingConcertsSection />
      <HighlightsSection />
    </div>
  );
};

export default Home;
