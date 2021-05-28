import React, { useEffect } from 'react';
import { StyleSheet,View, Text} from 'react-native';
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import { AFTER_FIRST_UNLOCK } from 'expo-secure-store';
import {connect} from 'react-redux';
import {fetchMe} from '../redux/actions/userActions'

function FirstHomeScreen(props){
    const {fetchMeDispatch} = props;
    const navigation = useNavigation();

    const success = function() {
     navigation.navigate('Home')
     console.log('valide')
    }
    const error = function() {
      console.log('erreur')
    }
   // navigation.navigate('Home')
    useEffect( () => {
        fetchMeDispatch(success,error)
    },[])

    return( 
        <View style={styles.container}>
            <View style={ {marginTop: 200} }>
                <Text style={{marginTop: 10, fontSize: 40, textAlign: 'center', fontWeight: 'bold'}}> Instamobile </Text>
                <Button   
                style={{marginTop: 50,marginLeft: 20, marginRight: 20}}
                title="Login" 
                onPress ={ () => navigation.navigate('Login') }
                />
                <Button   
                style={{marginTop: 20}}
                title="Sign Up" 
                type= 'clear'
                onPress ={ () => navigation.navigate('SignUp') }
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
});

const mapStateToProps = (state) => {
    return{
      userStates: state.userReducer,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return{
      // Tu dois passer les params ici 
      fetchMeDispatch: (successCallback, errorCallback) => {
        dispatch(fetchMe(successCallback, errorCallback));
      },
      fetchCategoryAddressesDispatch: () =>{
        dispatch(fetchCategoryAddressesAction());
      },
      fetchAddressTitlesAutocompleteDispatch: () =>{
        dispatch(fetchAddressTitlesAutocompleteAction());
      },
    }
  }
  
 export default connect(mapStateToProps, mapDispatchToProps)(FirstHomeScreen)