import axios from 'axios';

export const API_REQUEST = 'API_REQUEST';
export const API_REQUEST_FAILURE = 'API_REQUEST_FAILURE';

export const GET_STUDENTS_SUCCESS = 'GET_STUDENTS_SUCCESS';
export const ADD_STUDENT_SUCCESS = 'ADD_STUDENT_SUCCESS';
export const DELETE_STUDENT_SUCCESS = 'DELETE_STUDENT_SUCCESS';
export const GET_TYPES_SUCCESS = 'GET_TYPES_SUCCESS';

export const getStudentsAction = () => (dispatch) => {
  dispatch({ type: API_REQUEST });
  return axios
    .get('http://localhost:4000/students')
    .then((response) => {
      dispatch({ type: GET_STUDENTS_SUCCESS, payload: response.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: API_REQUEST_FAILURE });
    });
};

export const addStudentAction = (student) => (dispatch) => {
  return axios
    .post(`http://localhost:4000/students`, student)
    .then(() => {
      dispatch({ type: ADD_STUDENT_SUCCESS });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: API_REQUEST_FAILURE });
    });
};

export const deleteStudentAction = (id) => (dispatch) => {
  return axios
    .delete(`http://localhost:4000/students/${id}`)
    .then(() => {
      dispatch({ type: DELETE_STUDENT_SUCCESS, payload: { id } });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: API_REQUEST_FAILURE });
    });
};

export const getTypesAction = () => (dispatch) => {
  return axios
    .get('http://localhost:4000/dict/field-types')
    .then((response) => {
      dispatch({ type: GET_TYPES_SUCCESS, payload: response.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const openModalAction = () => {
  return {
    type: 'OPEN_MODAL',
  };
};

export const closeModalAction = () => {
  return {
    type: 'CLOSE_MODAL',
  };
};
