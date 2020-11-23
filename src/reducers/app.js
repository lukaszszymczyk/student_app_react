import ActionTypes from 'actions/types.js';

const initialState = {
  isModalOpen: false,
  isLoading: false,
};

export const appReducer = (state = initialState, { type }) => {
  switch (type) {
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
