// React
import React from "react";

// Logo
import { ReactComponent as Logo } from "./logo.svg";

// MDB
import {
    MDBNavbarBrand,
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
