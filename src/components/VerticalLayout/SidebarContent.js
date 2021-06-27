import React, {  useEffect } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import '../../assets/scss/home.scss';
// MetisMenu
import MetisMenu from "metismenujs";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import AssignmentIcon from '@material-ui/icons/Assignment';
import DashboardIcon from '@material-ui/icons/Dashboard';
import TocIcon from '@material-ui/icons/Toc';
import WebIcon from '@material-ui/icons/Web';
import GroupIcon from '@material-ui/icons/Group';
import EventNoteIcon from '@material-ui/icons/EventNote';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ChatIcon from '@material-ui/icons/Chat';

//i18n
import { withNamespaces } from 'react-i18next';
import {
    checkEditRight,
    checkApproveRight,
    checkAdminRight,
    approveForumPost,
    checkSecondApproverRight,
    checkCreateRight,
  } from '../../helpers/storePersonelData';
  

const PathLinks = ({path, text, pathName, className }) => {
return  (
<li>
{pathName === path ? (
  <Link to={path} onClick={(event) => event.preventDefault()} >
    <i className={className} />
    <span>{text}</span>
  </Link>
) : (
  <Link to={path}>
    <i className={className} />
    {console.log(text)
    }
    <span>{text}</span>
  </Link>
)}
</li>
);
};

const MainLinks = ({text, pathName, className }) => {
    return  (
    <>
    {pathName === "#" ? (
      <Link to="#" onClick={(event) => event.preventDefault()} className="waves-effect">
        <i className={className} /><span className="badge badge-pill badge-info float-right"></span>
        <span>{text}</span>
      </Link>
    ) : (
      <Link to="#" className="waves-effect">
        <i className={className} /><span className="badge badge-pill badge-info float-right"></span>
        <span>{text}</span>
      </Link>
    )}
    </>
    );
    };


const SidebarContent = (props) => {
        
    // Use ComponentDidMount and ComponentDidUpdate method symultaniously
    var pathName = props.location.pathname;
    console.log('===>pathName',pathName);
    
    //  useEffect(() => {

    //     var pathName = props.location.pathname;

    //     const initMenu = () => {
    //         new MetisMenu("#side-menu");
    //         var matchingMenuItem = null;
    //         var ul = document.getElementById("side-menu");
    //         var items = ul.getElementsByTagName("a");
    //         for (var i = 0; i < items.length; ++i) {
    //             if (pathName === items[i].pathname) {
    //                 matchingMenuItem = items[i];
    //                 break;
    //             }
    //         }
    //         if (matchingMenuItem) {
    //             activateParentDropdown(matchingMenuItem);
    //         }
    //     }
    //      initMenu();
    //   }, [props.location.pathname]);

  
    // function  activateParentDropdown(item) {
    //     item.classList.add("active");
    //     const parent = item.parentElement;

    //     if (parent) {
    //         parent.classList.add("mm-active");
    //         const parent2 = parent.parentElement;

    //         if (parent2) {
    //             parent2.classList.add("mm-show");

    //             const parent3 = parent2.parentElement;

    //             if (parent3) {
    //                 parent3.classList.add("mm-active"); // li
    //                 parent3.childNodes[0].classList.add("mm-active"); //a
    //                 const parent4 = parent3.parentElement;
    //                 if (parent4) {
    //                     parent4.classList.add("mm-active");
    //                 }
    //             }
    //         }
    //         return false;
    //     }
    //     return false;
    // };

          return (
           
            <React.Fragment>
                 <div id="sidebar-menu">
                 <ProSidebar>
                  <SidebarHeader>
    Menu
  </SidebarHeader>
  <Menu iconShape="square">
    <MenuItem icon={<DashboardIcon />}>Dashboard</MenuItem>
    {checkCreateRight()&&
    <SubMenu title="Topics" icon={<TocIcon />}>
      {checkEditRight()&&<MenuItem><Link to="/create-topic">{props.t('CreateTopic') }</Link></MenuItem>}
      <MenuItem><Link to="/Topics">{props.t('Topics List') }</Link></MenuItem>
    </SubMenu>
    }
    <SubMenu title="Posts" icon={<WebIcon />}>
    {checkEditRight()&&<MenuItem><Link to="/create-post">{props.t('Create Post') }</Link></MenuItem>}
      {checkApproveRight() && !checkAdminRight()?<MenuItem><Link to="/for-approval-posts">{props.t('Posts For Approvals') }</Link></MenuItem>:""}
      <MenuItem><Link to="/pending-posts">{props.t('Pending Posts') }</Link>
      </MenuItem><MenuItem><Link to="/published-posts">{props.t('Published Posts') }</Link>
      </MenuItem>
      <MenuItem><Link to="/rejected-posts">{props.t('Rejected Posts') }</Link></MenuItem>
      {checkEditRight()&&<MenuItem><Link to="/requested-modification-posts">{props.t('Posts For Modification') }</Link></MenuItem>}
    </SubMenu>
    {checkAdminRight()&&
    <SubMenu title={props.t('Users')} icon={<GroupIcon />}>
      <MenuItem><Link to="/users">{props.t('All Users') }</Link></MenuItem>
      <MenuItem><Link to="/create-user">{props.t('Create User') }</Link><Link to="/" />
      </MenuItem>
    </SubMenu>
}
{!checkSecondApproverRight()&&<SubMenu title={props.t('Menstrual Cycle Tracking') } icon={<EventNoteIcon />}>
      <MenuItem><Link to="/admin/menstruation-cycle">{props.t('Menstrual Cycle Tracking') }</Link></MenuItem>
    </SubMenu>
    }
{checkAdminRight()||checkCreateRight()?
    <SubMenu title={props.t('All Locations') } icon={<LocationOnIcon />}>
      <MenuItem><Link to="/locations">{props.t('All Locations') }</Link></MenuItem>
      {checkEditRight()&&<MenuItem><Link to="/create-location">{props.t('Create Location') }</Link></MenuItem>}
      <MenuItem><Link to="/admin/locations-map">{props.t('Locations Map') }</Link></MenuItem>
    </SubMenu>:""
}
{checkAdminRight()||checkCreateRight()?
    <SubMenu title={props.t('Quiz')} icon={<AssignmentIcon />}>
      {checkEditRight()&&<MenuItem><Link to="/create-quiz">{props.t('Create Quiz') }</Link></MenuItem>}
      <MenuItem><Link to="/quizes">Quizes</Link></MenuItem>
      {checkEditRight()&&<MenuItem><Link to="/create-question">{props.t('Create Question') }</Link></MenuItem>}
       <MenuItem><Link to="/questions">{props.t('Questions') }</Link></MenuItem>
      <MenuItem><Link to="/quiz-results">{props.t('Results') }</Link></MenuItem>
    </SubMenu>:""
}
{!checkSecondApproverRight()&&<SubMenu title={props.t('Chat')} icon={<ChatIcon />}>
    <MenuItem><Link to="/Chat">{props.t('Chat') }</Link></MenuItem>
      <MenuItem><Link to="/admin/community/chat">{props.t('Forum') }</Link></MenuItem>
    </SubMenu>
}
  </Menu>
</ProSidebar>;
                
            </div>
            </React.Fragment>
          );
        }

    export default withRouter(withNamespaces() (SidebarContent));
