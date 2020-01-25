import React from 'react';
import { useTranslation } from 'react-i18next';
const ContactsSection = () => {
  const { t } = useTranslation();
  return (
    <section className="contacts-section">
      <div className="section-content">
        <div className="section-title">{t('CONTACTS')}</div>
        <ul>
          <li>
            <i className="icon icon-location"></i>
            <a href="https://goo.gl/maps/T82WAKhvHDM9tSBs8" target="_blank" rel="noopener noreferrer">
              {t('CONTACT_ADDRESS')}
            </a>
          </li>
          <li>
            <i className="icon icon-mail"></i>
            <a href="mailto:info@arsenbabajanyan.com">info@arsenbabajanyan.com</a>
          </li>
          <li>
            <i className="icon icon-tel"></i>
            <a href="tel:+37496049674">+374 96 04 96 74</a>
          </li>
        </ul>
      </div>
      <div
        className="section-image"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/library/contacts/1.jpg)` }}
      ></div>
    </section>
  );
};

export default ContactsSection;
