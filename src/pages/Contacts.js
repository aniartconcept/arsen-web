import React, { useEffect } from 'react';

import HighlightsSection from './Home/HighlightsSection';

const Contacts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="contacts-page-content">
      <HighlightsSection />
    </div>
  );
};

export default Contacts;
