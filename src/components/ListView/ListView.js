import React from 'react';
import './ListView.scss';
import axios from 'axios';
import { GoPlus } from 'react-icons/go';
import ListItem from '../ListItem/ListItem';

class ListView extends React.Component {
  state = {
    heroes: [],
  };

  componentWillMount() {
    axios.get('http://localhost:4000/heroes').then((response) => {
      this.setState({
        heroes: response.data.data,
      });
    });
  }

  render() {
    let heroes = this.state.heroes.map((hero) => {
      return (
        <tr>
          <ListItem hero={hero} />
        </tr>
      );
    });
    return (
      <div className="listView">
        <button className="listView__button btn btn-success">
          <GoPlus />
          <span> Add hero</span>
        </button>

        <table className="list">
          <thead>
            <tr className="list__header">
              <th id="name">
                <h3>Name</h3>
              </th>
              <th id="type">
                <h3>Type</h3>
              </th>
              <th id="description">
                <h3>Description</h3>
              </th>
            </tr>
          </thead>
          <tbody>{heroes}</tbody>
        </table>
      </div>
    );
  }
}

export default ListView;
