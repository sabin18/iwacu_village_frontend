import React, { useState } from 'react';

import { Row, Col, CardBody, Card, Alert, Container } from 'reactstrap';

// availity-reactstrap-validation
import { AvForm, AvField } from 'availity-reactstrap-validation';

// actions
import { useMutation, useQuery } from '@apollo/client';

// import images
import { Link, Redirect } from 'react-router-dom';
import profile from '../../assets/images/profile-img.png';
import logo from '../../assets/images/logo.svg';
import LOGIN_QUERY from '../../querries/login';
// import { ALL_POSTS_QUERY } from '../../querries/Posts';
import { checkNormalUser } from '../../helpers/storePersonelData';

const Login = (props) => {
  const [loginUser, { data }] = useMutation(LOGIN_QUERY);
  // const { error, refetch } = useQuery(ALL_POSTS_QUERY);
  const [redirect, setRedirect] = useState('');
  const [errors, setErrors] = useState([]);
  // handleValidSubmit
  const handleValidSubmit = async (event, values) => {
    const response = await loginUser({
      variables: { ...values },
    });

    if (response.data.tokenAuth.success) {
      localStorage.setItem('auth-token', response.data.tokenAuth.token);
      localStorage.setItem('roles', [response.data.tokenAuth.user?.groups?.map((role)=>role.name)]);
      localStorage.setItem('userId', response.data.tokenAuth.user.pk);
      // refetch();
      if(checkNormalUser()===true){
        // setRedirect('/home')
        return window.location.replace("/home")
      }
      else{
      return (
      window.location.replace("/published-posts"),
      localStorage.setItem('language', ""),
      localStorage.removeItem('age'),
      localStorage.removeItem('gender'),
      localStorage.removeItem('userName'),
      localStorage.removeItem('deviceId')
      )
      }
    }

    setErrors([...response.data.tokenAuth.errors.nonFieldErrors]);
  };

  if (redirect !== '') {
    return <Redirect to={redirect} />;
  }
  return (
    <>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2" />
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={4} lg={12} xl={8}>
              <Card className="overflow-hidden">
                <div className="bg-soft-primary">
                  <Row>
                    <Col className="col-7">
                      <div className="text-primary p-4">
                        <h5 className="text-primary">Welcome Back !</h5>
                        <p>Sign in to continue to Rengera Ubuzima.</p>
                      </div>
                    </Col>
                    <Col className="col-5 align-self-end">
                      <img src={profile} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <div>
                    <div className="avatar-md profile-user-wid mb-4">
                      <span className="avatar-title rounded-circle bg-light">
                        <img src={logo} alt="" className="rounded-circle" height="34" />
                      </span>
                    </div>
                  </div>
                  <div className="p-2">
                    {errors.map((error) => (
                      <Alert key={error.field} color="danger">
                        {error.message}
                      </Alert>
                    ))}
                    <AvForm
                      className="form-horizontal"
                      onValidSubmit={(e, v) => {
                        handleValidSubmit(e, v);
                      }}
                    >
                      <div className="form-group">
                        <AvField
                          name="username"
                          label="Username"
                          className="form-control"
                          placeholder="Enter username"
                          type="text"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <AvField
                          name="password"
                          label="Password"
                          type="password"
                          required
                          placeholder="Enter Password"
                        />
                      </div>

                      <div className="custom-control custom-checkbox">
                        <label className="custom-control-label" htmlFor="customControlInline">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customControlInline"
                          />
                          Remember me
                        </label>
                      </div>

                      <div className="mt-3">
                        <button
                          className="btn btn-primary btn-block waves-effect waves-light"
                          type="submit"
                        >
                          Log In
                        </button>
                      </div>

                      <div className="mt-4 text-center">
                        <Link to="/forgot-password" className="text-muted">
                          <i className="mdi mdi-lock mr-1" /> Forgot your password?
                        </Link>
                      </div>
                    </AvForm>
                  </div>
                  <div className="mt-5 text-center">
                    <p>
                      Don't have an account ?{' '}
                      <Link to="/signup" className="font-weight-medium text-primary">
                        {' '}
                        Signup now{' '}
                      </Link>{' '}
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Login;
