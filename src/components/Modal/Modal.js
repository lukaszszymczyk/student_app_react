import React from 'react';
import './Modal.scss';
import axios from 'axios';
import Form from './../Form/Form';
import { GrFormClose } from 'react-icons/gr';

class Modal extends React.Component {
  state = {
    fieldTypes: [],
  };

  componentWillMount() {
    axios.get('http://localhost:4000/dict/field-types').then((response) => {
      this.setState({
        fieldTypes: response.data,
      });
    });
  }

  render() {
    const { closeModalFn, addStudent } = this.props;
    const { fieldTypes } = this.state;
    return (
      <div className="app-modal">
        <button className="app-modal__button" onClick={closeModalFn}>
          <GrFormClose />
        </button>
        <Form fieldTypes={fieldTypes} addStudent={addStudent} />
      </div>
    );
  }
}

export default Modal;
