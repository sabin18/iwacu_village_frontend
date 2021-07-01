import React, { useState } from 'react';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

// Redux Store
import { showRightSidebarAction, toggleLeftmenu } from '../../store/actions';
// reactstrap
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu ,  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Container,
  Collapse
} from 'reactstrap';
import ScrollspyNav from "./scrollSpy"

// Import menuDropdown
import LanguageDropdown from '../CommonForBoth/TopbarDropdown/LanguageDropdown';
import NotificationDropdown from '../CommonForBoth/TopbarDropdown/NotificationDropdown';
import ProfileMenu from '../CommonForBoth/TopbarDropdown/ProfileMenu';

import megamenuImg from '../../assets/images/megamenu-img.png';
import logo from '../../assets/images/logo-sm-light.png';
import logoLight from '../../assets/images/iwacu-logo.PNG';
import logoLightSvg from '../../assets/images/logo-light.svg';
import logoDark from '../../assets/images/logo-dark.png';

// import images
import github from '../../assets/images/brands/github.png';
import bitbucket from '../../assets/images/brands/bitbucket.png';
import dribbble from '../../assets/images/brands/dribbble.png';
import dropbox from '../../assets/images/brands/dropbox.png';
import mail_chimp from '../../assets/images/brands/mail_chimp.png';
import slack from '../../assets/images/brands/slack.png';
import './userHeader.scss'

// //Import Images
import logodark from "../../assets/images/logo-dark.png"
import logolight from "../../assets/images/logo-light.png"

//i18n
import { withNamespaces } from 'react-i18next';
// import { useQuery } from '@apollo/client';
// import { TOPICS_LIST } from '../../querries/Topics';
import categories from './categories';
import groupArr from '../../helpers/groupData';

