import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import Home from './containers/Home'
import NotFound from './containers/NotFound'
import Login from './containers/Login'
import AppliedRoute from './components/AppliedRoute'
import ResetPassword from './containers/ResetPassword'
import Signup from './containers/Signup'

const Routes = ({ childProps }) => (
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute path="/login/reset" exact component={ResetPassword} props={childProps} />
    <AppliedRoute path="/signup" exact component={Signup} props={childProps} />
    {/* Finally, catch all unmatched routes */}
    <Route component={NotFound} />
  </Switch>
)
export default Routes
Routes.propTypes = {
  childProps: PropTypes.object.isRequired,
}
