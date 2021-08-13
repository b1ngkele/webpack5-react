// import React from 'react';
// import ReactDOM from 'react-dom';
import dva from 'dva';
import createLoading from 'dva-loading';
// import App from './app';
import 'antd/dist/antd.css';

if (module && module.hot) {
  module.hot.accept();
}
// 这种为hash路由展示方式
const createHistory = require('history').createHashHistory;
// 1. Initialize
const app = dva({
  history: createHistory(),
});
// 2. Plugins
app.use(createLoading());
// 3. Model
app.model(require('./models/global').default);

// 4.Router
app.router(require('./app').default);

// 5.Start
app.start('#root');
// ReactDOM.render(<App />, document.querySelector('#root'));
