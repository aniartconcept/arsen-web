import React from 'react';
import { useTranslation } from 'react-i18next';
import SocialLinks from 'components/SocialLinks';
import Image from 'assets/img/bio/bio-1@2x.jpg';

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="section-hero bio-section-hero">
      <div className="section-title">{t('BIOGRAPHY')}</div>
      <div className="section-caption">
        <h1 dangerouslySetInnerHTML={{ __html: t('BIO_HERO_TITLE') }}></h1>
        <p>{t('BIO_HERO_DESC')}</p>
      </div>
      <div className="section-image" style={{ backgroundImage: `url(${Image})` }}></div>
      <SocialLinks />
    </section>
  );
};

export default HeroSection;
