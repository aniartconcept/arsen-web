import React from 'react';
import { useTranslation } from 'react-i18next';
import SocialLinks from 'components/SocialLinks';
import Section from 'react-div-100vh';

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <Section className="section-hero library-section-hero">
      <div className="section-title">{t('LIBRARY')}</div>
      <SocialLinks />
    </Section>
  );
};

export default HeroSection;
