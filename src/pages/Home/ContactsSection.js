import React from 'react';
import { useTranslation } from 'react-i18next';
const ContactsSection = () => {
  const { t } = useTranslation();
  return (
    <section className="contacts-section">
      <div className="section-title">{t('CONTACTS')}</div>
    </section>
  );
};

export default ContactsSection;
