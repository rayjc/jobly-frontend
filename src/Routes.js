import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Auth from './Auth';
import Companies from './Companies';
import CompanyDetail from './CompanyDetail';
import Jobs from './Jobs';
import Profile from './Profile';
import PrivateRoute from './util/PrivateRoute';
import Home from './Home';


const Routes = () => (
  <Switch>
    <PrivateRoute path="/companies/:handle">
      <CompanyDetail />
    </PrivateRoute>
    <PrivateRoute exact path="/companies">
      <Companies />
    </PrivateRoute>
    <PrivateRoute exact path="/jobs">
      <Jobs />
    </PrivateRoute>
    <Route exact path="/login">
      <Auth />
    </Route>
    <PrivateRoute exact path="/profile">
      <Profile />
    </PrivateRoute>
    <Route exact path="/">
      <Home />
    </Route>
    <Redirect to="/" />
  </Switch>
)


export default Routes;