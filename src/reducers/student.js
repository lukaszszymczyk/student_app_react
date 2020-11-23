import ActionTypes from 'actions/types.js';

const initialState = {
  students: [],
  types: [],
  isModalOpen: false,
  isLoading: false,
};

export const studentReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case ActionTypes.API_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.API_REQUEST_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case ActionTypes.GET_STUDENTS_SUCCESS:
      return {
        ...state,
        students: payload,
        isLoading: false,
      };
    case ActionTypes.DELETE_STUDENT_SUCCESS:
      return {
        ...state,
        students: [...state.students.filter((item) => item.id !== payload.id)],
      };
    case ActionTypes.ADD_STUDENT_SUCCESS:
      return {
        ...state,
        students: [...state.students, payload],
        isModalOpen: false,
      };
    case ActionTypes.GET_TYPES_SUCCESS:
      return {
        ...state,
        types: payload,
      };
    case ActionTypes.OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
      };
    case ActionTypes.CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
      };
    default:
      return state;
  }
};
