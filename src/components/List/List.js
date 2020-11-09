import { Button } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import { GoPlus } from 'react-icons/go';
import AppContext from 'context';
import styles from './List.module.scss';
import ListItem from './ListItem/ListItem';

class List extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <AppContext.Consumer>
        {(context) => (
          <div className={styles.studentList}>
            <div className={styles.studentList__header}>
              <Button type="primary" className={styles.studentList__button} onClick={context.openModal}>
                <GoPlus />
                <span className={styles.button__label}> Add student</span>
              </Button>
            </div>
            <table className={styles.list}>
              <thead>
                <tr className={styles.list__header}>
                  <th className={styles.headerItem} id="name">
                    Name
                  </th>
                  <th className={styles.headerItem} id="semester">
                    Semester
                  </th>
                  <th className={styles.headerItem} id="field_of_study">
                    Field of study
                  </th>
                  <th className={styles.headerItem} id="faculty">
                    Faculty
                  </th>
                  <th className={styles.headerItem} id="university">
                    University
                  </th>
                  <th id="icons"></th>
                </tr>
              </thead>
              <tbody>
                {context.students.map((student) => (
                  <ListItem key={Math.random().toString()} {...student} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default List;
