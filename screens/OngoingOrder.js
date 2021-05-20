import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View, Text, ImageBackground, Image, ScrollView, TouchableHighlight, TouchableOpacity} from 'react-native';
import { Button, Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import { deleteJwt } from '../utils/jwt';
import axiosInterceptor from '../utils/AxiosInterceptor';
import{ IconButton, Colors } from 'react-native-paper';
import Emoji from 'react-native-emoji';
import { styles } from '../utils/styles';


export default function OngoingOrder(){
    const navigation = useNavigation();
    const onPressTrack = () => navigation.navigate('TrackOrder');
    

    return(
        <ScrollView style={styles.container}>
            <View style={{backgroundColor: '#7a395c',height: 380,alignContent: 'center', alignItems: 'center'}}>

                <IconButton
                    style={{marginTop: 60, marginLeft: 10, position: 'absolute', alignSelf: 'flex-start'}}
                    icon = "chevron-left"
                    color='white'
                    size={30}
                    onPress={() => {navigation.navigate('Home')}}
                />
                <Text style={{marginTop: 75,alignSelf: 'center', color: 'white', fontSize: 15, fontWeight :'bold'}} > Ongoing Order </Text>
                <View style={{marginTop: 30, height: 70, width: 70, borderRadius: 25,backgroundColor: 'white', justifyContent:'center'}}>
                    <Image source={require('../assets/AlarmClock.png')} style={styles.image2}></Image>
                </View>
                <Text style={{marginTop: 20,fontSize: 23, fontWeight: 'bold', color:'white'}}>60 Minutes</Text>
                <Text style={{marginTop: 7,fontSize: 11, fontWeight: '500', color:'silver'}}>Estimate Delivery Time</Text>

            </View>

            {/* Suivi de commande */}

            <View style={{marginTop: -80,height: 400, width: 315, backgroundColor: 'ghostwhite',borderRadius: 30, alignSelf:'center'}}>
               
    
               {/*Entête */}

                <Text style={{marginTop: 20, marginLeft: 20, fontSize: 12, fontWeight: '800'}}>Track Your Order</Text>
                <Text style={{ marginTop: -15,marginLeft: 220, fontSize: 13, fontWeight: '700', color: 'silver'}}>FDS876543</Text>
                <Text style={{textAlign: 'center',fontSize: 13, fontWeight: '300', color: 'lightgrey'}}>_______________________________________</Text>
               
                {/* Differentes etapes*/}

                <Text style={{transform: [{rotate: '90deg'}], fontWeight: '300',color:'lightgrey',fontSize: 35,position:'absolute', marginTop: 200, marginLeft: -100}}>-  -  -  -  -  -  -  -  -   </Text>

                <View style={{marginTop: 10,flexDirection: "row", height: 50}}>

                    <View style={{marginLeft: 20,justifyContent: 'center',alignSelf:'center',height: 40, width: 40, backgroundColor: "white", borderRadius: 10}}>
                        <Icon
                            name= 'check-square'
                            type='font-awesome'
                            color= 'teal'
                            
                        />
                    </View>
                    <Text style={{marginTop: 10,marginLeft: 5, fontSize: 12, fontWeight: 'bold'}}>The restaurant is preparing your order</Text>
                    <Text style={{marginTop: 30,marginLeft: -230,color:'silver', fontSize: 12, fontWeight: 'bold'}}>09:00am - May 13, 2021</Text>
                </View>

                <View style={{marginTop: 40,flexDirection: "row", height: 50}}>

                    <View style={{marginLeft: 20,justifyContent: 'center',alignSelf:'center',height: 40, width: 40, backgroundColor: "white", borderRadius: 10}}>
                        <Icon
                            name= 'check-square'
                            type='font-awesome'
                            color= 'teal'
                            
                        />
                    </View>

                    <Text style={{marginTop: 10,marginLeft: 5, fontSize: 12, fontWeight: 'bold'}}>The driver is picking up your order</Text>
                    <Text style={{marginTop: 30,marginLeft: -205,color:'silver', fontSize: 12, fontWeight: 'bold'}}>09:30am - May 13, 2021</Text>

                </View>

                <View style={{marginTop: 40,flexDirection: "row", height: 50}}>

                    <View style={{marginLeft: 20,justifyContent: 'center',alignSelf:'center',height: 40, width: 40, backgroundColor: "white", borderRadius: 10}}>
                        <Icon
                            name= 'route'
                            type='font-awesome-5'
                            color= '#7a395c'
                            
                        />
                    </View>

                    <Text style={{marginTop: 10,marginLeft: 5, fontSize: 12, fontWeight: 'bold'}}>The driver is on its way to your address</Text>
                    <Text style={{marginTop: 30,marginLeft: -235,color:'silver', fontSize: 12, fontWeight: 'bold'}}>09:35am - May 13, 2021</Text>
                    
                </View>

                <View style={{marginTop: 40,flexDirection: "row", height: 50, opacity: 0.3}}>

                    <View style={{marginLeft: 20,justifyContent: 'center',alignSelf:'center',height: 40, width: 40, backgroundColor: "white", borderRadius: 10}}>
                        <Icon    
                            name= 'clock'
                            type='font-awesome-5'
                            color= '#7a395c'
                            solid={true}
                            
                            
                        />
                    </View>

                    <Text style={{marginTop: 10,marginLeft: 5, fontSize: 12, fontWeight: 'bold'}}>You have received your order</Text>
                    <Text style={{marginTop: 30,marginLeft: -175,color:'silver', fontSize: 12, fontWeight: 'bold'}}>09:35am - May 13, 2021</Text>
                    
                </View>

                

            </View>



            <TouchableOpacity onPress={onPressTrack} underlayColor= 'white'>
                <View style={{borderRadius: 30, marginTop: 30, height: 65, width: 315, backgroundColor: '#7a395c', alignSelf: 'center', justifyContent: 'center'}}>
                    <Text style={{color:'white', fontSize: 15, fontWeight: 'bold',  alignSelf:'center'}}>Track With Maps</Text>
                </View>
            </TouchableOpacity>

            
        </ScrollView>

    )
}