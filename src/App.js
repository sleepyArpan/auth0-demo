import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SiteHeader from './components/SiteHeader';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className='app'>
        {/* site header */}
        <SiteHeader />

        {/* routes */}
        <Switch>
          <PrivateRoute path='/dashboard'>
            <Dashboard />
          </PrivateRoute>
          <Route path='/' exact={true}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
