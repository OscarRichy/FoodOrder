
import axiosInterceptor from '../../utils/AxiosInterceptor';

export const userActionType = {
    FETCH_USER_SUCCESS: 'FETCH_USER_SUCCESS',
    FETCH_USER_FAILED: 'FETCH_USER_FAILED',
    PATCH_USER_SUCCESS: 'PATCH_USER_SUCCESS',
  }

  export const fetchUserSuccess = user => {
    return {
      type: userActionType.FETCH_USER_SUCCESS,
      payload: {
        user
      }
    };
  };
  
  export const fetchMe = (successCallback, errorCallback) => {
    return dispatch => {

      //dispatch(pageLoading(true));
      axiosInterceptor.get("users/me/")
        .then(res => {
          console.log(res.data)
          //dispatch(fetchUserSuccess(res.data));
          //dispatch(authActionLogin());
          successCallback();
          
        })

        .catch(err => {
          //dispatch(fetchUserFailed(err.message));
          // we remove the token from storage. Because he is not connected anyway and we cannot fetch him.
          //dispatch(authActionLogout());
          errorCallback();

        }).finally(() => {
        //setTimeout(function() {}.bind(this), 1000)
        //dispatch(pageLoading(false));
      });
    };
  };