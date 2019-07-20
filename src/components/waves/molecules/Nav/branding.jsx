// React
import React, { Component } from "react";

// Logo
import { ReactComponent as Logo } from "./logo.svg";

// MDB
import {
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBCollapse,
    MDBContainer,
} from 'mdbreact';

class SignedInNavItems extends React.Component{
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }


    render(){
        return(
            <MDBNavbarBrand href="/">
                <Logo style={{ height: "2.5rem", width: "2.5rem" }} />
                Foody
            </MDBNavbarBrand>
        )
    }
}

export default SignedInNavItems;
