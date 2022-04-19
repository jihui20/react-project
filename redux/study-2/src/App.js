import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './common/Router';
import GlobalStyle from './assets/style/GlobalStyle';

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  );
}
