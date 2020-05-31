import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import Header from 'components/Header';
import Main from 'containers/Main';

const App = () => {
  return (
    <Router>
      <Header />
      <Main />
    </Router>
  );
};
export default App;