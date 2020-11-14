import { getStudentsAction } from 'actions';
import { Spin } from 'antd';
import List from 'components/List/List';
import Modal from 'components/Modal/Modal';
import React from 'react';
import { connect } from 'react-redux';
import { getTypesAction } from 'actions';

class ListView extends React.Component {
  componentDidMount() {
    this.props.getStudents();
    this.props.getTypes();
  }

  render() {
    const { students, isModalOpen, isLoading } = this.props;
    return (
      <>
        <Spin tip="Loading..." spinning={isLoading} size="large">
          <List students={students} />
          {isModalOpen && <Modal />}
        </Spin>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { students, isModalOpen, isLoading } = state;
  return { students, isModalOpen, isLoading };
};

const mapDispatchToProps = (dispatch) => ({
  getStudents: () => dispatch(getStudentsAction()),
  getTypes: () => dispatch(getTypesAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
