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
    MDBAlert,
} from 'mdbreact';

// Components
//import CreateTab from '../../organisms/Modals/Create/tab'

// Forms
import DefFields from './defineFields'

class TabGeneric extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

   
    render(){
        const { tab } = this.props;
        console.log(tab);
        // Check if fields are set
        if(tab.fields === undefined){
            return(
                <DefFields />
            )
        } else {
            return(
                <div>
                
                </div>
            )
        }
        return(
            <div>
                
            </div>
        )
    }
}

export default TabGeneric;
