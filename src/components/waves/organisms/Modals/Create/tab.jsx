// React
import React from 'react'

// Redux
import { connect } from 'react-redux'

// Color Picker
import { CirclePicker } from 'react-color'

// MDB
import {
    MDBBtn,
    MDBIcon,
} from 'mdbreact';

// Actions
import { createTab } from '../../../../../store/actions/tabActions'

class CreateTab extends React.Component {
    state = {
        title: "",
        icon: "file-alt",
        color: '#ffffff',
        editable: true,
        error: null,
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.title.trim() !== ""){
            // Remove overhead (this.state.error) that otherwise would end up in the DB
            let cleaned = {
                title: this.state.title,
                icon: this.state.icon,
                color: this.state.color,
                editable: this.state.editable
            }
            // Call action
            this.props.createTab(cleaned);
            // Provide callback to parent
            this.setState({error: null}, () => this.props.onSendForm(this.state))
        } else {
            this.setState({error: "Please enter a name for your tab."}, () => this.props.onSendForm(this.state))
        }
    }

    // Color picker
    handleChangeComplete = (color) => {
        this.setState({ color: color.hex });
    };

    render(){
        return(
            <form onSubmit={this.handleSubmit} autoComplete="off">
                <label htmlFor="defaultFormTabTitle" className="grey-text">
                Your tab name <span className="red-text">*</span>
                </label>
                <input
                type="text"
                name="title"
                id="defaultFormTabTitle"
                className="form-control"
                maxLength="20"
                tabIndex="0"
                value={this.state.title}
                onChange={this.handleChange}
                required
                />
                <small className="form-text text-muted">Such as: Sleep, Work, School, ...</small>
                <br />
                <label htmlFor="defaultFormTabTitle" className="grey-text">
                Your tab color (optional)
                </label>
                <CirclePicker
                    color={ this.state.color }
                    onChangeComplete={ this.handleChangeComplete }
                    className="mb-1 w-100"
                    circleSize={40}
                    circleSpacing={20}
                />
                <small className="form-text blue-text"><MDBIcon icon="info" className="pr-2" />Default color: White</small>
                <small className="form-text blue-text"><MDBIcon icon="info" className="pr-2" />Click on a circle to select your individual color</small>
                <br />
                <small className="form-text"><span className="red-text">*</span> = Required</small>
                <div className="text-center mt-4">
                    <MDBBtn color="dark-green" type="submit"><MDBIcon icon="plus-circle" className="pr-2" />Create Tab</MDBBtn>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createTab: (tab) => dispatch(createTab(tab))
    }
}

// No state, so null for first param
export default connect(null, mapDispatchToProps)(CreateTab);
