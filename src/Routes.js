import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Companies from './Companies';
import CompanyDetail from './CompanyDetail';
import Jobs from './Jobs';

const Routes = () => (
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
      {/* Login */}
      <p>Login/Signup Form</p>
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