import React from 'react';
import { GoPlus } from 'react-icons/go';
import AppContext from '../../context';
import ListItem from '../ListItem/ListItem';
import './ListView.scss';
import { Button } from 'antd';
import 'antd/dist/antd.css';

class ListView extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <AppContext.Consumer>
        {(context) => (
          <div className="list-view">
            <div className="list-view__header">
              <Button type="primary" className="list-view__button" onClick={context.openModal}>
                <GoPlus />
                <span className="button__label"> Add student</span>
              </Button>
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
