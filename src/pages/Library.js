import React, { useEffect } from 'react';
import HeroSection from './Library/HeroSection';
import { Route, Switch } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

import Recordings from './Library/Recordings';
import Works from './Library/Works';
import Media from './Library/Media';
import Events from './Library/Events';
import LibraryNav from './Library/LibraryNav';

const Library = ({ history }) => {
  useEffect(() => {
    if (history.location.pathname.includes('/library/')) {
      const header = document.querySelector('.page-header');
      scroll.scrollTo(window.innerHeight - header.offsetHeight);
    }
  }, [history.location.pathname]);

  return (
    <div className="library-page-content">
      <HeroSection />
      <LibraryNav />
      <div className="library-content-items">
        <Switch>
          <Route exact path="/library/recordings" component={Recordings} />
          <Route exact path="/library/works" component={Works} />
          <Route exact path="/library/media" component={Media} />
          <Route exact path="/library/events" component={Events} />
        </Switch>
      </div>
    </div>
  );
};

export default Library;
