import React, { useEffect } from 'react';

import ContactsSection from './Home/ContactsSection';

const Contacts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="contacts-page-content">
      <ContactsSection />
    </div>
  );
};

export default Contacts;
