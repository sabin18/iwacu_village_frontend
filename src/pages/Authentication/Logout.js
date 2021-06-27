import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { logoutUser } from "../../store/actions";

const Logout = (props) => {
  useEffect(() => {
    localStorage.removeItem('auth-token');
    localStorage.removeItem('auth-user');
    localStorage.removeItem('roles');
    localStorage.removeItem('userId');
    props.logoutUser(props.history);
  });

  return <></>;
};

export default withRouter(connect(null, { logoutUser })(Logout));
