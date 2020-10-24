import React from 'react';
import './App.scss';
import ListView from './components/ListView/ListView';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './components/Modal/Modal';

class App extends React.Component {
  render() {
    return (
      <div className="student-app list-unstyled">
        <ListView />
        <Modal />
      </div>
    );
  }
}

export default App;
