import React, { useEffect, useState } from 'react';
import HeroSection from './Biography/HeroSection';
import i18n from 'locale/i18n';

import Image1 from 'assets/img/bio/bio-2@2x.jpg';
import Image2 from 'assets/img/bio/bio-3@2x.jpg';
import Image3 from 'assets/img/bio/bio-4@2x.jpg';
import Image4 from 'assets/img/bio/bio-5@2x.jpg';
import Image5 from 'assets/img/bio/bio-6@2x.jpg';

const Biography = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/db/bio.json')
      .then(res => {
        return res.json();
      })
      .then(setData);
  }, []);

  const lng = i18n.language;

  return (
    <div className="home-page-content">
      <HeroSection />
      {data ? (
        <section className="section-light bio-items-section">
          <div className="bio-items">
            <div className="bio-item">
              <div className="item-number">01</div>
              <div className="item-title">{data.composer.title[lng]}</div>
              <div className="item-content-wrapper">
                <div className="item-content" dangerouslySetInnerHTML={{ __html: data.composer.content[lng] }}></div>
              </div>
              <div className="item-image-wrapper top-left">
                <img src={Image1} className="item-image" alt="composer" />
              </div>
            </div>
            <div className="bio-item item-inverse">
              <div className="item-number">02</div>
              <div className="item-title">{data.education.title[lng]}</div>
              <div className="item-image-wrapper top-right">
                <img src={Image2} className="item-image" alt="education" />
              </div>
              <div className="item-content-wrapper">
                <div className="item-content">
                  <ul className="educations">
                    {data.education.content.map(({ year, desc }, i) => (
                      <li key={i}>
                        <div className="item-year">{year}</div>
                        <div className="item-desc" dangerouslySetInnerHTML={{ __html: desc[lng] }}></div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bio-item">
              <div className="item-number">03</div>
              <div className="item-title">{data.artsAmbassador.title[lng]}</div>
              <div className="item-content-wrapper">
                <div
                  className="item-content"
                  dangerouslySetInnerHTML={{ __html: data.artsAmbassador.content[lng] }}
                ></div>
              </div>
              <div className="item-image-wrapper  bottom-left">
                <img src={Image3} className="item-image" alt="artsAmbassador" />
              </div>
            </div>

            <div className="bio-item item-inverse">
              <div className="item-number">04</div>
              <div className="item-title">{data.honorsPrizes.title[lng]}</div>
              <div className="item-image-wrapper top-right">
                <img src={Image4} className="item-image" alt="honorsPrizes" />
              </div>
              <div className="item-content-wrapper">
                <div
                  className="item-content"
                  dangerouslySetInnerHTML={{ __html: data.honorsPrizes.content[lng] }}
                ></div>
              </div>
            </div>

            <div className="bio-item">
              <div className="item-number">05</div>
              <div className="item-title">{data.socialActivity.title[lng]}</div>
              <div className="item-content-wrapper">
                <div
                  className="item-content"
                  dangerouslySetInnerHTML={{ __html: data.socialActivity.content[lng] }}
                ></div>
              </div>
              <div className="item-image-wrapper top-left">
                <img src={Image5} className="item-image" alt="socialActivity" />
              </div>
            </div>
          </div>
        </section>
      ) : (
        'loading...'
      )}
    </div>
  );
};

export default Biography;
