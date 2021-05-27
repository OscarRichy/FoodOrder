import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View, Text, ImageBackground, Image, ScrollView, TouchableHighlight, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import { styles } from '../utils/styles';
import {Avatar} from 'react-native-paper'
import { Formik } from 'formik';
import * as yup from 'yup';

const UpdateSchema = yup.object({
    email: yup.string()
        .email('Please enter a valid email')
        .required(),

    first_name: yup.string()
        .required()
        .min(1)
        .max(150),
    last_name: yup.string()
        .required()
        .min(1)
        .max(150),
    phone_number: yup.string()
        .required()
        .min(1)
        .max(128),

})

export default function UpdateProfile(){
    const navigation = useNavigation();
    return(
        <ScrollView style= {styles.container}>
            <Text style={{marginTop: 60, marginLeft:20, fontSize: 17, fontWeight: '800'}}>Update Your Account</Text>
            <Avatar.Image
                source={
                    require('../assets/profilepictest.jpg')
                }
                style={{alignSelf:'center', marginTop: 40}}
                size={100}
                
            />
            <Button
                title='Change Profile Image'
                style={{alignSelf: 'center',  marginTop: 20}}
                type='clear'
                onPress={()=>{

                }}
            />
            <Formik
                initialValues={{ email: '', first_name: '', last_name: '', phone_number: ''}}
                validationSchema={UpdateSchema}
                
                onSubmit={( data, actions) => {                   
        
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