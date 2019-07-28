// React
import React from 'react'

// Components
//import CreateTab from '../../organisms/Modals/Create/tab'

// Fade In Animation
import FadeIn from 'react-fade-in'

// Redux
import { connect } from 'react-redux'

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
        if(true){
            return(
                <div>
                    {tab.fields.length > 0 &&
                            <div>
                                {tab.fields.map((field, index) => {
                                    return(
                                        <FadeIn key={index}>
                                            <div>
                                                {field.field}
                                            </div>
                                        </FadeIn>
                                    );
                                })}
                            </div>
                        }
                    <DefFields title={tab.title} />
                </div>
            )
        } else {
            return null;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile,
    }
}

export default connect(mapStateToProps)(TabGeneric);
