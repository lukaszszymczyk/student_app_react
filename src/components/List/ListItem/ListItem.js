import React from 'react';
import styles from './ListItem.module.scss';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { connect } from 'react-redux';
import { deleteStudentAction } from 'actions';

const ListItem = (props) => {
  const { id, fullName, semester, fieldOfStudy, faculty, university, deleteStudent } = props;
  return (
    <tr className={styles.listItem}>
      <td>{fullName}</td>
      <td>{semester}</td>
      <td>{fieldOfStudy}</td>
      <td>{faculty}</td>
      <td>{university}</td>
      <td className={styles.listItem__deleteIcon}>
        <RiDeleteBin6Line onClick={() => deleteStudent(id)}></RiDeleteBin6Line>
      </td>
    </tr>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteStudent: (id) => dispatch(deleteStudentAction(id)),
});

export default connect(null, mapDispatchToProps)(ListItem);
