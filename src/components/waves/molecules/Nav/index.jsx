// React
import React, { Component } from "react";

// Navitems
import SignedInNavItems from './SignedIn'
import SignedOutNavItems from './SignedOut'

// Redux state
import { connect } from 'react-redux'

class Nav extends Component {
  render() {
    const { auth } = this.props;

    // Check if user is logged in (when auth.uid exists)
    if(auth.uid){
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

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Nav);
