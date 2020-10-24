import React from 'react';
import './Form.scss';

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
    this.props.addStudent();
    event.preventDefault();
  }

  render() {
    return (
      <div className="add-form">
        <h2 className="add-form__header">Add student</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="add-form__item form-group">
            <label for="full_name">Full name</label>
            <input name="fullName" type="text" id="full_name" onChange={this.handleInputChange}></input>
          </div>
          <div className="add-form__item form-group">
            <label for="semester">Semester</label>
            <input name="semester" type="number" id="semester" onChange={this.handleInputChange}></input>
          </div>
          <div className="add-form__item form-group">
            <label for="field_of_study">Field of study</label>
            <select name="fieldOfStudy" id="field_of_study" onChange={this.handleInputChange}>
              {this.props.fieldTypes.map((type) => {
                return (
                  <option name="fieldOfStudy" value={type.name}>
                    {type.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="add-form__item form-group">
            <label for="faculty">Faculty</label>
            <input name="faculty" type="text" id="faculty" onChange={this.handleInputChange}></input>
          </div>
          <div className="add-form__item form-group">
            <label for="university">University</label>
            <input name="university" type="text" id="university" onChange={this.handleInputChange}></input>
          </div>
          <button type="submit" className="add-form__button btn btn-success">
            <span>Save</span>
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
