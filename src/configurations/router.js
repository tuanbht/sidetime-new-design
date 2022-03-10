import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import HomePage from 'containers/home-page';
import NotFound from 'containers/not-found';
import { ROOT_PATH, NOT_FOUND_PATH } from 'constants/route-path';

export const Router = () => (
  <Switch>
    <Route exact path={ ROOT_PATH } component={ HomePage } />
    <Route exact path={ NOT_FOUND_PATH } component={ NotFound } />
    <Route render={ () => <Redirect to={ NOT_FOUND_PATH } /> } />
  </Switch>
);

export default Router;
