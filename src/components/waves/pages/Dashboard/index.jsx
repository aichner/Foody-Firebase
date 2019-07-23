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
    MDBBtn,
    MDBPopover,
    MDBPopoverBody,
    MDBPopoverHeader,
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
 } from "mdbreact";

// Redux
import { connect } from 'react-redux'
import { compose } from 'redux'

// Firestore
import { firestoreConnect } from 'react-redux-firebase'

// Dialogs (Modals)
import CreateTabDialog from './createTabDialog'
import UpgradeTabDialog from './upgradeTabDialog'
import DeleteTabDialog from './deleteTabDialog'

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
            activeItemClassicTabs2: 0,
            deleteTabModal: false,
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

    // Delete Tab
    toogleDeleteTabModal = () => {
        this.setState({
            deleteTabModal: !this.state.deleteTabModal
        });
    }
    onDeleteTabStatus = () => {
        // Close modal
        this.toogleDeleteTabModal();
        // Go to dashboard tab
        this.setState({
            activeItem: 0,
            activeItemPills: 0,
            activeItemVerticalPills: 0,
            activeItemOuterTabs: 0,
            activeItemInnerPills: 0,
            activeItemClassicTabs1: 0,
            activeItemClassicTabs2: 0,
        })
    }

    // Automatic tab text color
    hexToRgb = (hex) => {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
    isDark = (color) => {
        let r = this.hexToRgb(color).r;
        let g = this.hexToRgb(color).g;
        let b = this.hexToRgb(color).b;
        let rgb = "rgb("+r+","+g+","+b+")";

        let match = /rgb\((\d+).*?(\d+).*?(\d+)\)/.exec(rgb);
        let result = ( match[1] & 255 )
            + ( match[2] & 255 )
            + ( match[3] & 255 )
            < 3 * 256 / 1.2;
        if(result){
            return "tab-text-light";
        } else {
            return "tab-text-dark";
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
                                    console.log(tab);
                                    return(
                                        <MDBNavLink
                                        key={i}
                                        to="#"
                                        style={{backgroundColor: tab.color}}
                                        className={this.state.activeItemClassicTabs1 === i ? ("font-weight-bold active " + this.isDark(tab.color)) : ("font-weight-bold " + this.isDark(tab.color)) }
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
                                                {tab.editable &&
                                                    <div className="tab-top">
                                                        <MDBPopover
                                                        placement="bottom"
                                                        popover
                                                        clickable
                                                        id="popper1"
                                                        >
                                                        <MDBBtn color="white" rounded><MDBIcon icon="bars" /></MDBBtn>
                                                        <div>
                                                            <MDBPopoverHeader>{tab.title} Settings</MDBPopoverHeader>
                                                            <MDBPopoverBody className="text-center">
                                                                <MDBBtn color="elegant"><MDBIcon icon="edit" className="pr-2" />Edit</MDBBtn>
                                                                <hr />
                                                                <MDBBtn color="danger" size="md" outline rounded onClick={this.toogleDeleteTabModal}><MDBIcon icon="trash" className="pr-2" />Delete</MDBBtn>
                                                                
                                                            </MDBPopoverBody>
                                                        </div>
                                                        </MDBPopover>
                                                        {this.state.deleteTabModal &&
                                                        <MDBModal isOpen={this.state.deleteTabModal} toggle={this.toogleDeleteTabModal}>
                                                            <MDBModalHeader toggle={this.toogleDeleteTabModal}>Unlock more tabs</MDBModalHeader>
                                                            <MDBModalBody className="text-center">
                                                                <MDBBtn color="elegant" outline onClick={this.toogleDeleteTabModal}>Cancel</MDBBtn>
                                                                <DeleteTabDialog title={tab.title} onDeleteTab={this.onDeleteTabStatus} />
                                                            </MDBModalBody>
                                                        </MDBModal>
                                                        }
                                                    </div>
                                                }
                                                
                                                <h2>Tab {i}</h2>
                                                {
                                                    tab.title === "Dashboard" &&
                                                    <TabDashboard />
                                                }
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
