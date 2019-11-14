import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import data from 'db/highlights-db';
import { chunk } from 'services/helpers';
import ArticleMedia from 'components/ArticleMedia';

const slides = chunk(data, 3);

const HighlightsSection = () => {
  const { t } = useTranslation();
  const settings = {
    dots: true,
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
                <ArticleMedia key={index} data={item} />
              ))}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HighlightsSection;
