const initialState = {
  students: [],
  types: [],
  isModalOpen: false,
  isLoading: false,
};

const appReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case 'API_REQUEST':
      return {
        ...state,
        isLoading: true,
      };
    case 'API_REQUEST_FAILURE':
      return {
        ...state,
        isLoading: false,
      };
    case 'GET_STUDENTS_SUCCESS':
      return {
        ...state,
        students: payload,
        isLoading: false,
      };
    case 'DELETE_STUDENT_SUCCESS':
      return {
        ...state,
        students: [...state.students.filter((item) => item.id !== payload.id)],
      };
    case 'ADD_STUDENT_SUCCESS':
      return {
        ...state,
        students: [...state.students, payload],
        isModalOpen: false,
      };
    case 'GET_TYPES_SUCCESS':
      return {
        ...state,
        types: payload,
      };
    case 'OPEN_MODAL':
      return {
        ...state,
        isModalOpen: true,
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        isModalOpen: false,
      };
    default:
      return state;
  }
};

export default appReducer;
