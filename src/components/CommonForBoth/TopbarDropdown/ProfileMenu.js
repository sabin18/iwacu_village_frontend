import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

//i18n
import { withNamespaces } from 'react-i18next';
// Redux
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

// users
// import user1 from '../../../assets/images/users/avatar-1.jpg';

const ProfileMenu = (props) => {
  // Declare a new state variable, which we'll call "menu"
  const [menu, setMenu] = useState(false);
  const [hover, setHover] = useState(false);
  const {isAdminMode} = props

  const [username, setusername] = useState('Profile');

  useEffect(() => {
    if (localStorage.getItem('authUser')) {
      if (process.env.REACT_APP_DEFAULTAUTH === 'firebase') {
        const obj = JSON.parse(localStorage.getItem('authUser'));
        setusername(obj.displayName);
      } else if (
        process.env.REACT_APP_DEFAULTAUTH === 'fake' ||
        process.env.REACT_APP_DEFAULTAUTH === 'jwt'
      ) {
        const obj = JSON.parse(localStorage.getItem('authUser'));
        setusername(obj.username);
      }
    }
  }, [props.success]);

  const logoutFunction =()=>{
    localStorage.removeItem('auth-token');
    localStorage.removeItem('roles');
    localStorage.removeItem('userId');
    localStorage.removeItem('language');
    localStorage.removeItem('age');
    localStorage.removeItem('gender')
  }

  let style = {}
  if (!isAdminMode) {
    style =hover ? {color:"rgba(255, 255, 255, 0.6)",padding: "14px 15px",
    transition: "0.3s",
    fontSize: "14px",
    fontWeight: 500,
    fontFamily: "Roboto, sans-serif",
    // marginTop: "6px",
    // borderRadius: "35px",
    // backgroundColor:"#212180",
    textTransform: "uppercase",
    letterSpacing: "0.3px",} : {color:"#efefef",padding: "14px 15px",
    transition: "0.3s",
    fontSize: "14px",
    fontWeight: 500,
    fontFamily: "Roboto, sans-serif",
    textTransform: "uppercase",
    letterSpacing: "0.3px",}
  }
  
  return (
    <React.Fragment>
      <Dropdown isOpen={menu} toggle={() => setMenu(!menu)} className="d-inline-block">
        <DropdownToggle
          className="btn header-item waves-effect"
          id="page-header-user-dropdown"
          tag="button"
          onMouseEnter={()=>{
            setHover(true);
          }}
          onMouseLeave={()=>{
            setHover(false);
          }}
          style={style}
        >
          {/* <img className="rounded-circle header-profile-user" src={user1} alt="Header Avatar" /> */}
          <span className="d-none d-xl-inline-block ml-2 mr-1">{username}</span>
          <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem tag="a" href="#">
            {' '}
            <i className="bx bx-user font-size-16 align-middle mr-1" style={{color:"black"}}></i>
            <span style={{color:"black"}}>{props.t('Profile')}{' '}</span>
          </DropdownItem>
          {/* <DropdownItem tag="a" href="/crypto-wallet">
            <i className="bx bx-wallet font-size-16 align-middle mr-1"></i>
            {props.t('My Wallet')}
          </DropdownItem> */}
          {/* <DropdownItem tag="a" href="#">
            <span className="badge badge-success float-right">11</span>
            <i className="mdi mdi-settings font-size-17 align-middle mr-1"></i>
            {props.t('Settings')}
          </DropdownItem> */}
          {/* <DropdownItem tag="a" href="auth-lock-screen">
            <i className="bx bx-lock-open font-size-16 align-middle mr-1"></i>
            {props.t('Lock screen')}
          </DropdownItem> */}
          <div className="dropdown-divider"></div>
          <Link to="/logout" className="dropdown-item" onClick={()=>logoutFunction()}>
            <i className="bx bx-power-off font-size-16 align-middle mr-1 text-danger"></i>
            <span style={{color:"black"}}>{props.t('Logout')}</span>
          </Link>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

const mapStatetoProps = (state) => {
  const { error, success } = state.Profile;
  return { error, success };
};

export default withRouter(connect(mapStatetoProps, {})(withNamespaces()(ProfileMenu)));
