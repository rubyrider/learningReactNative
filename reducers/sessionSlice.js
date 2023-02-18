// sessionSlice.js

// Actions
const SET_SESSION = 'SET_SESSION';

export const setSession = session => ({
  type: SET_SESSION,
  session,
});

// Reducer
const initialState = {
  session: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SESSION:
      return {
        ...state,
        session: action.session,
      };
    default:
      return state;
  }
};
