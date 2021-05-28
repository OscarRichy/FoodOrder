import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View, Text, ImageBackground, Image, ScrollView, TouchableHighlight, TouchableOpacity, Input} from 'react-native';
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import { styles } from '../utils/styles';
import { Formik } from 'formik';
import * as yup from 'yup';
import { patchMe, patchProfilePic } from '../redux/actions/userActions';
import { connect } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';

const UpdateSchema = yup.object({
    email: yup.string()
        .email('Please enter a valid email'),

    first_name: yup.string()
        .min(1)
        .max(150),
    last_name: yup.string()
        .min(1)
        .max(150),
    phone_number: yup.string()
        .min(1)
        .max(128),

})

function UpdateProfile(props){
    const navigation = useNavigation();

    const {patchMeDispatch}= props;
    
    const {userState} = props;

    const {patchProfilePicDispatch} =props;
 
    const success = function() {
        console.log('UpdateImageValide')
    }

    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);

    const pickImage = async (setFieldValue, handleSubmit) => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.cancelled) {
            //upload
            if (result.uri) {
                console.log('result uri', result.uri);
                let data = {
                    name: 'IMG.' + result.uri.split('.').pop(),
                    type: "image/" + result.uri.split('.').pop(),
                    uri: Platform.OS === 'ios' ? result.uri : result.uri.replace('file://', ''),
                };
                console.log('data1 :', data);
                setFieldValue('profile_img', data);
                console.log('data2 :', data);
                handleSubmit();
            }
        }
    };   
    
    return(
        <ScrollView style= {styles.container}>
            
            <Text style={{marginTop: 60, marginLeft:20, fontSize: 17, fontWeight: '800'}}>Update Your Account</Text>
            
            <View style={styles.shadow}>
                    <Image source={{uri : userState.profile_img}} style={styles.profileImage}></Image>
            </View>
            
            <Formik
                initialValues={{ profile_img: '',
                                }}
                onSubmit={(data, actions) => {                   
                    patchProfilePicDispatch(data,actions,success)
                    console.log('profile_i',userState.profile_img)
                }}
            >
                {(props) => (
                    <View>
                        <Button style={{marginTop: 20, alignSelf: 'center'}} type='clear' title= 'Change Profile Image' disabled={props.isSubmitting} 
                            onPress={() => { pickImage(props.setFieldValue, props.handleSubmit) }}
                        />
                    </View>
                
                )}
        
            </Formik>

            <Formik
                initialValues={{ email: userState.email,
                                first_name: userState.first_name,
                                last_name: userState.last_name,
                                phone_number: userState.phone_number,
                                }}
                validationSchema={UpdateSchema}
                
                onSubmit={( data, actions) => {                   
                    patchMeDispatch(data,actions,success)
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
                            placeholder='First Name'
                            onChangeText = {props.handleChange('first_name')}
                            value={props.values.first_name}
                        />
                        <Text style={styles.errortext}> {props.errors.first_name}</Text>

                        <TextInput
                            style={styles.textinput}
                            placeholder='Last Name'
                            autoCapitalize= 'characters'
                            onChangeText = {props.handleChange('last_name')}
                            value={props.values.last_name}
                        />
                        <Text style={styles.errortext} > {props.errors.last_name}</Text>

                        <TextInput
                            style={styles.textinput}
                            placeholder='Phone Number'
                            onChangeText = {props.handleChange('phone_number')}
                            value={props.values.phone_number}
                            keyboardType='numeric'
                        />   
                        <Text style={styles.errortext}> {props.errors.phone_number}</Text>
                        
                        <Button style={{marginTop: 20, marginLeft: 20, marginRight: 20}} title= 'Save Updates' disabled={props.isSubmitting} 
                        onPress={props.handleSubmit}  
                        />

                    </View>
                    
                
                )}
        
            </Formik>
        </ScrollView>
    )
}

const mapStateToProps = (state) => {
    return{
      userState: state.userReducer,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return{
        patchMeDispatch: (data,actions,successCallback) => {
            dispatch(patchMe(data,actions,successCallback));
        },
        patchProfilePicDispatch: (data,actions,successCallback) =>{
            dispatch(patchProfilePic(data,actions,successCallback))
        },
    };
  };
  
 export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile)