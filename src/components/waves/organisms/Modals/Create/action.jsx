// React
import React from 'react'

// Redux
import { connect } from 'react-redux'
// Actions
import { createRecord } from '../../../../../store/actions/recordActions'

class CreateAction extends React.Component {
    state = {
        date: "",
        time: "",
        timestamp_added: "",
        type: "ACTION",
        duration: "",
        sector: ""
    }

    getTimestamp = () => {
        if (!Date.now) {
            Date.now = function() { return new Date().getTime(); }
        }
    }

    getTime = () => {
        let today = new Date();
        return today.getHours() + ":" + today.getMinutes();
    }

    getDate = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        return yyyy + '-' + mm + '-' + dd;
    }

    componentDidMount(){
        
        this.setState({
            date: this.getDate(),
            time: this.getTime(),
            timestamp_added: this.getTimestamp(),
            duration: 2.5,
            sector: "TV"
        }, () => this.props.createRecord(this.state))
    }

    render(){
        return(
            <h2>Placeholder</h2>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createRecord: (record) => dispatch(createRecord(record))
    }
}

// No state, so null for first param
export default connect(null, mapDispatchToProps)(CreateAction);
