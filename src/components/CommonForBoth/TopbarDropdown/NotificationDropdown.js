import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, Row, Col } from 'reactstrap';
import SimpleBar from 'simplebar-react';

//Import images
import avatar3 from '../../../assets/images/users/avatar-3.jpg';
import avatar4 from '../../../assets/images/users/avatar-4.jpg';

//i18n
import { withNamespaces } from 'react-i18next';
import { MESTRUAL_CYCLE_NOTIFICATIONS_QUERY } from '../../../querries/cycle';
import { useQuery} from '@apollo/client';

const NotificationDropdown = (props) => {
  // Declare a new state variable, which we'll call "menu"
  const [menu, setMenu] = useState(false);
  const { loading, error, data} = useQuery(MESTRUAL_CYCLE_NOTIFICATIONS_QUERY, {
    fetchPolicy: 'no-cache',
  });

  return (
    <>
      <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        className="dropdown d-inline-block"
        tag="li"
      >
        <DropdownToggle
          className="btn header-item noti-icon waves-effect"
          tag="button"
          id="page-header-notifications-dropdown"
        >
          <i className="bx bx-bell bx-tada"></i>
          <span className="badge badge-danger badge-pill">{data?.menstrualCycleNotifications.length}</span>
        </DropdownToggle>

        <DropdownMenu className="dropdown-menu dropdown-menu-lg p-0" right>
          <div className="p-3">
            <Row className="align-items-center">
              <Col>
                <h6 className="m-0"> {props.t('Notifications')} </h6>
              </Col>
              <div className="col-auto">
                <a href="#!" className="small">
                  {' '}
                  View All
                </a>
              </div>
            </Row>
          </div>
          <SimpleBar style={{ height: '230px' }}>
          {data?.menstrualCycleNotifications.map((notification)=>(
            <Link to="" className="text-reset notification-item">
              <div className="media">
                <div className="avatar-xs mr-3">
                  <span className="avatar-title bg-primary rounded-circle font-size-16">
                    <i className="bx bx-alarm-snooze"></i>
                  </span>
                </div>
                <div className="media-body">
                  <h6 className="mt-0 mb-1">{props.t(`${notification.event}`)}</h6>
                  <div className="font-size-12 text-muted">
                    <p className="mb-1">{props.t(`${notification.message}`)}</p>
                    <p className="mb-0">
                      <i className="mdi mdi-clock-outline"></i> {props.t('3 min ago')}{' '}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          </SimpleBar>
          <div className="p-2 border-top">
            <Link className="btn btn-sm btn-link font-size-14 btn-block text-center" to="#">
              {' '}
              {props.t('View all')}{' '}
            </Link>
          </div>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default withNamespaces()(NotificationDropdown);
