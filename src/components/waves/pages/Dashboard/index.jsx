// React
import React from 'react'

// Redux
import { connect } from 'react-redux'

// Components
import CreateRecordDialog from './createRecordDialog'

class Dashboard extends React.Component{

    render(){
        // Get records from Regex Reducer
        //const { records } = this.props;

        return(
            <div>
                <h1>Dashboard</h1>
                <CreateRecordDialog />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        record: state.record.records
    }
}

export default connect(mapStateToProps)(Dashboard);
