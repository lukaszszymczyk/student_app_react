import { Button } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import styles from './Form.module.scss';
import Input from './../Input/Input';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      full_name: '',
      semester: 0,
      field_of_study: 'Information Technology',
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
    this.props.addStudentFn(this.state);
  }

  render() {
    return (
      <div className={styles.addForm}>
        <h2 className={styles.addForm__header}>Add student</h2>
        <form onSubmit={this.handleSubmit}>
          <Input tag="input" name="full_name" label="Full name" type="text" onChangeFn={this.handleInputChange} />
          <Input tag="input" name="semester" label="Semester" type="number" onChangeFn={this.handleInputChange} />
          <Input
            tag="select"
            name="field_of_study"
            label="Field of study"
            fieldTypes={this.props.fieldTypes}
            onChangeFn={this.handleInputChange}
          />
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

export default Form;
