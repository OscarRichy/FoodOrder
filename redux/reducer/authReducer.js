import {authActionType} from "../actions/authActions";
import {deleteJwt, setJwt} from "../../utils/jwt";


const initialState = {
  isLoggedIn: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionType.LOGIN:
      if (action.payload.token) {
        // If called from /users/me and return true | Not called from login page
        setJwt(action.payload.token);
      }
      return {
        ...state,
        isLoggedIn: true,
      }
    case authActionType.LOGIN_ERROR:
      deleteJwt();
      return {
        ...state,
        isLoggedIn: false,
      }
    case authActionType.LOGOUT:
      deleteJwt();
      return {
        ...state,
        isLoggedIn: false,
      }
    default:
      return state;
  }
}
export default authReducer;