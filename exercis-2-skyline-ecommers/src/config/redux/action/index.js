/* import firebase register */
import firebaseRegis from "../../API/firebaseRegis";

const actionUserName = () => (dispatch) => {
  setTimeout(() => {
    return dispatch({
      type: "CHANGE_USER",
      value: "Sandiko prastyo",
    });
  }, 2000);
};
export default actionUserName;

//action register
export const actionRegister = (data) => (dispatch) => {
  dispatch({ type: "CHANGE_ISLOADING", value: true });
  return firebaseRegis(data.email, data.password);
};
