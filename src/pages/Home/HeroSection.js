import React from 'react';
import LangSwitch from 'components/LangSwitch';
import SocialLinks from 'components/SocialLinks';
import { useTranslation } from 'react-i18next';
import { useWindowSize } from 'services/hooks';

const HeroSection = () => {
  const { t } = useTranslation();
  const { isMobile } = useWindowSize();
  const letters = t('HOME_HERO_CAPTION').split('');

  return (
    <section className="section-hero home-section-hero">
      {!isMobile && <LangSwitch />}
      <div className="section-caption">
        {letters.map((l, i) => (
          <span key={i}>{l}</span>
        ))}
      </div>
      {!isMobile && <SocialLinks />}
    </section>
  );
};

export default HeroSection;
