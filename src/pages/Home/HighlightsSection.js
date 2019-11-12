import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import data from 'db/highlights-db';
import i18n from 'locale/i18n';
import { chunk } from 'services/helpers';
import { formatDate } from 'services/formatDate';

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
            <div className="slider-item " key={i}>
              {slide.map((item, index) => (
                <a
                  href={item.url}
                  className="slide-article media-article"
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="article-thumb">
                    <img src={process.env.PUBLIC_URL + item.thumb} alt="" />
                  </div>
                  <div className="article-body">
                    <h5 className="article-title">{item.title[i18n.language]}</h5>
                    <p className="article-desc">{item.desc[i18n.language]}</p>
                    {!!item.date && <span className="article-date">{formatDate(item.date)}</span>}
                  </div>
                </a>
              ))}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HighlightsSection;
