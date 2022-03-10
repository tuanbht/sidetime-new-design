import React from 'react';
import { Router as BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import RouterConfiguration from 'configurations/router';

import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => (
    <BrowserRouter history={ createBrowserHistory() }>
      <RouterConfiguration />
    </BrowserRouter>
  );

export default App;
