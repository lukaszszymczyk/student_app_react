import React from 'react';
import './ListItem.scss';

class ListItem extends React.Component {
  render() {
    return (
      <div className="list-item">
        <span>{this.props.student.full_name}</span>
        <span>{this.props.student.semester}</span>
        <span>{this.props.student.field_of_study}</span>
        <span>{this.props.student.faculty}</span>
        <span>{this.props.student.university}</span>
      </div>
    );
  }
}

export default ListItem;
