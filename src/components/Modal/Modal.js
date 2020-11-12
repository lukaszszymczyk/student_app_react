import { Modal as AntModal } from 'antd';
import React from 'react';
import Form from '../Form/Form';
import { connect } from 'react-redux';
import { closeModalAction } from '../../actions';

const Modal = () => {
  return (
    <AntModal visible={true} onCancel={this.props.closeModal} bodyStyle={{ background: '#f5f6fb' }} footer={null}>
      <Form />
    </AntModal>
  );
};

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModalAction()),
});

export default connect(null, mapDispatchToProps)(Modal);
