import React from 'react';
import { Router as BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';


import RouterConfiguration from 'configurations/router';
import 'styles/index.scss';
import Header from 'components/header';


const App = () => (
    <BrowserRouter history={ createBrowserHistory() }>
      <Header />
      <RouterConfiguration />
    </BrowserRouter>
  );

export default App;
