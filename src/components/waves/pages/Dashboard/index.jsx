// React
import React from 'react'

// Redux
import { connect } from 'react-redux'
import { compose } from 'redux'

// Firestore
import { firestoreConnect } from 'react-redux-firebase'

// Components
import CreateRecordDialog from './createRecordDialog'

class Dashboard extends React.Component{

    render(){
        // Get records from Regex Reducer
        const { records } = this.props;
        console.log(records);

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
        records: state.firestore.ordered.records
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {
            collection: 'records'
        }
    ])
)(Dashboard);
