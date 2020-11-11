import React from 'react';
import styles from './ListItem.module.scss';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { connect } from 'react-redux';
import { deleteStudentAction } from 'actions';

class ListItem extends React.Component {
  render() {
    const { _id, fullName, semester, fieldOfStudy, faculty, university, deleteStudent } = this.props;
    return (
      <tr className={styles.listItem}>
        <td>{fullName}</td>
        <td>{semester}</td>
        <td>{fieldOfStudy}</td>
        <td>{faculty}</td>
        <td>{university}</td>
        <td>
          <RiDeleteBin6Line onClick={() => deleteStudent(_id)}></RiDeleteBin6Line>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteStudent: (id) => dispatch(deleteStudentAction(id)),
});

export default connect(null, mapDispatchToProps)(ListItem);
