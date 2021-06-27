import React from 'react';
import { Row, Col } from "reactstrap";

//Import Images
// import logolight from "../../../../assets/images/logo-light.png";


const FooterLink = (props) => {

    return (
                <React.Fragment>
                        <Row className = "justify-content-end">
                            <Col lg="6">
                                <div className="mb-4">
                                    {/* <img src={logolight} alt="" height="20"/> */}
                                </div>
            
                                <p className="mb-2">{new Date().getFullYear()} ©Iwacu Village</p>
                        </Col>

                        
                        
                            <Col lg="6">
                                <div className="mb-4">
                                    {/* <img src={logolight} alt="" height="20"/> */}
                                </div>
            
                                <p className="mb-2 text-right"> Developed by Iwacu Village</p>
                        </Col>

                        </Row>
                </React.Fragment>
        );
    }
        
export default FooterLink;