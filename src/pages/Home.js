import React, { useEffect } from 'react';

import HeroSection from './Home/HeroSection';
import UpcomingConcertsSection from './Home/UpcomingConcertsSection';
import HighlightsSection from './Home/HighlightsSection';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home-page-content">
      <HeroSection />
      <HighlightsSection />
      {/*<UpcomingConcertsSection />*/}
      {/*<ContactsSection />*/}
    </div>
  );
};

export default Home;
