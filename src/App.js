import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Routes } from './routes';
import '../src/assets/styles/main.scss'

const App = () => {
  const renderSwitch = () => (
    <Switch>
      {Routes.map(route => {
        return (
          <Route
            key={route.path}
            exact={route.isExact}
            path={route.path}
            component={route.component}
          />
        );
      })}
    </Switch>
  );

  return (
    <Suspense fallback={<div>Loading...</div>} maxDuration={5000}>
      <Router>
        <div id='main'>
          {renderSwitch()}
        </div>
      </Router>
    </Suspense>
  );
};

export default App;