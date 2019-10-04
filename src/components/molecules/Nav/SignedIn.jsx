//> React
// Contains all the functionality necessary to define React components
import React from 'react';
// Link and Redirect from Router
import { Link } from 'react-router-dom';

//> Redux
import { connect } from 'react-redux';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbar,
    MDBNavbarToggler,
    MDBCollapse,
    MDBContainer,
    MDBIcon,
    MDBDropdown,
    MDBDropdownItem,
    MDBDropdownMenu,
    MDBDropdownToggle,
} from 'mdbreact';

//> Components
// Branding information (Logo, Text, ...)
import Branding from './branding';

//> Redux actions
import { signOut } from '../../../store/actions/authActions';

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
                    <Branding/>
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
                                <MDBNavLink to="/dashboard">
                                    <MDBIcon icon="columns" className="pr-2" />Dashboard
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/upgrade">
                                    <MDBIcon icon="arrow-alt-circle-up" className="pr-2" />Upgrade
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle nav caret>
                                        <MDBIcon far icon="user-circle" />
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu className="dropdown-success">
                                    <MDBDropdownItem href="/settings">
                                        <MDBIcon icon="cogs" className="pr-2" />Preferences
                                    </MDBDropdownItem>
                                    <MDBDropdownItem divider/>
                                    <MDBDropdownItem onClick={this.props.signOut}>
                                        <MDBIcon icon="sign-out-alt" className="pr-2" />Logout
                                    </MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInNavItems);

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
