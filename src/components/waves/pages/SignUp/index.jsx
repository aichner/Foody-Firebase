// React
import React from 'react'

// React router
import { Link } from 'react-router-dom'

//MDB
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBEdgeHeader, MDBFreeBird, MDBCardBody } from 'mdbreact';

class SignUp extends React.Component{
    render(){
        return(
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
                                        <form>
                                            <p className="h4 text-center mb-4">Sign up</p>
                                            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                                            Your name
                                            </label>
                                            <input
                                            type="text"
                                            id="defaultFormRegisterNameEx"
                                            className="form-control"
                                            />
                                            <br />
                                            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                                            Your email
                                            </label>
                                            <input
                                            type="email"
                                            id="defaultFormRegisterEmailEx"
                                            className="form-control"
                                            />
                                            <br />
                                            <label
                                            htmlFor="defaultFormRegisterConfirmEx"
                                            className="grey-text"
                                            >
                                            Confirm your email
                                            </label>
                                            <input
                                            type="email"
                                            id="defaultFormRegisterConfirmEx"
                                            className="form-control"
                                            />
                                            <br />
                                            <label
                                            htmlFor="defaultFormRegisterPasswordEx"
                                            className="grey-text"
                                            >
                                            Your password
                                            </label>
                                            <input
                                            type="password"
                                            id="defaultFormRegisterPasswordEx"
                                            className="form-control"
                                            />
                                            <div className="text-center mt-4">
                                                <MDBBtn color="success" type="submit">
                                                    <i class="fas fa-chevron-right pr-2"></i>Register
                                                </MDBBtn>
                                            </div>
                                            <p className="text-muted text-center mt-3">Already a member? <Link to="/" >Login</Link></p>
                                        </form>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBFreeBird>
            </div>
        )
    }
}

export default SignUp;
