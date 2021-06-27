import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
// import Breadcrumb from './breadCrumb'
import { Container, Row, Col } from 'reactstrap';
import Footer from '../Home/footer';
import FormWizard from './register';

const SignUp = (props) => (
  <>
    <section className="section hero-section bg-ico-hero pt-0" id="home">
      <div className="bg-overlay bg-primary" />
      <Container>
        <Row className="align-items-center" lg="12">
          <Col lg="12">
          <Route path="/signup">
            <FormWizard />
            </Route>
          </Col>
        </Row>
      </Container>
    </section>
    <Footer />
  </>
);

export default SignUp;
