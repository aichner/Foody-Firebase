// React
import React from 'react'

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

// Logo
import { ReactComponent as Logo } from "./logo.svg";

class SignedInNavItems extends React.Component{
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }


    render(){
        return(
            <MDBNavbar color="success-color" dark expand="md" fixed="top" scrolling>
                <MDBContainer>
                    <MDBNavbarBrand href="/">
                    <Logo style={{ height: "2.5rem", width: "2.5rem" }} />
                    MDB React
                    </MDBNavbarBrand>
                    <MDBNavbarToggler
                    onClick={this.toggleCollapse}
                    />
                    <MDBCollapse
                    id="navbarCollapse3"
                    isOpen={this.state.isOpen}
                    navbar
                    >
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <MDBNavLink to="/">Home</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/signout">Logout</MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        )
    }
}

export default SignedInNavItems;
