import React from 'react';
import { useTranslation } from 'react-i18next';
import SocialLinks from 'components/SocialLinks';

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="section-hero gellery-section-hero">
      <div className="section-title">{t('GALLERY')}</div>

      <SocialLinks />
    </section>
  );
};

export default HeroSection;
