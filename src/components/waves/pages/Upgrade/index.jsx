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
    MDBBtn,
    MDBCard,
    MDBCardTitle,
    MDBCardText,
} from "mdbreact"

// CSS
import './upgrade.scss'

class Upgrade extends React.Component {

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
        <div className="upgrade">
            <MDBEdgeHeader color="green lighten-3" />
            <MDBFreeBird>
                <MDBRow>
                    <MDBCol
                    md="4"
                    className="mx-auto float-none py-2 px-2"
                    >
                        <MDBCard className="pricing-card" style={{ width: "22rem" }}>
                            
                            <div class="price header white-text success-color rounded-top">
                                <h2 class="number">0</h2>
                                <div class="version">
                                <h5 class="mb-0">Basic</h5>
                                </div>
                            </div>
                            <MDBCardBody className="striped">
                                <ul className="list-unstyled">
                                    <li>
                                        <p class="mt-2"><i class="fa fa-check green-text pr-2"></i>Unlimited Records</p>
                                    </li>
                                    <li>
                                        <p><i class="fa fa-check green-text pr-2"></i>Up to <strong>3 tabs</strong></p>
                                    </li>
                                    <li>
                                        <p><i class="fa fa-times red-text pr-2"></i>Smart analysis</p>
                                    </li>
                                    <li>
                                        <p><i class="fa fa-times red-text pr-2"></i>Personal coach</p>
                                    </li>
                                    <li>
                                        <p><i class="fa fa-times red-text pr-2"></i>Connect your Social Media</p>
                                    </li>
                                    <li>
                                        <p><i class="fa fa-times red-text pr-2"></i>Family Features</p>
                                    </li>
                                </ul>
                                <button class="btn btn-success waves-effect waves-light"><i class="fas fa-chevron-right pr-2"></i>Start your journy</button>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol
                    md="4"
                    className="mx-auto float-none py-2 px-2"
                    >
                        <MDBCard className="pricing-card" style={{ width: "22rem" }}>
                            
                            <div class="price header white-text purple rounded-top">
                                <h2 class="number">2,97</h2>
                                <div class="version">
                                <h5 class="mb-0">Personal</h5>
                                </div>
                            </div>
                            <MDBCardBody className="striped">
                                <ul className="list-unstyled">
                                    <li>
                                        <p class="mt-2"><i class="fa fa-check green-text pr-2"></i>Unlimited Records</p>
                                    </li>
                                    <li>
                                        <p><i class="fa fa-check green-text pr-2"></i>Up to <strong>10 tabs</strong></p>
                                    </li>
                                    <li>
                                        <p><i class="fa fa-check green-text pr-2"></i>Smart analysis</p>
                                    </li>
                                    <li>
                                        <p><i class="fa fa-check green-text pr-2"></i>Personal coach</p>
                                    </li>
                                    <li>
                                        <p><i class="fa fa-check green-text pr-2"></i>Connect your Social Media</p>
                                    </li>
                                    <li>
                                        <p><i class="fa fa-times red-text pr-2"></i>Family Features</p>
                                    </li>
                                </ul>
                                <button class="btn btn-purple waves-effect waves-light"><i className="far fa-arrow-alt-circle-up pr-2"></i>Upgrade</button>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol
                    md="4"
                    className="mx-auto float-none py-2 px-2"
                    >
                        <MDBCard className="pricing-card" style={{ width: "22rem" }}>
                            
                            <div class="price header white-text warning-color rounded-top">
                                <h2 class="number">9,99</h2>
                                <div class="version">
                                <h5 class="mb-0">Family</h5>
                                <small>Link up to 5 accounts</small>
                                </div>
                            </div>
                            <MDBCardBody className="striped">
                                <ul className="list-unstyled">
                                    <li>
                                        <p class="mt-2"><i class="fa fa-check green-text pr-2"></i>Unlimited Records</p>
                                    </li>
                                    <li>
                                        <p><i class="fa fa-check green-text pr-2"></i>Up to <strong>10 tabs</strong></p>
                                    </li>
                                    <li>
                                        <p><i class="fa fa-check green-text pr-2"></i>Smart analysis</p>
                                    </li>
                                    <li>
                                        <p><i class="fa fa-check green-text pr-2"></i>Personal coach</p>
                                    </li>
                                    <li>
                                        <p><i class="fa fa-check green-text pr-2"></i>Connect your Social Media</p>
                                    </li>
                                    <li>
                                        <p><i class="fa fa-check green-text pr-2"></i>Family Features</p>
                                    </li>
                                </ul>
                                <button class="btn btn-warning waves-effect waves-light"><i className="far fa-arrow-alt-circle-up pr-2"></i>Upgrade</button>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBFreeBird>
        </div>
        );
    }
}

export default Upgrade;
