import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View, Text, ImageBackground, Image, ScrollView} from 'react-native';
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import{ IconButton, Colors } from 'react-native-paper';
import { connect } from 'react-redux';


const imageBg = require ('../assets/ImageBg.png');

function MyProfile(props){
    const navigation = useNavigation();
    const {userState} = props;
    return( 


            <ScrollView style={ {marginTop: 0}}>

            <Image source={imageBg} style={styles.imageBg}></Image>
            
        {/* Bouton Icone notifications*/}

                <IconButton
                    
                    style={{marginLeft: 320, marginTop: 80, position: 'absolute', shadowOpacity: 0.5}}
                    icon = "bell-outline"
                    color={Colors.white}
                    size={30}
                    onPress={() => {}}
                />

            {/*Premiere view indiquant nom et prenom*/ }

                <View style={[styles.shadow, styles.view1]}>

                    <Text style={{marginTop: 90, fontSize: 20, fontWeight :'bold',textAlign:'center'}} > Hi, {userState.first_name} {userState.last_name}  </Text>
                    <Text style={{marginTop: 10,alignSelf: 'center', fontSize: 13,fontWeight: 'bold', color: '#a9a9a9'}}> Good Morning</Text>  
                
                </View>
               
            {/*Photo de profile*/ }

                <View style={styles.shadow}>
                    <Image source={{uri : userState.profile_img}} style={styles.image}></Image>
                </View>
            
            {/* View Popular Group */ }

                <Text style={{marginTop: 30, marginLeft:30, fontSize: 17, fontWeight: 'bold', color: 'grey'}}>Popular Group</Text>

                <View style={[styles.shadow2,styles.view2]}>

                    <Text style={{marginTop:20, marginLeft: 100, fontWeight: 'bold', fontSize: 17}}> Iron Yard  </Text>
                    <Image source={require( "../assets/profilepictest.jpg")} style={styles.image2}></Image>
                    <Text style={{marginTop: -40, marginLeft:250, fontSize: 17, fontWeight: 'bold', color: 'royalblue'}}>$1,295</Text>
                
                </View>

            {/* Activity */}

                <Text style={{marginTop: 20, marginLeft:30, fontSize: 17, fontWeight: 'bold', color: 'grey'}}>Activity</Text>
                
                <View style={[styles.shadow2]}>
                    <Text style={styles.textActivity}>  </Text>
                </View>
            
            </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    shadow :{
        shadowOpacity : 0.4,
        shadowColor : 'black',
        shadowRadius: 10,
        shadowOffset: {height: 10, width: 0},


    },
    shadow2 :{
        shadowOpacity : 0.5,
        shadowColor : 'grey',
        shadowRadius: 10,
        shadowOffset: {height: 10, width: 0}

    },
    imageBg: {
        shadowColor: 'mediumturquoise',
        shadowOpacity: 1,
        width : 375,
        height: 300,
        position: 'absolute',
        borderBottomLeftRadius : 45,
        borderBottomRightRadius : 45,
        resizeMode: "cover",
      //justifyContent: "center"
    },
    image:{
       // flex:1,
        marginTop: -250,
        alignSelf: 'center',
        resizeMode: 'cover',
        width : 110 ,
        height : 110,
        borderColor: '#f8f8f8',
        borderWidth: 4,
        borderRadius: 40
    },
    image2:{
        // flex:1,
         marginTop: -25,
         marginLeft: 20,
         width : 60 ,
         height : 60,
         //borderColor: '#f8f8f8',
         borderRadius: 15
     },
    view1: {
     //   fontWeight: 'bold',
       // overflow: 'hidden',
        marginTop:180,
        borderColor:'#dcdcdc',
        backgroundColor: '#f8f8ff',
        borderRadius: 30,
        fontSize: 20,
        alignSelf: 'center',
        //paddingVertical: 90,
        height:200 ,
        width: 320
    },
    view2: {
        //fontWeight: 'bold',
        //overflow: 'hidden',
        marginTop:10,
        borderColor:'#dcdcdc',
        backgroundColor: '#f8f8ff',
        borderRadius: 20,
        fontSize: 17,
        alignSelf: 'center',
       // paddingLeft: 100,
        //paddingVertical: 20,
        height:90 ,
        width: 320
    },
    textActivity: {
        fontWeight: 'bold',
        overflow: 'hidden',
        marginTop:10,
        borderColor:'#dcdcdc',
        borderWidth : 2,
        borderRadius: 20,
        fontSize: 20,
        alignSelf: 'center',
        textAlign:'center',
        height:120 ,
        width: 320
    },

  });
  
  const mapStateToProps = (state) => {
    return{
      userState: state.userReducer,
    }
  }

    
 export default connect(mapStateToProps)(MyProfile)