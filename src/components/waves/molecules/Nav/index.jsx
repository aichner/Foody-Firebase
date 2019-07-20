// React
import React, { Component } from "react";

// Navitems
import SignedInNavItems from './SignedIn'
import SignedOutNavItems from './SignedOut'

class Nav extends Component {
  state = {
    isLogged: false
  };

  render() {
    if(this.state.isLogged){
      return (
        <SignedInNavItems/>
      );
    } else {
      return (
        <SignedOutNavItems/>
      );
    }
  }
}

export default Nav;
