import React from 'react';
import styles from './ListView.module.scss';
import Modal from 'components/Modal/Modal';
import axios from 'axios';
import AppContext from 'context';
import List from 'components/List/List';

class ListView extends React.Component {
  state = {
    students: [],
    isModalOpen: false,
  };

  componentDidMount() {
    this.getStudents();
  }

  addStudent = (student) => {
    axios.post('http://localhost:4000/students', student).then(() => {
      this.getStudents();
    });
    this.closeModal();
  };

  getStudents() {
    axios.get('http://localhost:4000/students').then((response) => {
      this.setState({
        students: response.data,
        isModalOpen: false,
      });
    });
  }

  deleteStudent(id) {
    axios.delete('http://localhost:4000/students/', { params: { ID: id } }).then((response) => {
      this.getStudents();
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

  render() {
    const { isModalOpen } = this.state;
    const contextElements = {
      ...this.state,
      addStudent: this.addStudent,
      deleteStudent: this.deleteStudent,
      openModal: this.openModal,
      closeModal: this.closeModal,
    };
    return (
      <AppContext.Provider value={contextElements}>
        <div className={styles.studentApp}>
          <List />
          {isModalOpen && <Modal />}
        </div>
      </AppContext.Provider>
    );
  }
}

export default ListView;
