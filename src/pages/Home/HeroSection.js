import React from 'react';
import LangSwitch from 'components/LangSwitch';
import SocialLinks from 'components/SocialLinks';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();
  const letters = t('HOME_HERO_CAPTION').split('');

  return (
    <section className="section-hero home-section-hero">
      <LangSwitch />
      <div className="section-caption">
        {letters.map((l, i) => (
          <span key={i}>{l}</span>
        ))}
      </div>
      <SocialLinks />
    </section>
  );
};

export default HeroSection;
