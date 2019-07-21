// React
import React from "react";

// React router
import { Link } from 'react-router-dom'

// MDB
import {
    MDBEdgeHeader,
    MDBFreeBird,
    MDBCol,
    MDBRow,
    MDBCardBody,
    MDBBtn
} from "mdbreact";

class SignIn extends React.Component {

    state = {
        email: "",
        password: ""
    }

    handleChange = (e) => {
        this.setState({[e.target.type]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
        <div>
            <MDBEdgeHeader color="green lighten-3" />
            <MDBFreeBird>
                <MDBRow>
                    <MDBCol
                    md="10"
                    className="mx-auto float-none white z-depth-1 py-2 px-2"
                    >
                        <MDBCardBody>
                            <MDBRow className="justify-content-center">
                                <MDBCol md="6">
                                    <form onSubmit={this.handleSubmit}>
                                        <p className="h4 text-center mb-4">Sign in</p>
                                        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                        Your email
                                        </label>
                                        <input
                                        type="email"
                                        id="defaultFormLoginEmailEx"
                                        className="form-control"
                                        onChange={this.handleChange}
                                        />
                                        <br />
                                        <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                                        Your password
                                        </label>
                                        <input
                                        type="password"
                                        id="defaultFormLoginPasswordEx"
                                        className="form-control"
                                        onChange={this.handleChange}
                                        />
                                        <div className="text-center mt-4">
                                            <MDBBtn color="success" type="submit"><i className="fas fa-key pr-2"></i>Login</MDBBtn>
                                        </div>
                                        <p className="text-muted text-center mt-3">Not a member yet? No problem, just <Link to="/join"><strong>join us</strong></Link>!</p>
                                    </form>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBFreeBird>
        </div>
        );
    }
}

export default SignIn;
