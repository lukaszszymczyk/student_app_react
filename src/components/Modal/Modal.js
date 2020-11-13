import { Modal as AntModal } from 'antd';
import Form from '../Form/Form';
import React from 'react';
import { closeModalAction } from '../../actions';
import { connect } from 'react-redux';

const Modal = (props) => {
  return (
    <AntModal visible={true} onCancel={props.closeModal} bodyStyle={{ background: '#f5f6fb' }} footer={null}>
      <Form />
    </AntModal>
  );
};

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModalAction()),
});

export default connect(null, mapDispatchToProps)(Modal);
