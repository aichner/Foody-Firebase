import React, { Component } from "react";
import { MDBNotification } from "mdbreact";

class Notification extends Component {
  render() {
    return (
      <MDBNotification
        show={this.props.show}
        fade
        iconClassName={this.props.icon}
        title={this.props.title}
        message={this.props.message}
        text={this.props.subhead}
        style={{
          position: "fixed",
          top: "10px",
          right: "10px",
          zIndex: 9999
        }}
      />
    );
  }
}

export default Notification;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
