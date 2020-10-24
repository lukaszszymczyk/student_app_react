import React from 'react';
import './App.scss';
import ListView from './components/ListView/ListView';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './components/Modal/Modal';

class App extends React.Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  addStudent = () => {
    this.closeModal();
  };

  render() {
    const { isModalOpen } = this.state;

    return (
      <div className="student-app list-unstyled">
        <ListView openModalFn={this.openModal} />
        {isModalOpen && <Modal closeModalFn={this.closeModal} addStudent={this.addStudent} />}
      </div>
    );
  }
}

export default App;
