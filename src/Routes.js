import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Auth from './Auth';
import Companies from './Companies';
import CompanyDetail from './CompanyDetail';
import Jobs from './Jobs';

const Routes = ({ setToken }) => (
  <Switch>
    <Route path="/companies/:handle">
      <CompanyDetail />
    </Route>
    <Route exact path="/companies">
      <Companies />
    </Route>
    <Route exact path="/jobs">
      <Jobs />
    </Route>
    <Route exact path="/login">
      <Auth setToken={setToken} />
    </Route>
    <Route exact path="/profile">
      {/* Profile */}
      <p>User profile form</p>
    </Route>
    <Route exact path="/">
      {/* Home */}
      <p>Home Page</p>
    </Route>
    <Redirect to="/" />
  </Switch>
)


export default Routes;