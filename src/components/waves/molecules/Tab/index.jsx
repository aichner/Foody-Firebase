import React, { Component } from "react";
import { MDBTabPane } from "mdbreact";

class Tab extends Component {
    render() {
        return (
            <MDBTabPane tabId={this.props.tabId}>
                {this.props.children}
            </MDBTabPane>
        );
    }
}

export default Tab;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
