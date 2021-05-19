import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View, Text, ImageBackground, Image, ScrollView, TouchableHighlight, TouchableOpacity} from 'react-native';
import { Button, Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import { deleteJwt } from '../utils/jwt';
import axiosInterceptor from '../utils/AxiosInterceptor';
import{ IconButton, Colors } from 'react-native-paper';
import Emoji from 'react-native-emoji';
import { styles } from '../utils/styles';


export default function TrackOrder(){
    const navigation = useNavigation();

    

    return(
        <ScrollView style={styles.container}>
            <View style={{height: 500, opacity: 0.9,alignContent: 'center', alignItems: 'center'}}>

                <Image source={require('../assets/Maps.jpg')} style={{height: 600, width: 375, position: 'absolute', marginTop: 50}}></Image>


                <IconButton
                    style={{marginTop: 60, marginLeft: 10, position: 'absolute', alignSelf: 'flex-start'}}
                    icon = "chevron-left"
                    color='black'
                    size={30}
                    onPress={() => {navigation.navigate('OngoingOrder')}}
                />
                <Text style={{marginTop: 75,alignSelf: 'center',  fontSize: 15, fontWeight :'bold'}} > Order Tracking </Text>

            </View>

            {/* Suivi de commande */}

            <View style={{marginTop: 30,height: 260, width: 340, backgroundColor: 'ghostwhite',borderRadius: 30, alignSelf:'center', overflow: 'hidden'}}>
               
                {/* Differentes etapes*/}

                <Text style={{transform: [{rotate: '90deg'}], fontWeight: '300',color:'orange',fontSize: 20,position:'absolute', marginTop: 60, marginLeft: 5}}>- - - - -  </Text>

                <View style={{marginTop: 10,flexDirection: "row", height: 50}}>

                    <View style={{marginLeft: 20,justifyContent: 'center',alignSelf:'center',height: 40, width: 40, backgroundColor: "white", borderRadius: 10}}>
                        <Icon
                            name= 'telegram-plane'
                            type='font-awesome-5'
                            color= '#7a395c'
                            
                        />
                    </View>
                    <Text style={{marginTop: 10,marginLeft: 15, fontSize: 12, fontWeight: 'bold'}}>Dominic Street 47, W Hampton</Text>
                    <Text style={{marginTop: 30,marginLeft: -184,color:'silver', fontSize: 12, fontWeight: 'bold'}}>Delivery Address</Text>
                </View>

                <View style={{marginTop: 30,flexDirection: "row", height: 50}}>

                    <View style={{marginLeft: 20,justifyContent: 'center',alignSelf:'center',height: 40, width: 40, backgroundColor: "white", borderRadius: 10}}>
                        <Icon
                            name= 'clock'
                            type='font-awesome-5'
                            color= '#7a395c'
                            solid={true}
                            
                        />
                    </View>

                    <Text style={{marginTop: 10,marginLeft: 15, fontSize: 12, fontWeight: 'bold'}}>30 mins</Text>
                    <Text style={{marginTop: 30,marginLeft: -48,color:'silver', fontSize: 12, fontWeight: 'bold'}}>Delivery Time</Text>

                </View>

                <View style={{marginTop: 25,backgroundColor: '#7a395c', flexDirection: 'row', height: 100, alignItems: 'center'}}> 
                    <Image source={require('../assets/profilepictest.jpg')} style={{height: 55, width: 55, marginLeft: 20, borderRadius: 30}}></Image>
                    <View style={{ marginLeft: 20}}>
                        <Text style={{color:'white', fontWeight: 'bold'}}>Jonie Key</Text>
                        <Text style={{color:'slategrey', marginTop: 5}}>Driver - ID 654653</Text>
                    </View>
                    <Icon
                        style={{marginLeft: 20}}
                        name='phone-alt'
                        type='font-awesome-5'
                        color='white'
                    />

                    <Icon
                        style={{marginLeft: 30}}
                        name='comment-dots'
                        type='font-awesome-5'
                        color='white'
                        solid={true}
                    />
                </View>

            </View>
            
        </ScrollView>

    )
}