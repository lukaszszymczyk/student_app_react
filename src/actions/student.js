import StudentAPI from 'api/StudentAPI.js';
import DictAPI from 'api/DictAPI.js';
import ActionTypes from 'actions/types.js';

export const getStudentsAction = () => (dispatch) => {
  dispatch({ type: ActionTypes.API_REQUEST });
  return StudentAPI.getStudentsRequest()
    .then((response) => {
      dispatch({ type: ActionTypes.GET_STUDENTS_SUCCESS, payload: response.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ActionTypes.API_REQUEST_FAILURE });
    });
};

export const addStudentAction = (student) => (dispatch) => {
  return StudentAPI.addStudentRequest(student)
    .then(() => {
      dispatch({ type: ActionTypes.ADD_STUDENT_SUCCESS, payload: student });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ActionTypes.API_REQUEST_FAILURE });
    });
};

export const deleteStudentAction = (id) => (dispatch) => {
  return StudentAPI.deleteStudentRequest()
    .then(() => {
      dispatch({ type: ActionTypes.DELETE_STUDENT_SUCCESS, payload: { id } });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ActionTypes.API_REQUEST_FAILURE });
    });
};

export const getTypesAction = () => (dispatch) => {
  return DictAPI.getTypesRequest()
    .then((response) => {
      dispatch({ type: ActionTypes.GET_TYPES_SUCCESS, payload: response.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ActionTypes.API_REQUEST_FAILURE });
    });
};
