import React from 'react';
import './AppModal.scss';
import Form from '../Form/Form';
import axios from 'axios';
import AppContext from '../../context';
import { Modal } from 'antd';

class AppModal extends React.Component {
  state = {
    fieldTypes: [],
  };

  componentDidMount() {
    axios.get('http://localhost:4000/dict/field-types').then((response) => {
      this.setState({
        fieldTypes: response.data,
      });
    });
  }

  render() {
    const { fieldTypes } = this.state;
    return (
      <AppContext.Consumer>
        {(context) => (
          <Modal visible={context.isModalOpen} onCancel={context.closeModal} bodyStyle={{ background: '#f5f6fb' }} footer={null}>
            <Form fieldTypes={fieldTypes} addStudent={context.addStudent} />
          </Modal>
        )}
      </AppContext.Consumer>
    );
  }
}

export default AppModal;
