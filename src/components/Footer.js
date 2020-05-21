import React from 'react';
import SocialLinks from './SocialLinks';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="page-footer">
      <span>{t('FOOTER_TEXT_1')}</span>
      <SocialLinks />
      <div>
          <p className="footer-text">{t('FOOTER_TEXT_3')}</p>
      <p className="footer-text">© {t('FOOTER_TEXT_2')}</p>
      </div>

    </footer>
  );
};

export default Footer;
