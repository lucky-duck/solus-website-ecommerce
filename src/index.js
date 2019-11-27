import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import LogRocket from 'logrocket';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { envIsProduction } from './utils/utils';

if (envIsProduction()) {
  LogRocket.init('1aby2t/solus');
}

function render() {
  ReactDOM.render(<App />, document.getElementById('react-ecommerce'));
}

render();

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp);
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
