import {userActionType} from "../actions/userActions";

const initialState = {
  "id": 0,
  "email": "",
  "first_name": "",
  "last_name": "",
  "profile_img": null,
  "phone_number": 0,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionType.FETCH_USER_SUCCESS:
      return {
        ...action.payload.user,
      }
    case userActionType.PATCH_USER_SUCCESS:
      return {
        ...state,
        ...action.payload.user,
      }
    case userActionType.PATCH_PROFILE_PIC_SUCCESS:
      return {
        ...state,
        ...action.payload.user,
      }
    case userActionType.FETCH_USER_FAILED:
      return {
        ...state,
      }
    case userActionType.PUT_USER_SUCCESS:
      return {
        ...action.payload.user,
      }
    case userActionType.PUT_USER_FAILED:
      return {
        ...state,
      }
    default:
      return state;
  }
}
export default userReducer;