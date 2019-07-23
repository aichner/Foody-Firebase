// React
import React from 'react'

// React Router
import { Link } from 'react-router-dom'

// MDB
import {
    MDBContainer,
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBBtn,
    MDBIcon,
    MDBAlert,
    MDBBadge,
} from 'mdbreact';

// Components
import CreateTab from '../../organisms/Modals/Create/tab'

class CreateTabDialog extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            error: null
        }
    }
    
    toggle = () => {
        this.setState({
            modal: !this.state.modal,
            error: null,
        });
    }

    onSendFormStatus = (tab) => {
        if(!tab.error){
            this.setState({error: null}, () => this.toggle());
        } else {
            this.setState({error: tab.error});
        }
    }

    render(){
        const { tier } = this.props;
        return(
            <div>
                {tier === 0 ? (
                    <MDBBtn className="shadow-none btn-add" size="sm" color="purple" onClick={this.toggle} outline><MDBIcon icon="plus" /></MDBBtn>
                ) : (
                    <MDBBtn className="shadow-none btn-add" size="sm" color="warning" onClick={this.toggle} outline><MDBIcon icon="plus" /></MDBBtn>
                )
                }
                {this.state.modal &&
                    <MDBContainer>
                        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                            <MDBModalHeader toggle={this.toggle}>Unlock more tabs</MDBModalHeader>
                            <MDBModalBody className="text-center">
                                {(function() {
                                    switch(tier) {
                                    case 0:
                                        return (
                                            <div>
                                            <div className="price header white-text purple rounded-top">
                                                <h2 className="number">2,97</h2>
                                                <div className="version">
                                                <h5 className="mb-0"><strong>Upgrade</strong> to Personal</h5>
                                                
                                                </div>
                                                <Link to="/upgrade"><MDBBtn size="sm" color="white" rounded>Details</MDBBtn></Link>
                                                <br />
                                                <MDBBtn color="success" rounded><MDBIcon icon="arrow-alt-circle-up" className="pr-2" />Upgrade now</MDBBtn>
                                            </div>
                                                <div className="w-100"><div className="splitter my-4"><span className="or"><span className="or-text">or</span></span></div></div>
                                            </div>
                                        )
                                    case 1:
                                        return (
                                            <div>
                                                <div className="w-100"><div className="splitter my-4"><span className="or"><span className="or-text">or</span></span></div></div>
                                            </div>
                                        )
                                    default:
                                        return null;
                                    }
                                })()}
                                <h3>One-time purchase</h3>
                                <h3><MDBBadge color="primary">1 additional tab</MDBBadge></h3>
                            </MDBModalBody>
                        </MDBModal>
                    </MDBContainer>
                }
            </div>
        )
    }
}

export default CreateTabDialog;
