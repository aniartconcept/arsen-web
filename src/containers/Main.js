import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// Pages
import Home from 'pages/Home';
import Biography from 'pages/Biography';
import Gallery from 'pages/Gallery';
import Recording from 'pages/Recording';
import Footer from 'components/Footer';

const Main = ({ location }) => {
  return (
    <TransitionGroup className="transition-group">
      <CSSTransition
        key={location.pathname.split('/')[0]}
        timeout={{ enter: 1000, exit: 1000 }}
        classNames="page-animate"
      >
        <div className="page-content">
          <Switch location={location}>
            <Route path="/gallery" component={Gallery} />
            <Route exact path="/biography" component={Biography} />
            <Route exact path="/recording" component={Recording} />
            <Route exact path="/" component={Home} />
            <Redirect to="/" />
          </Switch>
          <Footer />
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default withRouter(Main);
