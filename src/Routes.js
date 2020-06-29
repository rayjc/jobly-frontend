import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Routes = () => (
  <Switch>
    <Route path="/companies/:handle">
      {/* Company */}
      <p>Company Detail</p>
    </Route>
    <Route exact path="/companies">
      {/* Companies */}
      <p>List of Companies</p>
    </Route>
    <Route exact path="/jobs">
      {/* Jobs */}
      <p>List of Jobs</p>
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