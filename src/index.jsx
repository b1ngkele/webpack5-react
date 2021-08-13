import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import 'antd/dist/antd.css';
import store from './store/index';

if (module && module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
