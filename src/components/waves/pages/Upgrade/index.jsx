// React
import React from "react";

// React router
//import { Link } from 'react-router-dom'

// Redux
import { connect } from 'react-redux'

// MDB
import {
    MDBEdgeHeader,
    MDBFreeBird,
    MDBCol,
    MDBRow,
    MDBCardBody,
    MDBCard,
} from "mdbreact"

// CSS
import './upgrade.scss'

class Upgrade extends React.Component {
    state = {
        isLogged: false,
    }

    componentDidMount(){
        if(this.props.auth.uid !== undefined) this.setState({isLogged: true});
    }

    render() {
        const { auth } = this.props;

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
                            
                            <div className="price header white-text success-color rounded-top">
                                <h2 className="number">0</h2>
                                <div className="version">
                                <h5 className="mb-0">Basic</h5>
                                </div>
                            </div>
                            <MDBCardBody className="striped">
                                <ul className="list-unstyled">
                                    <li>
                                        <p className="mt-2"><i className="fa fa-check green-text pr-2"></i>Unlimited Records</p>
                                    </li>
                                    <li>
                                        <p><i className="fa fa-check green-text pr-2"></i>Receive <strong>3 tabs</strong></p>
                                    </li>
                                    <li>
                                        <p><i className="fa fa-times red-text pr-2"></i>Smart analysis</p>
                                    </li>
                                    <li>
                                        <p><i className="fa fa-times red-text pr-2"></i>Personal coach</p>
                                    </li>
                                    <li>
                                        <p><i className="fa fa-times red-text pr-2"></i>Connect your Social Media</p>
                                    </li>
                                    <li>
                                        <p><i className="fa fa-times red-text pr-2"></i>Family Features</p>
                                    </li>
                                </ul>
                                <button className="btn btn-success waves-effect waves-light"><i className="fas fa-chevron-right pr-2"></i>Start your journy</button>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol
                    md="4"
                    className="mx-auto float-none py-2 px-2"
                    >
                        <MDBCard className="pricing-card" style={{ width: "22rem" }}>
                            
                            <div className="price header white-text purple rounded-top">
                                <h2 className="number">2,97</h2>
                                <div className="version">
                                <h5 className="mb-0">Personal</h5>
                                </div>
                            </div>
                            <MDBCardBody className="striped">
                                <ul className="list-unstyled">
                                    <li>
                                        <p className="mt-2"><i className="fa fa-check green-text pr-2"></i>Unlimited Records</p>
                                    </li>
                                    <li>
                                        <p><i className="fa fa-check green-text pr-2"></i>Receive <strong>3 additional tabs</strong></p>
                                    </li>
                                    <li>
                                        <p><i className="fa fa-check green-text pr-2"></i>Smart analysis</p>
                                    </li>
                                    <li>
                                        <p><i className="fa fa-check green-text pr-2"></i>Personal coach</p>
                                    </li>
                                    <li>
                                        <p><i className="fa fa-check green-text pr-2"></i>Connect your Social Media</p>
                                    </li>
                                    <li>
                                        <p><i className="fa fa-times red-text pr-2"></i>Family Features</p>
                                    </li>
                                </ul>
                                <button className="btn btn-purple waves-effect waves-light"><i className="far fa-arrow-alt-circle-up pr-2"></i>Upgrade</button>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol
                    md="4"
                    className="mx-auto float-none py-2 px-2"
                    >
                        <MDBCard className="pricing-card" style={{ width: "22rem" }}>
                            
                            <div className="price header white-text warning-color rounded-top">
                                <h2 className="number">9,99</h2>
                                <div className="version">
                                <h5 className="mb-0">Family</h5>
                                <small>Link up to 5 accounts</small>
                                </div>
                            </div>
                            <MDBCardBody className="striped">
                                <ul className="list-unstyled">
                                    <li>
                                        <p className="mt-2"><i className="fa fa-check green-text pr-2"></i>Unlimited Records</p>
                                    </li>
                                    <li>
                                        <p><i className="fa fa-check green-text pr-2"></i>Receive <strong>6 additional tabs</strong></p>
                                    </li>
                                    <li>
                                        <p><i className="fa fa-check green-text pr-2"></i>Smart analysis</p>
                                    </li>
                                    <li>
                                        <p><i className="fa fa-check green-text pr-2"></i>Personal coach</p>
                                    </li>
                                    <li>
                                        <p><i className="fa fa-check green-text pr-2"></i>Connect your Social Media</p>
                                    </li>
                                    <li>
                                        <p><i className="fa fa-check green-text pr-2"></i>Family Features</p>
                                    </li>
                                </ul>
                                <button className="btn btn-warning waves-effect waves-light"><i className="far fa-arrow-alt-circle-up pr-2"></i>Upgrade</button>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBFreeBird>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Upgrade);
