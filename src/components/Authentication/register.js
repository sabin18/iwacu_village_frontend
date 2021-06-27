import React, { useState } from 'react';

import {
  Row,
  Col,
  Card,
  CardBody,
  TabContent,
  TabPane,
  Label,
  Input,
  Form,
  FormGroup,
  Container,
  Button,
  Alert,
} from 'reactstrap';

import classnames from 'classnames';
import { Link, Redirect } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { SIGN_UP_QUERY } from '../../mutation/users';

// Import Breadcrumb

const FormWizard = (props) => {
  const [activeTab, setactiveTab] = useState(1);
  const [activeTabProgress, setactiveTabProgress] = useState(1);
  const [progressValue, setprogressValue] = useState(25);

  function toggleTab(tab) {
    if (activeTab !== tab) {
      if (tab >= 1 && tab <= 4) {
        setactiveTab(tab);
      }
    }
  }

  function toggleTabProgress(tab) {
    if (activeTabProgress !== tab) {
      if (tab >= 1 && tab <= 4) {
        setactiveTabProgress(tab);

        if (tab === 1) {
          setprogressValue(25);
        }
        if (tab === 2) {
          setprogressValue(50);
        }
        if (tab === 3) {
          setprogressValue(75);
        }
        if (tab === 4) {
          setprogressValue(100);
        }
      }
    }
  }
  const initialState = {
    firstName: '',
    lastName: '',
    password: '',
    username: '',
    password: '',
    confirmPassword: '',
  };
  const [user, setUser] = useState(initialState);
  const [saveUser, { data }] = useMutation(SIGN_UP_QUERY);
  const [redirect, setRedirect] = useState('');
  const [errors, setErrors] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await saveUser({
      variables: { ...user },
    });

    if (response.data.createUser.success) {
      setRedirect('/home');
      return;
    }
    setErrors([...response.data.createUser.errors]);
  };

  if (redirect !== '') {
    return <Redirect to={redirect} />;
  }

  return (
    <>
      <div className="page-content">
        <Container fluid>
          <Row className="justify-content-center">
              <Card style={{ "max-width": "30em"}}>
                <CardBody>
                  <h1 className="card-title mb-4 text-center">Create Account</h1>
                  <Form onSubmit={handleSubmit}>
                    <div id="progrss-wizard" className="twitter-bs-wizard">
                      {/* <ul className="twitter-bs-wizard-nav nav-justified nav nav-pills">
                        <NavItem>
                          <NavLink
                            className={classnames({ active: activeTabProgress === 1 })}
                            onClick={() => {
                              toggleTabProgress(1);
                            }}
                          >
                            <span className="step-number mr-2">01</span>
                            Seller Details
                          </NavLink>
                        </NavItem>
                      </ul> */}

                      {/* <div id="bar" className="mt-4">
                        <Progress color="success" striped animated value={progressValue} />
                        <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" />
                      </div> */}
                      {errors.map((error) => (
                        <Alert key={error.field} color="danger">
                          {error.message}
                        </Alert>
                      ))}
                      <TabContent
                        activeTab={activeTabProgress}
                        className="twitter-bs-wizard-tab-content"
                      >
                        <TabPane tabId={1}>
                          <Row>
                            <Col lg="12">
                              <FormGroup>
                                <Label for="basicpill-firstname-input14">
                                  First name
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-firstname-input14"
                                  onChange={handleInputChange}
                                  name="firstName"
                                  placeholder="Enter first name"
                                />
                              </FormGroup>
                            </Col>
                            
                          </Row>
                          <Row>
                          <Col lg="12">
                              <FormGroup>
                                <Label for="basicpill-lastname-input15">
                                  Last name
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-lastname-input15"
                                  onChange={handleInputChange}
                                  name="lastName"
                                  placeholder="Enter last name"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            
                            <Col lg="12">
                              <FormGroup>
                                <Label for="basicpill-email-input17">
                                  Phone
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="basicpill-email-input17"
                                  onChange={handleInputChange}
                                  name="phone"
                                  placeholder="Enter phone"
                                  required
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            
                            <Col lg="12">
                              <FormGroup>
                                <Label for="basicpill-email-input17">
                                  Username<span style={{ color: 'red' }}>*</span>
                                </Label>
                                <Input
                                  type="username"
                                  className="form-control"
                                  id="basicpill-email-input17"
                                  onChange={handleInputChange}
                                  name="username"
                                  placeholder="Enter Username"
                                  required
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          
                          <Row>
                          <Col lg="12">
                              <FormGroup>
                                <Label for="basicpill-email-input17">
                                  Password<span style={{ color: 'red' }}>*</span>
                                </Label>
                                <Input
                                  type="password"
                                  className="form-control"
                                  id="basicpill-email-input17"
                                  onChange={handleInputChange}
                                  name="password"
                                  placeholder="Enter password"
                                  required
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                        </TabPane>
                        {/* <TabPane tabId={2}>
                        <div>
                          <Form>
                              <Col lg="12">
                              <FormGroup>
        <Label for="exampleSelect">Province</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
                              </Col>

                              <Col lg="12">
                              <FormGroup>
        <Label for="exampleSelect">
          District
        </Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
                              </Col>

                              <Col lg="12">
                              <FormGroup>
        <Label for="exampleSelect">Sector</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
                              </Col>
                              <Col lg="12">
                              <FormGroup>
        <Label for="exampleSelect">Select</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
                              </Col>
                              <Col lg="12">
                              <FormGroup>
        <Label for="exampleSelect">Select</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
                              </Col>
                              <Col lg="12">
                              <FormGroup>
        <Label for="exampleSelect">Select</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
                              </Col>
                            </Row>
                          </Form>
                        </div>
                      </TabPane> */}
                        {/*
                      <TabPane tabId={3}>
                        <div>
                          <Form>
                            <Row>
                              <Col lg="12">
                                <FormGroup>
                                  <Label for="basicpill-namecard-input24">Name on Card</Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-namecard-input24"
                                  />
                                </FormGroup>
                              </Col>

                              <Col lg="12">
                                <FormGroup>
                                  <Label>Credit Card Type</Label>
                                  <select className="custom-select">
                                    <option defaultValue>Select Card Type</option>
                                    <option value="AE">American Express</option>
                                    <option value="VI">Visa</option>
                                    <option value="MC">MasterCard</option>
                                    <option value="DI">Discover</option>
                                  </select>
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg="12">
                                <FormGroup>
                                  <Label for="basicpill-cardno-input25">Credit Card Number</Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-cardno-input25"
                                  />
                                </FormGroup>
                              </Col>

                              <Col lg="12">
                                <FormGroup>
                                  <Label for="basicpill-card-verification-input26">
                                    Card Verification Number
                                  </Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-card-verification-input26"
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg="12">
                                <FormGroup>
                                  <Label for="basicpill-expiration-input27">Expiration Date</Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-expiration-input27"
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </Form>
                        </div>
                      </TabPane>
                      <TabPane tabId={4}>
                        <div className="row justify-content-center">
                          <Col lg="12">
                            <div className="text-center">
                              <div className="mb-4">
                                <i className="mdi mdi-check-circle-outline text-success display-4" />
                              </div>
                              <div>
                                <h5>Confirm Detail</h5>
                                <p className="text-muted">
                                  If several languages coalesce, the grammar of the resulting
                                </p>
                              </div>
                            </div>
                          </Col>
                        </div>
                      </TabPane> */}
                      </TabContent>
                      {/* <ul className="pager wizard twitter-bs-wizard-pager-link"> */}
                      {/* <li className={activeTabProgress === 1 ? 'previous disabled' : 'previous'}>
                          <Link
                            to="#/"
                            onClick={() => {
                              toggleTabProgress(activeTabProgress - 1);
                            }}
                          >
                            Previous
                          </Link>
                        </li> */}
                      {/* <li className="text-center">
                          <Button type="submit" color="primary">
                            Create Account
                          </Button>
                        </li> */}
                      {/* <li className={activeTabProgress === 4 ? 'next disabled' : 'next'}>
                          <Link
                            to="#/"
                            onClick={() => {
                              toggleTabProgress(activeTabProgress + 1);
                            }}
                          >
                            Next
                          </Link>
                        </li> */}
                      {/* </ul> */}
                      <div className="text-center">
                        <Button type="submit" color="primary">
                          Create Account
                        </Button>
                      </div>
                      <div className="mt-4 text-center">
                        <p>
                          Already have an account ?{' '}
                          <Link to="/login" className="font-weight-medium text-primary">
                            {' '}
                            Login{' '}
                          </Link>{' '}
                        </p>
                      </div>
                    </div>
                  </Form>
                </CardBody>
              </Card>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default FormWizard;
