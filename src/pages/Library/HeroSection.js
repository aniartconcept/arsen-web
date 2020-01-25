import React from 'react';
import { useTranslation } from 'react-i18next';
import SocialLinks from 'components/SocialLinks';

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="section-hero library-section-hero">
      <div className="section-title">{t('LIBRARY')}</div>
      <SocialLinks />
    </section>
  );
};

export default HeroSection;
