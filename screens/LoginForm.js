import React from 'react';
import { StyleSheet, TextInput, View, Text} from 'react-native';
import { Button } from 'react-native-elements'
import { Formik } from 'formik';
import * as yup from 'yup';

import { useNavigation } from '@react-navigation/native';

import {connect} from 'react-redux';
import { login } from '../redux/actions/authActions';


const LoginSchema = yup.object({
    email: yup.string()
        .email('Please enter a valid email')
        .required(),

    password: yup.string()
        .required('Password is required'),
        

})

function LoginForm(props) {

    const navigation = useNavigation();

    const {loginDispatch}= props;

    const error = function() {
        console.log('erreurLogin')
    }

    const success = function() {
        navigation.navigate('Home')
        console.log('LoginValide')
    }

    return(
        
        <View style={ {marginTop: 10 } }>
            <Formik
                initialValues={{email: '', password: ''}}
                validationSchema={LoginSchema}
                
                onSubmit={( data, actions) => {

                    console.log('0')

                    loginDispatch(data,actions, success, error) 

                    console.log('5')              
        
                }}
            >
                {(props) => (
                    <View>
                        <TextInput
                            style={styles.textinput}
                            placeholder='Email'
                            autoCompleteType='email'
                            onChangeText = {props.handleChange('email')}
                            value={props.values.email}
                        />
                        <Text style={styles.errortext}> {props.errors.email}</Text>

                        <TextInput
                            style={styles.textinput}
                            placeholder='Password'
                            autoCompleteType='password'
                            secureTextEntry={true}
                            onChangeText = {props.handleChange('password')}
                            value={props.values.password}
                        />  
                        <Text style={styles.errortext}> {props.errors.password}</Text>   

                        
                        <Button style={{marginTop: 20, marginLeft: 20, marginRight: 20}} title= 'Login' disabled={props.isSubmitting} onPress={props.handleSubmit}  
                        />

                    </View>
                
                )}
        
            </Formik>
        </View>
    )
}

const styles = {
    textinput: {
        marginTop: 10, 
        marginLeft: 20, 
        marginRight: 20, 
        height: 40, 
        borderColor: '#a9a9a9', 
        backgroundColor: '#f5f5f5', 
        borderTopStartRadius: 5, 
        borderTopEndRadius: 5, 
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5 ,
        borderWidth: 1, 
        paddingLeft: 10

    },

    errortext: {
        marginTop: 0,
        marginLeft: 20,
        color: '#f00',
        fontSize: 10,
        

    }
}

const mapStateToProps = (state) => {
    return{
      authStates: state.authReducer,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return{
        loginDispatch: (data,actions,successCallback, errorCallback) => {
            dispatch(login(data,actions,successCallback, errorCallback));
      },
    }
  }
  
 export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)