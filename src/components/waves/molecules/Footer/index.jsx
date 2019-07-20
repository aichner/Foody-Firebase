// React
import React from "react"

// MDB
import {
  MDBFooter
} from 'mdbreact'

class Footer extends React.Component{
    render(){
        return(
            <MDBFooter color="success-color">
                <p className="footer-copyright mb-0 py-3 text-center">
                &copy; 2017-{new Date().getFullYear()} Copyright: <a href="https://www.aichner-christian.com" target="_blank" rel="noopener noreferrer"> Werbeagentur Christian Aichner </a>
                </p>
            </MDBFooter>
        )
    }
}

export default Footer;
