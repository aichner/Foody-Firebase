// React
import React, { Component } from 'react';

// React Router
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

// Components
import { Nav, Footer } from './components/waves/molecules';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="flyout">
          <Nav/>
          <main style={{ marginTop: "4rem" }}>
            <Routes />
          </main>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
