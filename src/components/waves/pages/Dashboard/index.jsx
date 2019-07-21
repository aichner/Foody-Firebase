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
 } from "mdbreact";

// Redux
import { connect } from 'react-redux'
import { compose } from 'redux'

// Firestore
import { firestoreConnect } from 'react-redux-firebase'

// Dialogs (Modals)
import CreateRecordDialog from './createRecordDialog'
import CreateTabDialog from './createTabDialog'

// Components
import Tab from '../../molecules/Tab'
import { TabDashboard, TabGeneric } from "../../organisms/Tabs"

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
            activeItem: "1",
            activeItemPills: "1",
            activeItemVerticalPills: "1",
            activeItemOuterTabs: "1",
            activeItemInnerPills: "1",
            activeItemClassicTabs1: "1",
            activeItemClassicTabs2: "1"
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
        const { records } = this.props;
        console.log(records);

        return(
            <div className="foody">
                <div className="banner img-walking" ></div>
                <div className="greeting text-center py-3">
                    <h2>Hallo Christian!</h2>
                </div>
                <MDBContainer>
                    <div className="classic-tabs">
                        <MDBNav classicTabs color="white">
                        <MDBNavItem>
                            <MDBNavLink
                            to="#"
                            className={this.state.activeItemClassicTabs1 === "0" ? "font-weight-bold active blue-text" : "font-weight-bold"}
                            onClick={this.toggleClassicTabs1("0")}
                            >
                            <MDBIcon icon="columns" className="pr-2" />Dashboard
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink
                            to="#"
                            className={this.state.activeItemClassicTabs1 === "1" ? "font-weight-bold active blue-text" : "font-weight-bold"}
                            onClick={this.toggleClassicTabs1("1")}
                            >
                            <MDBIcon icon="utensils" className="pr-2" />Food
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink
                            to="#"
                            className={this.state.activeItemClassicTabs1 === "2" ? "font-weight-bold active blue-text" : "font-weight-bold"}
                            onClick={this.toggleClassicTabs1("2")}
                            >
                            <MDBIcon icon="clinic-medical" className="pr-2" />Feeling
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink
                            to="#"
                            className={this.state.activeItemClassicTabs1 === "3" ? "font-weight-bold active blue-text" : "font-weight-bold"}
                            onClick={this.toggleClassicTabs1("3")}
                            >
                            <MDBIcon icon="building" className="pr-2" />Work
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink
                            to="#"
                            className={this.state.activeItemClassicTabs1 === "4" ? "font-weight-bold active blue-text" : "font-weight-bold"}
                            onClick={this.toggleClassicTabs1("4")}
                            >
                            <MDBIcon icon="bed" className="pr-2" />Sleep
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <CreateTabDialog />
                        </MDBNavItem>
                        </MDBNav>
                        <MDBTabContent
                        activeItem={this.state.activeItemClassicTabs1}
                        className="pt-3"
                        >
                            <Tab tabId="0">
                                {/*<TabDashboard />*/}
                                <h2>Tab 1</h2>
                            </Tab>
                            <Tab tabId="1">
                                <h2>Tab 2</h2>
                            </Tab>
                            <Tab tabId="2">
                                <h2>Tab 3</h2>
                            </Tab>
                            <Tab tabId="3">
                                <h2>Tab 4</h2>
                            </Tab>
                        </MDBTabContent>
                    </div>
                </MDBContainer>
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
