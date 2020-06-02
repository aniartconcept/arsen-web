import React from 'react';

import SocialLinks from 'components/SocialLinks';
import { useTranslation } from 'react-i18next';
import { useWindowSize } from 'services/hooks';
import Section from 'react-div-100vh';

const HeroSection = () => {
  const { t } = useTranslation();
  const { isMobile } = useWindowSize();
  const letters = t('HOME_HERO_CAPTION').split('');
  const openHeader = () => {
    const toggler = document.querySelector('.header-menu-toggle');
    toggler.click();
  };
  return (
    <Section className="section-hero home-section-hero">
      <div className="section-caption" onClick={openHeader}>
        {letters.map((l, i) => (
          <span key={i}>{l}</span>
        ))}
      </div>
      {!isMobile && <SocialLinks />}
    </Section>
  );
};

export default HeroSection;
