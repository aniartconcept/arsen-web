import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import data from 'db/highlights-db';
import { chunk } from 'services/helpers';
import ArticleHighlights from 'components/ArticleHighlights';
import { useWindowSize } from 'services/hooks';

const HighlightsSection = () => {
  const { isMobile } = useWindowSize();
  const slides = chunk(data, isMobile ? 1 : 3);
  const { t } = useTranslation();

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
    <section className="highlights-section">
      <h2 className="section-title">{t('HIGHLIGHTS')}</h2>
      <div className="slider-container">
        <Slider className="concerts-slider" {...settings}>
          {slides.map((slide, i) => (
            <div className="slider-item" key={i}>
              {slide.map((item, index) => (
                <ArticleHighlights key={index} data={item} />
              ))}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HighlightsSection;
