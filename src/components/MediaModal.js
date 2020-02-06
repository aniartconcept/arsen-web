import React, { useEffect } from 'react';
import Slider from 'react-slick';
import Image from './Image';
import { CSSTransition } from 'react-transition-group';

const MediaModal = ({ items = [], toggle, isVisible }) => {
  const settings = {
    customPaging: function(i) {
      return (
        <span key={i}>
          <Image src={process.env.PUBLIC_URL + items[i].path} alt="" />
        </span>
      );
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <CSSTransition in={isVisible} timeout={{ enter: 2000, exit: 2000 }} unmountOnExit classNames="fade">
      <div className="media-modal">
        <span className="close" onClick={() => toggle()} />
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index}>
              <Image src={process.env.PUBLIC_URL + item.path} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </CSSTransition>
  );
};

export default React.memo(MediaModal);
