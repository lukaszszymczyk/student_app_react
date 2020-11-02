import React from 'react';
import './Modal.scss';
import axios from 'axios';
import Form from './../Form/Form';
import { GrFormClose } from 'react-icons/gr';
import { IconContext } from 'react-icons/lib';
import AppContext from '../../context';

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
          <div className="app-modal">
            <button className="app-modal__button" onClick={context.closeModal}>
              <IconContext.Provider value={{ color: 'white' }}>
                <GrFormClose />
              </IconContext.Provider>
            </button>
            <Form fieldTypes={fieldTypes} addStudent={context.addStudent} />
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Modal;
