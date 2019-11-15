import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// Pages
import Home from 'pages/Home';
import Biography from 'pages/Biography';
import Gallery from 'pages/Gallery';
import Contacts from 'pages/Contacts';
import Footer from 'components/Footer';

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
      <CSSTransition key={getKye(location)} timeout={{ enter: 1000, exit: 1000 }} classNames="page-animate">
        <div className="page-content">
          <Switch location={location}>
            <Route path="/gallery" component={Gallery} />
            <Route exact path="/biography" component={Biography} />
            <Route exact path="/contacts" component={Contacts} />
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
