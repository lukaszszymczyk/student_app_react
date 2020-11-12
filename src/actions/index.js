import axios from 'axios';

const API_STUDENT_URL = 'https://us-central1-studentapp-a86fb.cloudfunctions.net/student';
const API_DICTIONARY_URL = 'https://us-central1-studentapp-a86fb.cloudfunctions.net/dict';

export const API_REQUEST = 'API_REQUEST';
export const API_REQUEST_FAILURE = 'API_REQUEST_FAILURE';

export const GET_STUDENTS_SUCCESS = 'GET_STUDENTS_SUCCESS';
export const ADD_STUDENT_SUCCESS = 'ADD_STUDENT_SUCCESS';
export const DELETE_STUDENT_SUCCESS = 'DELETE_STUDENT_SUCCESS';
export const GET_TYPES_SUCCESS = 'GET_TYPES_SUCCESS';

export const getStudentsAction = () => (dispatch) => {
  dispatch({ type: API_REQUEST });
  return axios
    .get(API_STUDENT_URL)
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
    .post(API_STUDENT_URL, student)
    .then(() => {
      dispatch({ type: ADD_STUDENT_SUCCESS, payload: student });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: API_REQUEST_FAILURE });
    });
};

export const deleteStudentAction = (id) => (dispatch) => {
  return axios
    .delete(`${API_STUDENT_URL}/${id}`)
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
    .get(API_DICTIONARY_URL)
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
