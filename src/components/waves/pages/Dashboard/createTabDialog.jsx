// React
import React from 'react'

// MDB
import {
    MDBContainer,
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBBtn,
    MDBIcon,
} from 'mdbreact';

// Components
import CreateTab from '../../organisms/Modals/Create/tab'

class CreateTabDialog extends React.Component{

    state = {
        modal: false,
    }
    
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    render(){
        return(
            <div>
                <MDBBtn className="rounded-right shadow-none btn-add" size="sm" color="success" onClick={this.toggle} rounded outline><MDBIcon icon="plus" /></MDBBtn>
                {this.state.modal &&
                    <MDBContainer>
                        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                            <MDBModalHeader toggle={this.toggle}>Add Tab</MDBModalHeader>
                            <MDBModalBody>
                                 <CreateTab/>
                            </MDBModalBody>
                        </MDBModal>
                    </MDBContainer>
                }
            </div>
        )
    }
}

export default CreateTabDialog;
