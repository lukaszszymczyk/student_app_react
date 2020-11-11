import React from 'react';
import styles from './ListView.module.scss';
import Modal from 'components/Modal/Modal';
import List from 'components/List/List';
import { connect } from 'react-redux';
import { getStudentsAction } from 'actions';
import { getTypesAction } from '../../actions';

class ListView extends React.Component {
  componentDidMount() {
    this.props.getStudents();
    this.props.getTypes();
  }

  render() {
    const { students, isModalOpen } = this.props;
    return (
      <div className={styles.studentApp}>
        <List students={students} />
        {isModalOpen && <Modal />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { students, isModalOpen } = state;
  return { students, isModalOpen };
};

const mapDispatchToProps = (dispatch) => ({
  getStudents: () => dispatch(getStudentsAction()),
  getTypes: () => dispatch(getTypesAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
