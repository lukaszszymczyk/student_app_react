import React from 'react';
import './ListView.scss';
import axios from 'axios';
import { GoPlus } from 'react-icons/go';
import ListItem from '../ListItem/ListItem';

class ListView extends React.Component {
  state = {
    students: [],
  };

  componentWillMount() {
    axios.get('http://localhost:4000/students').then((response) => {
      this.setState({
        students: response.data,
      });
    });
  }

  render() {
    let students = this.state.students.map((student) => {
      return (
        <tr>
          <ListItem student={student} />
        </tr>
      );
    });
    return (
      <div className="list-view">
        <div className="list-view__header">
          <button className="list-view__button btn btn-primary">
            <GoPlus />
            <span> Add student</span>
          </button>
        </div>
        <table className="list">
          <thead>
            <tr className="list__header">
              <th className="header-item" id="name">
                <h3>Name</h3>
              </th>
              <th className="header-item" id="semester">
                <h3>Semester</h3>
              </th>
              <th className="header-item" id="field_of_study">
                <h3>Field of study</h3>
              </th>
              <th className="header-item" id="faculty">
                <h3>Faculty</h3>
              </th>
              <th className="header-item" id="university">
                <h3>University</h3>
              </th>
            </tr>
          </thead>
          <tbody>{students}</tbody>
        </table>
      </div>
    );
  }
}

export default ListView;
