// React
import React from 'react'

// Fade In Animation
import FadeIn from 'react-fade-in'

// React Router
import { Redirect } from 'react-router-dom'

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
import UpgradeTabDialog from './upgradeTabDialog'

// Components
import Tab from '../../molecules/Tab'
import TabDashboard from "../../organisms/Tabs/Dashboard"

// Images
import "./images.scss";

// CSS
import "./dashboard.scss";

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

    getBanner = (sex) => {
        let defaultImage = "img-default-1";
        if(sex !== undefined){
            switch(sex){
                case 'male':
                    return "img-male-1";
                case 'female':
                    return "img-female-1";
                default:
                    return defaultImage;
            }
        }else{
            return defaultImage;
        }
    }

    render(){
        // Get records from Regex Reducer
        const { auth, profile } = this.props;

        /* Route Guarding
         * If user is not logged in, redirect him/her to the login page
         */
        if(!auth.uid) return <Redirect to="/login"/> 

        // If user data fully loaded
        if(profile.tier !== undefined){
            return(
                <FadeIn>
                <div className="foody">
                    <div className={"banner "+this.getBanner(profile.sex)}></div>
                    <div className="greeting text-center py-3">
                        <h2>Hallo {profile.first_name}!</h2>
                        {(() => {
                            // Conditionally render tier badge
                            switch(profile.tier) {
                            case 0:
                                return <MDBBadge color="success">Basic</MDBBadge>;
                            case 1:
                                return <MDBBadge color="purple">Personal</MDBBadge>;
                            case 2:
                                return  <MDBBadge color="warning">Family<MDBIcon icon="crown" className="pl-2" /></MDBBadge>;
                            default:
                                return null;
                            }
                        })()}
                    </div>
                    <MDBContainer>
                        <div className="classic-tabs">
                            <MDBNav classicTabs color="white">
                            {
                                profile.tabs && profile.tabs.map((tab, i) => {
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
                            {profile.tabs.length < profile.tabSlots ? (
                                <MDBNavItem>
                                    <CreateTabDialog />
                                </MDBNavItem>
                            ) : (
                                <MDBNavItem>
                                    <UpgradeTabDialog tier={profile.tier} />
                                </MDBNavItem>
                            )
                                
                            }
                            
                            </MDBNav>
                            <MDBTabContent
                            activeItem={this.state.activeItemClassicTabs1}
                            className="pt-3"
                            >
                                {
                                    profile.tabs && profile.tabs.map((tab, i) => {
                                        return(
                                            <Tab key={i} tabId={i}>
                                                {
                                                    tab.title === "Dashboard" &&
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
                </FadeIn>
            )
        } else {
            return null;
        }
        
    }
}

const mapStateToProps = (state) => {
    return {
        records: state.firestore.ordered.records,
        tabs: state.firestore.ordered.tabs,
        auth: state.firebase.auth,
        profile: state.firebase.profile,
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
