// React
import React from 'react'
// React Router
import { Route, Switch } from "react-router-dom"

// Pages
import SignInPage from './components/waves/pages/SignIn'
import SignOutPage from './components/waves/pages/SignOut'
import Day from './components/waves/pages/Day'

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={SignInPage} />
        <Route exact path="/day/:date" component={Day} />
        <Route exact path="/signout" component={SignOutPage} />
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