const Header = (props) => {
  const [menu, setMenu] = useState(false);
  const [isOpenMenu, setisOpenMenu] = useState(false)
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const [hover, setHover] = useState(false);

  const token = localStorage.getItem('auth-token')

  const isLoggedIn = token ? true : false;
  console.log("isLoggedIn", isLoggedIn);
  const navItems = [
    { id: 1, idnm: "home", navheading: "Home" },
    { id: 2, idnm: "about", navheading: "About" },
    { id: 3, idnm: "features", navheading: "Features" },
    { id: 3, idnm: "roadmap", navheading: "Roadmap" },
    { id: 4, idnm: "team", navheading: "Team" },
    { id: 5, idnm: "news", navheading: "News" },
    { id: 6, idnm: "faqs", navheading: "FAQs" },
  ]
   
  let TargetId = navItems.map(item => {
    return item.idnm
  })


  function myFunction() {
    console.log('=====> clicked')
    var x = document.getElementById("topnav-menu");
    console.log('=====>',x)
    if (x.className === "navbar-nav") {
      x.className += "responsive";
    } else {
      x.className = "navbar-nav";
    }
  }


  const [isSearch, setSearch] = useState(false);
  const [socialDrp, setsocialDrp] = useState(false);



  // const  age = Age();
  // const gender = Gender();

//   const { loading, error, data, refetch } = useQuery(TOPICS_LIST,{
//     variables: { age: age, gender: gender}
//   });

//  const topicsData = data&&data;
//  const topics = topicsData && groupArr(topicsData.topics,5);

  function toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  
  return (
    <React.Fragment>
      <Navbar
        expand="lg"
        fixed="top"
        className={"navigation sticky bg-primary"}
      >
        {/* <Container> */}
          <NavbarBrand className="navbar-logo" href="/">
            {/* {props.imglight !== true ? (
              <img
                src={logoDark}
                alt=""
                height="19"
                className="logo logo-dark"
              />
            ) : ( */}
              <img
                src={logoLight}
                alt=""
                height="60"
                width="100"
                className="logo logo-light"
              />
            {/* )} */}
          </NavbarBrand>

          <NavbarToggler
            className="p-0"
            onClick={toggleNavbar}
          >
            <i className="fa fa-fw fa-bars"/>
          </NavbarToggler>

          <Collapse id="topnav-menu-content" className="justify-content-center" isOpen={!collapsed} navbar>
            {/* <ScrollspyNav
              scrollTargetIds={['/home','/locations-map','/view-quiz-topics']}
              scrollDuration="1500"
              headerBackground="true"
              activeNavClass="active"
              className="navbar-collapse"
            > */}
              <Nav className="ms-auto navbar-nav bg-primary justify-content-center" id="topnav-menu">
                {/* {navItems.map((item, key) => ( */}
                  <NavItem
                    // key={key}
                    className={"active"}
                  >
                    <Link to={"/home"}>
                    <NavLink> {props.t('Home')}</NavLink>
                    </Link>
                  </NavItem>
                  <NavItem
                    // key={key}
                    // className={item.navheading === "Home" ? "active" : ""}
                  >
                    <NavLink href={"#"}> 
              <Dropdown
              className="dropdown-mega d-none d-lg-block ml-2 pt-0 "
              isOpen={menu}
              toggle={() => setMenu(!menu)}
            >
              <DropdownToggle className="btn navbar-nav header-item waves-effect pt-0" caret tag="button" 
              onMouseEnter={()=>{
                setHover(true);
              }}
              onMouseLeave={()=>{
                setHover(false);
              }}
              style={
              (hover ? {color:"rgba(255, 255, 255, 0.6)",padding: "14px 15px",
              transition: "0.3s",
              fontSize: "14px",
              fontWeight: 500,
              fontFamily: "Roboto, sans-serif",
              textTransform: "uppercase",
              borderRadius: "35px",
              // paddingBottom: "6px",
              letterSpacing: "0.3px",} : {color:"#efefef",padding: "14px 15px",
              transition: "0.3s",
              fontSize: "14px",
              fontWeight: 500,
              fontFamily: "Roboto, sans-serif",
              textTransform: "uppercase",
              letterSpacing: "0.3px",})
              }
              >
                {props.t('Choose category')}
              </DropdownToggle>
              <DropdownMenu className="dropdown-megamenu">
                <Row>
                  <Col sm={8}>
                    <Row>
                        {categories.map((category,key,index)=>(
                      <Col md={4} key={key}>
                        {/* <h4 className="font-size-14 mt-0">{props.t(`TOPICS`)}</h4> */}
                        <ul className="list-unstyled megamenu-list">
                        {/* {topicList.map((topic,index)=>( */}
                          <li key={index}>
                            <Link to={`/products/${category.id}`} onClick={() => setMenu(!menu)}><h5 className="font-size-14 mt-0">{category.name}</h5></Link>
                          </li>
                          {/* ))} */}
                        </ul>
                      </Col>
))}
                      {/* <Col sm={2} className="flex-end">
                        <div className="flex-end">
                          <img src={megamenuImg} alt="" className="img-fluid mx-auto d-block float-right" />
                        </div>
                      </Col> */}
                    </Row>
                  </Col>
                </Row>
              </DropdownMenu>
            </Dropdown></NavLink>
                  </NavItem>
                  <NavItem
                    // key={key}
                    // className={item.navheading === "Home" ? "active" : ""}
                  >
                    <Link to={"/products"}>
                    <NavLink>{props.t('Products')}</NavLink>
                    </Link>
                  </NavItem>
                  <NavItem
                    // key={key}
                    // className={item.navheading === "Home" ? "active" : ""}
                  >
                    <NavLink>{props.t('Sellers')}</NavLink>
                  </NavItem>
                  <NavItem
                    // key={key}
                    // className={item.navheading === "Home" ? "active" : ""}
                  >
                    <NavLink>{props.t('Our Team')}</NavLink>
                    
                  </NavItem>
                  <NavItem
                    // key={key}
                    // className={item.navheading === "Home" ? "active" : ""}
                  >
                    <NavLink>{props.t('About Us')}</NavLink>
                    
                  </NavItem>
                  <LanguageDropdown />
                  {/* <NotificationDropdown /> */}
                  <ProfileMenu />
                  {/* <NotificationDropdown /> */}
                {/* ))} */}
              </Nav>
            {/* </ScrollspyNav> */}
            <div className="ms-lg-2">
              {!isLoggedIn ?(<Link to="/login" className="btn btn-outline-success w-xs">
                {props.t('Sign in')}
              </Link>) : (
                <Link to="/logout" className="btn btn-outline-success w-xs">
                {props.t('Sign out')}
              </Link>
              )}
            </div>
          </Collapse>
        {/* </Container> */}
      </Navbar>
    </React.Fragment>
  );
};

const mapStatetoProps = (state) => {
  const { layoutType, showRightSidebar, leftMenu } = state.Layout;
  return { layoutType, showRightSidebar, leftMenu };
  
};

export default connect(mapStatetoProps, {
  showRightSidebarAction,
  toggleLeftmenu,
  imglight: PropTypes.any,
  navClass: PropTypes.string
})(withNamespaces()(Header));
