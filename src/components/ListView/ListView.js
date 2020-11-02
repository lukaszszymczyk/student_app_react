import React from 'react';
import './ListView.scss';
import { GoPlus } from 'react-icons/go';
import ListItem from '../ListItem/ListItem';
import AppContext from '../../context';
import App from '../../App';

class ListView extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <AppContext.Consumer>
        {(context) => (
          <div className="list-view">
            <div className="list-view__header">
              <button onClick={context.openModal} className="list-view__button btn btn-primary">
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
              <tbody>
                {context.students.map((student) => (
                  <tr key={Math.random().toString()}>
                    <ListItem student={student} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default ListView;
