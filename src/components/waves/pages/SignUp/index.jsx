// React
import React from 'react'

// React router
import { Link, Redirect } from 'react-router-dom'

// Redux
import { connect } from 'react-redux'

//MDB
import { MDBRow, MDBCol, MDBBtn, MDBEdgeHeader, MDBFreeBird, MDBCardBody } from 'mdbreact'

class SignUp extends React.Component{

   state = {
        name: "",
        email: "",
        password: "",
        password2: ""
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render(){
        const { authError, auth } = this.props;

         /* Redirect to Dashboard
         * If user is already logged in, redirect to Dashboard
         */
        if(auth.uid !== undefined) return <Redirect to="/dashboard"/> 
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
                                        <form onSubmit={this.handleSubmit}>
                                            <p className="h4 text-center mb-4">Sign up</p>
                                            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                                            Your name
                                            </label>
                                            <input
                                            type="text"
                                            name="name"
                                            id="defaultFormRegisterNameEx"
                                            className="form-control"
                                            onChange={this.handleChange}
                                            />
                                            <br />
                                            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                                            Your email
                                            </label>
                                            <input
                                            type="email"
                                            name="email"
                                            id="defaultFormRegisterEmailEx"
                                            className="form-control"
                                            onChange={this.handleChange}
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
                                            name="password"
                                            id="defaultFormRegisterPasswordEx"
                                            className="form-control"
                                            onChange={this.handleChange}
                                            />
                                            <br />
                                            <label
                                            htmlFor="defaultFormRegisterPasswordEx2"
                                            className="grey-text"
                                            >
                                            Repeat your password
                                            </label>
                                            <input
                                            type="password"
                                            name="password2"
                                            id="defaultFormRegisterPasswordEx2"
                                            className="form-control"
                                            onChange={this.handleChange}
                                            />
                                            <div className="text-center mt-4">
                                                <MDBBtn color="success" type="submit">
                                                    <i className="fas fa-chevron-right pr-2"></i>Register
                                                </MDBBtn>
                                            </div>
                                            <p className="text-muted text-center mt-3">Already a member? <Link to="/login" ><strong>Login</strong></Link></p>
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

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        authErrorDetails: state.auth.authErrorDetails,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(SignUp);
