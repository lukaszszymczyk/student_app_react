import React from 'react';
import styles from './Form.module.scss';
import { Button } from 'antd';
import 'antd/dist/antd.css';

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
          <div className={styles.addForm__item}>
            <label for="full_name">Full name</label>
            <input className={styles.inputItem} name="full_name" type="text" id="full_name" onChange={this.handleInputChange}></input>
          </div>
          <div className={styles.addForm__item}>
            <label for="semester">Semester</label>
            <input className={styles.inputItem} name="semester" type="number" id="semester" onChange={this.handleInputChange}></input>
          </div>
          <div className={styles.addForm__item}>
            <label for="field_of_study">Field of study</label>
            <select className={styles.inputItem} name="field_of_study" id="field_of_study" onChange={this.handleInputChange}>
              {this.props.fieldTypes.map((type) => {
                return (
                  <option key={type.name} name="fieldOfStudy" value={type.name}>
                    {type.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className={styles.addForm__item}>
            <label for="faculty">Faculty</label>
            <input className={styles.inputItem} name="faculty" type="text" id="faculty" onChange={this.handleInputChange}></input>
          </div>
          <div className={styles.addForm__item}>
            <label for="university">University</label>
            <input className={styles.inputItem} name="university" type="text" id="university" onChange={this.handleInputChange}></input>
          </div>
          <Button htmlType="submit" type="primary" className={styles.addForm__button}>
            <span>Save</span>
          </Button>
        </form>
      </div>
    );
  }
}

export default Form;
