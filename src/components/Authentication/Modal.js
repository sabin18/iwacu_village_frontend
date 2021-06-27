
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PersonalData from './personalData';
import { withNamespaces } from 'react-i18next';
import { withRouter } from 'react-router-dom';

const ModalComponent= (props) => {
  const {
    buttonLabel,
    className,
  } = props;

  const [modal, setModal] = useState(true);

  // const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger">{buttonLabel}</Button>
      <Modal isOpen={modal} className={className}>
        <ModalHeader>{props.t('Enter Your Age And Gender')}</ModalHeader>
        <ModalBody>
       <PersonalData />
        </ModalBody>
      </Modal>
    </div>
  );
  }
  
export default withRouter (withNamespaces()(ModalComponent));
