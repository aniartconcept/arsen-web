import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// Pages
import Home from 'pages/Home';
import Biography from 'pages/Biography';
import Library from 'pages/Library';
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
      <CSSTransition key={getKye(location)} timeout={{ enter: 800, exit: 800 }} classNames="page-animate">
        <div className="page-content">
          <Switch location={location}>
            <Route path="/library" component={Library} />
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
