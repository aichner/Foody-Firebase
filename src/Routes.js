// React
import React from 'react'
// React Router
import { Route, Switch } from "react-router-dom"

// Pages
import {
  SignInPage,
  SignUpPage,
  DayPage,
  DashboardPage,
  UpgradePage
} from './components/waves/pages'

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={SignInPage} />
        <Route exact path="/day/:date" component={DayPage} />
        <Route exact path="/join" component={SignUpPage} />
        <Route exact path="/dashboard" component={DashboardPage} />
        <Route exact path="/upgrade" component={UpgradePage} />
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

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
