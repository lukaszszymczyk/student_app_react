import React from 'react';
import './Form.scss';

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
    this.props.addStudent(this.state);
  }

  render() {
    return (
      <div className="add-form">
        <h2 className="add-form__header">Add student</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="add-form__item form-group">
            <label for="full_name">Full name</label>
            <input className="input_item" name="full_name" type="text" id="full_name" onChange={this.handleInputChange}></input>
          </div>
          <div className="add-form__item form-group">
            <label for="semester">Semester</label>
            <input className="input_item" name="semester" type="number" id="semester" onChange={this.handleInputChange}></input>
          </div>
          <div className="add-form__item form-group">
            <label for="field_of_study">Field of study</label>
            <select className="input_item" name="field_of_study" id="field_of_study" onChange={this.handleInputChange}>
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
            <input className="input_item" name="faculty" type="text" id="faculty" onChange={this.handleInputChange}></input>
          </div>
          <div className="add-form__item form-group">
            <label for="university">University</label>
            <input className="input_item" name="university" type="text" id="university" onChange={this.handleInputChange}></input>
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
