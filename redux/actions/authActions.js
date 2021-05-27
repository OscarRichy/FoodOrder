import axiosInterceptor from '../../utils/AxiosInterceptor';

export const authActionType = {
    LOGIN: 'LOGIN',
    LOGIN_ERROR: 'LOGIN_ERROR',
    LOGOUT: 'LOGOUT',

  }
  export const authActionLogin = (isLoggedIn,token) => {
    return (dispatch) => {
      dispatch({
        type: authActionType.LOGIN,
        payload: {
          isLoggedIn,
          token,
        },
      })
    }
  }
  // Delete token if login error
 export const authLoginErrorAction = () => {
    return (dispatch) => {
      dispatch({
        type: authActionType.LOGIN_ERROR,
        payload: {
        
        },
      })
    }
  }
export const authActionLogout = () => {
    return (dispatch) => {
      dispatch({
        type: authActionType.LOGOUT,
        payload: {},
      })
    }
  }

export const login = (data,actions,successCallback, errorCallback) =>{
  
  return (dispatch) => {

    const apiUrl = 'users/registration/login/';

    actions.setSubmitting(true); // Ceci grise le bouton du formulaire pour dire à l'utilisateur qu'on traite sa requete
    // On dit à Axios d'aller appeler l'apiUrl avec la méthode POST, et les données du formulaire (data)
    axiosInterceptor.post(apiUrl, data)
        .then(res => {
            dispatch(authActionLogin(true, res.data.access_token));
            successCallback(); // Si l'appel de l'api est une réussite, donc on s'est bien enregistré, on redirige l'utilisateur vers la page profile
        })
        .catch(err => {          
          dispatch(authLoginErrorAction());
          errorCallback();
            
        }).finally(() => {
          actions.setSubmitting(false); // On finit par remettre le bouton à la normale
        });     
  }
}