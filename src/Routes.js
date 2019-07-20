// React
import React from 'react'
// React Router
import { Route, Switch } from "react-router-dom"

// Pages
import SignInPage from './components/waves/pages/SignIn'
import SignUpPage from './components/waves/pages/SignUp'
import DayPage from './components/waves/pages/Day'
import DashboardPage from './components/waves/pages/Dashboard'

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={SignInPage} />
        <Route exact path="/day/:date" component={DayPage} />
        <Route exact path="/join" component={SignUpPage} />
        <Route exact path="/dashboard" component={DashboardPage} />
        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
