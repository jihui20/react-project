import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';

ReactDOM.render(
  // <React.StrictMode> 자바스크립트에서 use strict와 같은 의미 / 같이 배포 되어도 사용자에게는 보여지지 않아서 큰 상관 없음
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);
