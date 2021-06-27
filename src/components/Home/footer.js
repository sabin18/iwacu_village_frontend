import React from 'react';
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Import Components
import FooterLink from "./footer-links";

const Footer = (props) => {

    const footerLinks = [
                // {
                //     title : "REPRODUCTIVE HEALTH",
                //     links : [
                //         { title : "Summary", link : "#" },
                //         { title : "Reproductive organs", link : "#" },
                //         { title : "Body and behavior changes", link : "#" },
                //         { title : "News", link : "#" },
                       
                //     ]
                // },
                {
                    title : "Family Planning",
                    links : [
                        { title : "Family Planning", link : "#" },
                        { title : "Family Planning", link : "#" },
                        { title : "Long-Acting method", link : "#" },
                        { title : "Barrier method", link : "#" },
                        { title : "Emergency Contraceptives", link : "#" },
                        { title : "Role of Family Planning", link : "#" },
                    ]
                },
                {
                    title : "Role of Family Planning",
                    links : [
                        { title : "Transmission of HIV/AIDS", link : "#" },
                        { title : "HIV/AIDS Prevention ", link : "#" },
                        { title : "Male Circumcision", link : "#" },
                        { title : "HIV/AIDS Testing and services", link : "#" },
                        { title : "Helping PLWHA", link : "#" },
                        { title : "Other STIs", link : "#" },
                        
                    ]
                },
                {
                    title : "Menstruation Cycle",
                    links : [
                        { title : "Cycle Tracking", link : "#" },
                        { title : "Summary ", link : "#" },
                        { title : "Sign and Symptoms", link : "#" },
                        { title : "Menstruation Period", link : "#" },
                        { title : "Fertile Period", link : "#" },
                        { title : "Infertile Period", link : "#" },
                        { title : "Menstrual hygiene", link : "#" },
                        
                    ]
                },
            ];

    return (
            <React.Fragment>
                <footer className="landing-footer">
                    <Container>

                <Row>
                <Col lg="3" sm="8">
                <div className="mb-4 mb-lg-0">
                <h5 className="mb-3 footer-list-title">Contact</h5>
            <p>
              A108 Adam Street <br/>
              NY 535022, USA <br/>
              <ul className="list-unstyled footer-list-menu font-size-12"><strong>Phone:</strong> +1 5589 55488 55<br/></ul>
              <ul className="list-unstyled footer-list-menu font-size-12"><strong>Email:</strong> info@example.com<br/></ul>
            </p>
            <div className="social-links mt-3">
              <a href="#" className="twitter"><i className="bx bxl-twitter fa-2x"></i></a>
              <a href="#" className="facebook"><i className="bx bxl-facebook fa-2x"></i></a>
              <a href="#" className="instagram"><i className="bx bxl-instagram fa-2x"></i></a>
              <a href="#" className="google-plus"><i className="bx bxl-skype fa-2x"></i></a>
              <a href="#" className="linkedin"><i className="bx bxl-linkedin fa-2x"></i></a>
            </div>
          </div>
          </Col>
          <Col lg="3" sm="8">
                <div className="mb-4 mb-lg-0">
                <h5 className="mb-3 footer-list-title">Contact</h5>
            <p>
              A108 Adam Street <br/>
              NY 535022, USA <br/>
              <ul className="list-unstyled footer-list-menu"><strong>Phone:</strong> +1 5589 55488 55<br/></ul>
              <ul className="list-unstyled footer-list-menu"><strong>Email:</strong> info@example.com<br/></ul>
            </p>
            <div className="social-links mt-3">
              <a href="#" className="twitter"><i className="bx bxl-twitter fa-lg"></i></a>
              <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
              <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
              <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
              <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            </div>
          </div>
          </Col>
                            {/* {
                                footerLinks.map((footerLink, key) =>
                                <Col lg="3" sm="6" key={key}>
                                    <div className="mb-4 mb-lg-0">
                                        <h5 className="mb-3 footer-list-title">{footerLink.title}</h5>
                                        <ul className="list-unstyled footer-list-menu">
                                            {
                                                footerLink.links.map((Flink, key) =>
                                                    <li key={key}><Link to={Flink.link}>{Flink.title}</Link></li>
                                                )
                                            }
                                        </ul>
                                    </div>
                                </Col>
                                )
                            } */}
                            
                            {/* <Col lg="3" sm="6">
                                <div className="mb-4 mb-lg-0">
                                    <h5 className="mb-3 footer-list-title">Latest News</h5>
                                    <div className="blog-post">
                                        <Link to="#" className="post">
                                            <div className="badge badge-soft-success font-size-11 mb-3">Cryptocurrency</div>
                                            <h5 className="post-title">Donec pede justo aliquet nec</h5>
                                            <p className="mb-0"><i className="bx bx-calendar mr-1"></i> 04 Mar, 2020</p>
                                        </Link>
                                        <Link to="#" className="post">
                                            <div className="badge badge-soft-success font-size-11 mb-3">Cryptocurrency</div>
                                            <h5 className="post-title">In turpis, Pellentesque</h5>
                                            <p className="mb-0"><i className="bx bx-calendar mr-1"></i> 12 Mar, 2020</p>
                                        </Link>
                                    </div>
                                </div>
                            </Col> */}
                        </Row>

                        <hr className="footer-border my-5"/>
                        
                        <FooterLink/>
                    </Container>
                </footer>
            </React.Fragment>
          );
    }
        
export default Footer;