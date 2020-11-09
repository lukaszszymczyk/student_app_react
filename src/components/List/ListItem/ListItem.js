import React from 'react';
import styles from './ListItem.module.scss';
import { RiDeleteBin6Line } from 'react-icons/ri';
import AppContext from 'context';

class ListItem extends React.Component {
  render() {
    const { full_name, semester, field_of_study, faculty, university } = this.props;
    return (
      <AppContext.Consumer>
        {(context) => (
          <tr className={styles.listItem}>
            <td>{full_name}</td>
            <td>{semester}</td>
            <td>{field_of_study}</td>
            <td>{faculty}</td>
            <td>{university}</td>
            <td>
              <RiDeleteBin6Line></RiDeleteBin6Line>
            </td>
          </tr>
        )}
      </AppContext.Consumer>
    );
  }
}

export default ListItem;
