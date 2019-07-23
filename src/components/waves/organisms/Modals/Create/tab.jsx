// React
import React from 'react'

// Redux
import { connect } from 'react-redux'

// MDB
import {
    MDBBtn,
    MDBIcon,
} from 'mdbreact';

// Tabs
import { createTab } from '../../../../../store/actions/tabActions'

class CreateTab extends React.Component {
    state = {
        title: "",
        icon: "leaf",
        editable: true,
        error: null
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.title.trim() !== ""){
            this.props.createTab(this.state);
            this.setState({error: null}, () => this.props.onSendForm(this.state))
        } else {
            this.setState({error: "Please enter a name for your tab."}, () => this.props.onSendForm(this.state))
        }
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} autoComplete="off">
                <label htmlFor="defaultFormTabTitle" className="grey-text">
                Your tab name
                </label>
                <input
                type="text"
                name="title"
                id="defaultFormTabTitle"
                className="form-control"
                maxLength="20"
                value={this.state.title}
                onChange={this.handleChange}
                required
                />
                <small className="form-text text-muted">Such as: Sleep, Work, School, ...</small>
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
