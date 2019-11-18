import React, { useEffect } from 'react';
import HeroSection from './Gallery/HeroSection';
import { Route, Switch, Redirect } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

import Videos from './Gallery/Videos';
import Recording from './Gallery/Recording';
import Media from './Gallery/Media';
import Events from './Gallery/Events';
import GalleryNav from './Gallery/GalleryNav';

const Gallery = ({ history }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      if (history.location.pathname.includes('/gallery')) {
        const header = document.querySelector('.page-header');
        scroll.scrollTo(window.innerHeight - header.offsetHeight);
      }
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return (
    <div className="gallery-page-content">
      <HeroSection />
      <GalleryNav />
      <div className="gallery-content-items">
        <Switch>
          <Route exact path="/gallery/videos" component={Videos} />
          <Route exact path="/gallery/recording" component={Recording} />
          <Route exact path="/gallery/media" component={Media} />
          <Route exact path="/gallery/events" component={Events} />
        </Switch>
      </div>
    </div>
  );
};

export default Gallery;
