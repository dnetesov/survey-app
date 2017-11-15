import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import routes from '../routes';


export default () => {
  return (
    <Router>
      <div>
        { routes }
      </div>
    </Router>
  );
};
