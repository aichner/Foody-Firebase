// React
import React from 'react'

// MDB
import { 
    MDBContainer,
    MDBNavLink,
    MDBIcon,
    MDBNavItem,
    MDBTabContent,
    MDBNav,
    MDBBadge,
 } from "mdbreact";

// Redux
import { connect } from 'react-redux'
import { compose } from 'redux'

// Firestore
import { firestoreConnect } from 'react-redux-firebase'

// Dialogs (Modals)
import CreateTabDialog from './createTabDialog'

// Components
import Tab from '../../molecules/Tab'
import TabDashboard from "../../organisms/Tabs/Dashboard"

// Images
import "./images.scss";

// CSS
import "./dashboard.scss";

// Temp
// Perks
const c_perks_average = 80;
const c_perks = [87, 50, 65, 78, 30, 15];
const c_compare = [
  [20,20,20,20,20,20],
  [10,10,10,10,10,10]
]

class Dashboard extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            activeItem: 0,
            activeItemPills: 0,
            activeItemVerticalPills: 0,
            activeItemOuterTabs: 0,
            activeItemInnerPills: 0,
            activeItemClassicTabs1: 0,
            activeItemClassicTabs2: 0
        }
    }

    toggleClassicTabs1 = tab => e => {
        if (this.state.activeItemClassicTabs1 !== tab) {
        this.setState({
            activeItemClassicTabs1: tab
        });
        }
    }

    render(){
        // Get records from Regex Reducer
        const { records, tabs } = this.props;
        console.log(records);
        console.log(tabs);
        return(
            <div className="foody">
                <div className="banner img-walking" ></div>
                <div className="greeting text-center py-3">
                    <h2>Hallo Christian!</h2>
                    <MDBBadge color="success">Basic</MDBBadge>
                    <MDBBadge color="purple">Personal</MDBBadge>
                    <MDBBadge color="warning">Family<MDBIcon icon="crown" className="pl-2" /></MDBBadge>
                </div>
                <MDBContainer>
                    <div className="classic-tabs">
                        <MDBNav classicTabs color="white">
                        {
                            tabs && tabs.map((tab, i) => {
                                console.log(this.state.activeItemClassicTabs1 === i)
                                return(
                                    <MDBNavLink
                                    key={i}
                                    to="#"
                                    
                                    className={this.state.activeItemClassicTabs1 === i ? "font-weight-bold active green-text" : "font-weight-bold text-dark"}
                                    onClick={this.toggleClassicTabs1(i)}
                                    >
                                        <MDBIcon icon={tab.icon} className="pr-2" />{tab.title}
                                    </MDBNavLink>
                                )
                            })
                        }
                        <MDBNavItem>
                            <CreateTabDialog />
                        </MDBNavItem>
                        </MDBNav>
                        <MDBTabContent
                        activeItem={this.state.activeItemClassicTabs1}
                        className="pt-3"
                        >
                            {
                                tabs && tabs.map((tab, i) => {
                                    console.log(this.state.activeItemClassicTabs1 === i)
                                    return(
                                        <Tab key={i} tabId={i}>
                                            {
                                                i === 0 &&
                                                <TabDashboard />
                                            }
                                            <h2>Tab {i}</h2>
                                        </Tab>
                                    )
                                })
                            }
                        </MDBTabContent>
                    </div>
                </MDBContainer>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        records: state.firestore.ordered.records,
        tabs: state.firestore.ordered.tabs
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {
            collection: 'records'
        },
        {
            collection: 'tabs'
        }
    ])
)(Dashboard);
