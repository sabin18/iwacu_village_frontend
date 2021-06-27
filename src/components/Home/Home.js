import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Footer from './footer';
import Header from './userHeader';
import ProductDetail from '../products/singleProduct';
import Products from '../products/allProducts';
import Home from './landingPage';

const UserHome = (props) => (
  <div>
    {/* <Route exact path="/home">
    <TextSlider />
    </Route>
    <Route exact path="/">
    <Modal />
    <TextSlider />
    </Route> */}
    <Header />
     {/* <div className="page-content section" style={{width:'100%'}}> */}
    <section className="section hero-section bg-white page-content pt-2" style={{width:'100%',paddingTop:'5rem'}} id="home" >
      <div className="bg-overlay bg-light" style={{width:'100%'}} />
      <Container lg="12">
      <Route exact path="/">
      <Home />
      </Route>
      <Route exact path="/home">
      <Home />
      </Route>
      <Route exact path="/products">
      <Products />
      </Route>
      <Route exact path="/product/:id">
      <ProductDetail />
      </Route>
      </Container>
    </section>
    {/* </div> */}
    <Footer />
  </div>
);

export default UserHome;
