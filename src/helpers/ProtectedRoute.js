/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import isAuth from './isAuthenticated';

export default class ProtectedRoute extends Component {

  render() {
    const { component: Component, ...props } = this.props;
    return (isAuth()) ? <Route {...props} render={(props) => <Component {...props} />} /> : <Redirect to="/login" />;
  }
}

ProtectedRoute.propTypes = {
  component: PropTypes.any,
};
