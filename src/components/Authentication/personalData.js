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
import { storeData } from "../../helpers/storePersonelData"
import classnames from 'classnames';
import { Link, Redirect } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import {SIGNUP_QUERY} from '../../mutation/users';
import LanguageDropdown from '../CommonForBoth/TopbarDropdown/LanguageDropdown';
import { withRouter } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
// Import Breadcrumb

const PersonalData = (props) => {
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
    age: '',
    gender: '',
  };
  const [user, setUser] = useState(initialState);
  const [redirect, setRedirect] = useState('');
  const [errors, setErrors] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
 console.log(user)
  const handleSubmit = async (e) => {
    e.preventDefault();
    await storeData(user.age,user.gender); 
    setRedirect('/home');
  };

  if (redirect !== '') {
    return <Redirect to={redirect} />;
  }
  console.log(user)
  return (
    <>
      <div className="page-content">
        <Container fluid>
          <Row className="justify-content-center">
            <Col lg="12">
              <Card>
                <CardBody>
                  <div className="justify-content-center">
                  <LanguageDropdown
                  isInModal={true}
                  />
                  </div>
                  <h1 className="card-title mb-4 text-center">
                    {props.t('Select your Age and Gender')}     
                   </h1>
                  <Form onSubmit={handleSubmit}>
                    <div id="progrss-wizard" className="twitter-bs-wizard">
                      {errors.map((error) => (
                        <Alert key={error.field} color="danger">
                          {error.message}
                        </Alert>
                      ))}
                      <TabContent
                        activeTab={activeTabProgress}
                        // className="twitter-bs-wizard-tab-content"
                      >
                        <TabPane tabId={1}>
                          <Row>
                            <Col lg="6">
                              <FormGroup>
                                <Label for="basicpill-lastname-input15">
                                  {props.t('Age')}
                                  <span style={{ color: 'red' }}>*</span>
                                </Label>
                                <Input
                                  type="select"
                                  name="age"
                                  id="exampleSelect"
                                  onChange={handleInputChange}
                                  required
                                >
                                  <option value="">{props.t('Select Age')}</option>
                                  <option value="young-adolescent">{props.t('10-14')}</option>
                                  <option value="adolescent">{props.t('15-19')}</option>
                                  <option value="young-adult">{props.t('20-24')}</option>
                                  <option value="adult">{props.t('25 and above')}</option>
                                </Input>
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <Label for="exampleSelect">
                                  {props.t('Gender')} 
                                  <span style={{ color: 'red' }}>*</span></Label>
                                <Input
                                  type="select"
                                  name="gender"
                                  id="exampleSelect"
                                  onChange={handleInputChange}
                                  required
                                >
                                  <option value="">{props.t('Select Gender')}</option>
                                  <option value="female">{props.t('Female')}</option>
                                  <option value="male">{props.t('Male')}</option>
                                </Input>
                              </FormGroup>
                            </Col>
                          </Row>
                        </TabPane>
                      </TabContent>
                      <div className="text-center">
                        <Button type="submit" color="primary">
                         {props.t('Submit')}
                        </Button>
                      </div>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default withRouter (withNamespaces()(PersonalData));
