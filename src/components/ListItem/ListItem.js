import React from 'react';
import './ListItem.scss';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="listItem">
        <img src={this.props.hero.avatar_url}></img>
        <span>{this.props.hero.full_name}</span>
        <span>{this.props.hero.full_name}</span>
        <span>{this.props.hero.description}</span>
      </div>
    );
  }
}

export default ListItem;
