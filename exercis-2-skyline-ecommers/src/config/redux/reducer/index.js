//Initial State
const initialState = {
  popup: false,
  islogin: false,
  isloding: false,
  user: "sandiko",
};

//Reducer
const reducer = (state = initialState, action) => {
  if (action.type === "CHANGE_POPUP") {
    return {
      ...state,
      popup: action.value,
    };
  }
  if (action.type === "CHANGE_ISLOGIN") {
    return {
      ...state,
      islogin: action.value,
    };
  }
  if (action.type === "CHANGE_USER") {
    return {
      ...state,
      user: action.value,
    };
  }
  if (action.type === "CHANGE_ISLODING") {
    return {
      ...state,
      isloading: action.value,
    };
  }
  return state;
};
export default reducer;
