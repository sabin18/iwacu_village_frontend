import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

//i18n
import i18n from '../../../i18n';
import { withNamespaces } from 'react-i18next';

// falgs
import usFlag from '../../../assets/images/flags/us.jpg';

import Rwanda from '../../../assets/images/flags/Rwanda.jpg';

const LanguageDropdown = (props) => {
  // Declare a new state variable, which we'll call "menu"
  const {isAdminMode,isInModal}=props;
  const language= localStorage.getItem('language');
  const [hover, setHover] = useState(false);
  const [menu, setMenu] = useState(false);
  const [flag, setFlag] = useState(language==='rw'?Rwanda:usFlag);
  const [lng, setLng] = useState(language==='rw'?'Ikinyarwanda':'English');

  function changeLanguageAction(lng) {
    //set language as i18n
    i18n.changeLanguage(lng);

    if (lng === 'it') {
      localStorage.setItem('language', 'rw')
      window.location.reload(true)
      setFlag(Rwanda);
      setLng('Ikinyarwanda');
      i18n.changeLanguage('it');
    } else if (lng === 'eng') {
      localStorage.setItem('language', 'en')
      window.location.reload(true)
      setFlag(usFlag);
      setLng('English');
    }
  }
  console.log('====>1is',props)
  return (
    <React.Fragment>
      {console.log('====>is',isAdminMode)}
      <Dropdown isOpen={menu} toggle={() => setMenu(!menu)} className="d-inline-block">
        <DropdownToggle className="btn header-item waves-effect" tag="button"
         onMouseEnter={()=>{
          setHover(true);
        }}
        onMouseLeave={()=>{
          setHover(false);
        }}
        
        
        style={
        (isAdminMode && {color:"#2a3042"}),
        (hover ? {
        color:"rgba(255, 255, 255, 0.6)",
        padding: "14px 15px",
        // marginTop: "6px",
        // borderRadius: "35px",
        transition: "0.3s",
        fontSize: "14px",
        fontWeight: 500,
        fontFamily: "Roboto, sans-serif",
        textTransform: "uppercase",
        // backgroundColor:"#212180",
        letterSpacing: "0.3px",} : {
        color:"#efefef",
        padding: "14px 15px",
        transition: "0.3s",
        fontSize: "14px",
        fontWeight: 500,
        fontFamily: "Roboto, sans-serif",
        textTransform: "uppercase",
        letterSpacing: "0.3px",})
        }
        >
          {/* <img src={flag} alt="Skote" height="16" className="mr-1" /> */}
          <span className="align-middle" 
            className="notify-item"
            style={(isInModal&&{color:"black"})}
            >{lng}</span>
        </DropdownToggle>
        <DropdownMenu className="language-switch" right>
          <DropdownItem
            tag="a"
            href="#"
            onClick={() => changeLanguageAction('eng')}
          >
            {/* <img src={usFlag} alt="Skote" className="mr-1" height="12" /> */}
            <span className="align-middle" style={{color:"black"}}>English</span>
          </DropdownItem>
          <div className="dropdown-divider"></div>        
          <DropdownItem
            tag="a"
            href="#"
            onClick={() =>changeLanguageAction('it')}
            className="notify-item"
          >
            {/* <img src={Rwanda} alt="Skote" className="mr-1" height="12" /> */}
            <span className="align-middle" style={{color:"black"}}>Ikinyarwanda</span>
          </DropdownItem>
          
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

export default withNamespaces()(LanguageDropdown);
