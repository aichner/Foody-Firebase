// React
import React from 'react'

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
        // Check if fields are set
        if(tab.fields === undefined){
            return(
                <DefFields />
            )
        } else {
            return null;
        }
    }
}

export default TabGeneric;
