import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import data from 'db/upcoming-concerts-db';
import i18n from 'locale/i18n';
import { chunk } from 'services/helpers';
import { formatDate } from 'services/formatDate';
import { useWindowSize } from 'services/hooks';

const UpcomingConcertsSection = () => {
  const { t } = useTranslation();
  const { isMobile } = useWindowSize();
  const slides = chunk(data, isMobile ? 1 : 3);

  const settings = {
    dots: !isMobile,
    infinite: false,
    arrows: false,
    speed: 1000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div className="slider-paging">
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: i => <div className="paging-item">{i + 1}</div>
  };

  return (
    <section className="upcoming-concerts-section section-light">
      <h2 className="section-title">{t('UPCOMING_CONCERTS')}</h2>
      <div className="slider-container">
        <Slider {...settings}>
          {slides.map((slide, i) => (
            <div className="slider-item" key={i}>
              {slide.map((item, index) => (
                <div className="slide-article" key={index}>
                  <div className="article-body">
                    <span className="article-date">{item.date}</span>
                    <h5 className="article-title">{item.title[i18n.language]}</h5>
                    <p className="article-desc-short" dangerouslySetInnerHTML={{__html: item.desc[i18n.language]}}></p>
                    <div className="article-action-wrapper">
                      <a href={item.url} className="article-action" target="_blank" rel="noopener noreferrer">
                        {t('DETAILS')}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default UpcomingConcertsSection;
