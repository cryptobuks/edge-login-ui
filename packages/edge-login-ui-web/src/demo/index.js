import React from 'react'
import { render } from 'react-dom'
import { IndexRedirect, Route, Router, hashHistory } from 'react-router'

import {
  AccountManagement,
  ChangePassword,
  ChangePin,
  Container,
  Login,
  PasswordRecovery,
  PasswordRecoveryToken,
  Signup
} from '../../lib/components.js'

render(
  <Router history={hashHistory}>
    <Route path="/" component={Container}>
      <IndexRedirect to="/login" />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/account" component={AccountManagement} />
      <Route path="/changepin" component={ChangePin} />
      <Route path="/changepassword" component={ChangePassword} />
      <Route path="/passwordrecovery" component={PasswordRecovery} />
      <Route path="/passwordrecoverytoken" component={PasswordRecoveryToken} />
    </Route>
  </Router>,
  document.getElementById('app')
)
