import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// Pages
import Home from 'pages/Home';
import Biography from 'pages/Biography';
import Library from 'pages/Library';
import Footer from 'components/Footer';
import Highlights from '../pages/Highlights';
import HighlightsDetail from '../pages/HighlightsDetail';
import HighlightsDetailComponentSecond from '../components/HighlightsDetailComponentSecond';
import HighlightsDetailComponentThird from '../components/HighlightsDetailComponentThird';

const getKye = ({ pathname, key }) => {
  const parts = pathname.split('/');
  if (parts.length > 2) {
    return parts[0];
  }
  return key;
};
const Main = ({ location }) => {
  return (
    <TransitionGroup className="transition-group">
      <CSSTransition key={getKye(location)} timeout={{ enter: 600, exit: 600 }} classNames="page-animate">
        <div className="page-content">
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route exact path="/biography" component={Biography} />
            <Route exact path="/highlights" component={Highlights} />
            <Route exact path="/highlights/goodbye-bird" component={HighlightsDetail} />
            <Route exact path="/highlights/citedesarts" component={HighlightsDetailComponentSecond} />
            <Route exact path="/highlights/caravaggio" component={HighlightsDetailComponentThird} />
            <Route path="/library" component={Library} />
            <Redirect to="/" />
          </Switch>
          <Footer />
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default withRouter(Main);
