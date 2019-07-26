// React
import React from 'react'

// MDB
import {
    MDBBtn,
    MDBIcon,
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
        let newfield = { method: 'default', field: '', type: '', weight: ''};
        // Add new field to current fields
        fielddialogs.push(newfield);
        // Add current fields + new field to state
        this.setState({fielddialogs: fielddialogs });
    }

    // Change handler
    handleChange = (e) => {

        let index = e.target.getAttribute('index');

        this.setState(prevState => ({
            fielddialogs: prevState.fielddialogs.map(
                el => el.index === index ? { ...el, status: 'done' } : {...el, status: '2'}
            )
        }));
        
    }

    // Cancel dialog (remove object from state array)
    cancelDialog = (e) => {
        // Receive field value of dialog
        let value = e.target.getAttribute('data');
        // Remove (splice) at received position from value
        this.state.fielddialogs.splice(this.state.fielddialogs.map(function(e) { return e.field }).indexOf(value), 1);
        // Because we used splice and did not call this.setState() we need to manually update (and call the component's render function)
        this.forceUpdate(); // This is as dirty as it gets! -> Should be avoided if possible!
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
                                                <input
                                                    type="text"
                                                    name="field"
                                                    value={dialog.field}
                                                    onChange={(e) => {
                                                        const newPeople = this.state.fielddialogs.slice();
                                                        newPeople[index].field = e.target.value;
                                                        this.setState({ fielddialogs: newPeople });
                                                    }}
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label>Type</label>
                                                <select name="type" className="browser-default custom-select" index={index} onChange={this.handleChange.bind(this)} >
                                                    <option value="sel_num">Number</option>
                                                    <option value="sel_slider">Slider</option>
                                                    <option value="sel_checkbox">Checkbox</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 text-left align-self-center">
                                                <MDBBtn size="md" color="elegant" outline data={dialog.field} onClick={this.cancelDialog.bind(this)}><MDBIcon icon="minus" className="pr-2" />Cancel</MDBBtn>
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
