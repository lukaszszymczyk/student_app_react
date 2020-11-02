import React from 'react';
import './App.scss';
import ListView from './components/ListView/ListView';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './components/Modal/Modal';
import axios from 'axios';
import AppContext from './context';

class App extends React.Component {
  state = {
    students: [],
    isModalOpen: false,
  };

  componentDidMount() {
    this.getStudents();
  }

  getStudents() {
    axios.get('http://localhost:4000/students').then((response) => {
      this.setState({
        students: response.data,
        isModalOpen: false,
      });
    });
  }

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

  addStudent = (student) => {
    axios.post('http://localhost:4000/students', student).then(() => {
      this.getStudents();
    });
    this.closeModal();
  };

  render() {
    const { isModalOpen } = this.state;
    const contextElements = {
      ...this.state,
      addStudent: this.addStudent,
      openModal: this.openModal,
      closeModal: this.closeModal,
    };
    return (
      <AppContext.Provider value={contextElements}>
        <div className="student-app list-unstyled">
          <ListView />
          {isModalOpen && <Modal />}
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
