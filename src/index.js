import React from 'react';

import { hydrate, render } from 'react-dom';

import * as serviceWorker from './serviceWorker';

import 'assets/styles/index.scss';

import './locale/i18n';

import App from './App';

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

serviceWorker.register();
