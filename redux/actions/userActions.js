
import axiosInterceptor from '../../utils/AxiosInterceptor';

export const userActionType = {
    FETCH_USER_SUCCESS: 'FETCH_USER_SUCCESS',
    FETCH_USER_FAILED: 'FETCH_USER_FAILED',
    PATCH_USER_SUCCESS: 'PATCH_USER_SUCCESS',
    PATCH_PROFILE_PIC_SUCCESS: 'PATCH_PROFILE_PIC_SUCCESS',
  }

export const fetchUserSuccess = (user) => {
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
        dispatch(fetchUserSuccess(res.data));
        //dispatch(authActionLogin());
        successCallback();
        
      })

      .catch(err => {
        console.log(err.response)
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

export const patchUserSuccess = (user) => {
  return {
    type: userActionType.PATCH_USER_SUCCESS,
    payload: {
      user
    }
  };
};


export const patchMe = (data, actions,successCallback) => {
  return dispatch => {
    
    actions.setSubmitting(true);
    console.log('1')
    axiosInterceptor.patch("users/me/update/", data)
  
      .then(res => {
        console.log('2')
        console.log(res.data)
        dispatch(patchUserSuccess(res.data));
        successCallback();
        
      })

      .catch(err => {
        console.log('3')
        console.log(err.response)
        //dispatch(patchUserFailed(err.message));
      

      }).finally(() => {
        console.log('4')
        actions.setSubmitting(false); // On finit par remettre le bouton à la normale
    });
  };
};

export const patchProfilePicSuccess = (user) => {
  return {
    type: userActionType.PATCH_PROFILE_PIC_SUCCESS,
    payload: {
      user
    }
  };
};

export const patchProfilePic = (data,actions, successCallback) => {
  const formData = new FormData();
  return dispatch => {
    formData.append('profile_img', data.profile_img);
    console.log('1')
    actions.setSubmitting(true);

    axiosInterceptor.patch("users/me/profile_img/", formData, {'Content-Type': 'application/json'})
  
      .then(res => {
        console.log('2 valide')
        console.log('res_data',res.data)
        dispatch(patchProfilePicSuccess(res.data));
        successCallback();
        
      })

      .catch(err => {
        console.log('3 erreur')
        console.log(err.response)
        //dispatch(patchUserFailed(err.message));
      

      }).finally(() => {
        console.log('4')
        actions.setSubmitting(false); // On finit par remettre le bouton à la normale
    });
  };
};
