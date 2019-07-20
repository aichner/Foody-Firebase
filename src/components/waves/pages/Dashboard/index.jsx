// React
import React from 'react'

// Redux
import { connect } from 'react-redux'

class Dashboard extends React.Component{

    getDate = () => {
        let date = this.props.match.params.date;

        if(date !== undefined){
            let parsed = Date.parse(date);
            if(!isNaN(parsed)){
                console.log(parsed);
            } else {
                return false;
            }
        } else {
            return false;
        }
        
    }

    render(){
        // Get records from Regex Reducer
        const { records } = this.props;

        this.getDate()
        return(
            <h1>Dashboard</h1>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        record: state.record.records
    }
}

export default connect(mapStateToProps)(Dashboard);
