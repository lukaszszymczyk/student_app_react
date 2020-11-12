import { Button } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import Input from './../Input/Input';
import styles from './Form.module.scss';
import { connect } from 'react-redux';
import { addStudentAction } from 'actions';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      semester: 0,
      fieldOfStudy: 'Information Technology',
      faculty: '',
      university: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addStudent(this.state);
  }

  render() {
    const { types } = this.props;
    return (
      <div className={styles.addForm}>
        <h2 className={styles.addForm__header}>Add student</h2>
        <form onSubmit={this.handleSubmit}>
          <Input tag="input" name="fullName" label="Full name" type="text" onChangeFn={this.handleInputChange} />
          <Input tag="input" name="semester" label="Semester" type="number" onChangeFn={this.handleInputChange} />
          <Input tag="select" name="fieldOfStudy" label="Field of study" fieldTypes={types} onChangeFn={this.handleInputChange} />
          <Input tag="input" name="faculty" label="Faculty" type="text" onChangeFn={this.handleInputChange} />
          <Input tag="input" name="university" label="University" type="text" onChangeFn={this.handleInputChange} />
          <Button htmlType="submit" type="primary" className={styles.addForm__button}>
            <span>Save</span>
          </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { types } = state;
  return { types };
};

const mapDispatchToProps = (dispatch) => ({
  addStudent: (student) => dispatch(addStudentAction(student)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
