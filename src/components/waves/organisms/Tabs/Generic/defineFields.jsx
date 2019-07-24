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

// Fade In Animation
import FadeIn from 'react-fade-in'

// Components
//import CreateTab from '../../organisms/Modals/Create/tab'

class DefFields extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            fielddialogs: [

            ],
            fields: [
                
            ],
        }
    }

    addField = () => {
        // Get current fields
        let fields = this.state.fields;
        let newfield = { type:"text", title:"Testfield" };
        // Add new field to current fields
        fields.push(newfield);
        // Add current fields + new field to state
        this.setState({fields: fields });
    }

    addFieldDialog = () => {
        // Get current fields
        let fielddialogs = this.state.fielddialogs;
        let newfield = { method: 'default' };
        // Add new field to current fields
        fielddialogs.push(newfield);
        // Add current fields + new field to state
        this.setState({fielddialogs: fielddialogs });
    }

    removeFieldDialog = (index) => {
        console.log(index);
        let fielddialogs = this.state.fielddialogs;
        console.log(fielddialogs);

    }
   
    render(){
        return(
            <div className="row">
                <div className="col-md-6">
                    
                    <form>
                        {this.state.fielddialogs.map((dialog, index) => {
                            return(
                                <FadeIn key={index}>
                                    <div className="card p-3 mb-3">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Field</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="col-md-6">
                                                <label>Type</label>
                                                <select className="browser-default custom-select">
                                                    <option value="sel_num">Number</option>
                                                    <option value="sel_slider">Slider</option>
                                                    <option value="sel_checkbox">Checkbox</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 text-left align-self-center">
                                                <MDBBtn size="md" color="elegant" outline onClick={e => this.removeFieldDialog(index)}><MDBIcon icon="minus" className="pr-2" />Cancel</MDBBtn>
                                            </div>
                                            <div className="col-md-6 text-right">
                                                <MDBBtn color="deep-orange"><MDBIcon icon="plus" className="pr-2" />Add</MDBBtn>
                                            </div>
                                        </div>
                                    </div>
                                </FadeIn>
                            );
                        })}
                    </form>
                  
                    <MDBBtn color="deep-orange" rounded onClick={this.addFieldDialog}><MDBIcon icon="sitemap" className="pr-2" />Add field</MDBBtn>
                </div>
            </div>
        )
    }
}

export default DefFields;
