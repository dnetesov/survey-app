import React from 'react';
import { Route } from 'react-router-dom';

import HomeView from './views/home';
import SurveyView from './views/survey';
import FinishView from './views/finish';

export default [
  <Route exact path='/' key='home' component={ HomeView } />,
  <Route path='/survey' key='survey' component={ SurveyView } />,
  <Route path='/finish' key='finish' component={ FinishView } />
];
