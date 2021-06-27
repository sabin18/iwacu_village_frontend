import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import Footer from '../Home/footer';

import HomeSlider from '../Home/slider';
import Login from './Login';

const SignIn = (props) => (
  <>
    <section className="section hero-section bg-ico-hero pt-0" id="home">
      <div className="bg-overlay bg-primary" />
      <Container>
        <Row className="align-items-center pt-1" lg="12">
          <Col lg="6">
            <HomeSlider />
          </Col>
          <Col lg="6">
            <Login />
          </Col>
        </Row>
      </Container>
    </section>
    <Footer />
  </>
);

export default SignIn;
