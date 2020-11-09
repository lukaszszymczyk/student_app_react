import { Modal as AntModal } from 'antd';
import axios from 'axios';
import React from 'react';
import AppContext from 'context';
import Form from '../Form/Form';

class Modal extends React.Component {
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
          <AntModal visible={context.isModalOpen} onCancel={context.closeModal} bodyStyle={{ background: '#f5f6fb' }} footer={null}>
            <Form fieldTypes={fieldTypes} addStudentFn={context.addStudent} />
          </AntModal>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Modal;
