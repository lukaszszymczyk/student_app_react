import React from 'react';
import styles from './ListItem.module.scss';

class ListItem extends React.Component {
  render() {
    const { full_name, semester, field_of_study, faculty, university } = this.props;
    return (
      <tr className={styles.listItem}>
        <td>{full_name}</td>
        <td>{semester}</td>
        <td>{field_of_study}</td>
        <td>{faculty}</td>
        <td>{university}</td>
      </tr>
    );
  }
}

export default ListItem;
