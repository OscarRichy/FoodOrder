import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LoginStackNavigator } from './navigation/navigators';
import { Provider } from 'react-redux';
import { createStore , combineReducers, applyMiddleware} from 'redux';
import authReducer from './redux/reducer/authReducer';
import userReducer from './redux/reducer/userReducer';

import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    userReducer: userReducer,
    authReducer: authReducer,
  }
);

//Bien nomer ses variables pour s'y retrouver après
const store = createStore(rootReducer, applyMiddleware(thunk));


export default function App() {
  return (
    <Provider store= {store}>
      <NavigationContainer>
        <LoginStackNavigator/>
      </NavigationContainer>
    </Provider> 
  );
}

