import React, { useState } from 'react';

import { Button } from 'antd';
import Input from './../Input/Input';
import { addStudentAction } from 'actions';
import { connect } from 'react-redux';
import styles from './Form.module.scss';

const Form = (props) => {
  const { types } = props;
  const [state, setState] = useState({
    fullName: '',
    semester: 0,
    fieldOfStudy: 'Information Technology',
    faculty: '',
    university: '',
  });

  const handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addStudent(state);
  };

  return (
    <div className={styles.addForm}>
      <h2 className={styles.addForm__header}>Add student</h2>
      <form onSubmit={handleSubmit}>
        <Input tag="input" name="fullName" label="Full name" type="text" onChangeFn={handleInputChange} />
        <Input tag="input" name="semester" label="Semester" type="number" onChangeFn={handleInputChange} />
        <Input tag="select" name="fieldOfStudy" label="Field of study" fieldTypes={types} onChangeFn={handleInputChange} />
        <Input tag="input" name="faculty" label="Faculty" type="text" onChangeFn={handleInputChange} />
        <Input tag="input" name="university" label="University" type="text" onChangeFn={handleInputChange} />
        <Button htmlType="submit" type="primary" className={styles.addForm__button}>
          <span>Save</span>
        </Button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { types } = state.studentReducer;
  return { types };
};

const mapDispatchToProps = (dispatch) => ({
  addStudent: (student) => dispatch(addStudentAction(student)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
