import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
      flex: 1,
      flexDirection: "column",
      
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
        marginTop: 7,
        alignSelf: 'center',
        resizeMode: 'cover',
        width : 150 ,
        height : 110,
        borderRadius: 20
    },
    image2:{
        // flex:1,
         //marginTop: -25,
         //marginLeft: 20,
         alignSelf:'center',
         width : 45 ,
         height : 45,
         //borderColor: '#f8f8f8',
         transform: [{rotate: '-20deg'}],
         opacity: 0.8
         
     },
    view1: {
     //   fontWeight: 'bold',
       // overflow: 'hidden',
        //borderColor:'#dcdcdc',
        backgroundColor: '#7a395c',
        borderRadius: 30,
        fontSize: 20,
        alignSelf: 'center',
        //paddingVertical: 90,
        height:220 ,
        width: 340
    },
    view2: {

        flexDirection: 'row',
        marginTop:10,

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
    category: {
        flexDirection : 'row',
        marginTop:10,
        marginLeft: 10, 
        borderColor:'#dcdcdc',
        backgroundColor: '#f8f8ff',
        borderRadius: 30,
        fontSize: 17,
        height:55 ,
        width: 110
    },

    activeCategory: {
        flexDirection : 'row',
        marginTop:10,
        marginLeft: 10, 
        borderColor:'#dcdcdc',
        backgroundColor: 'orange',
        borderRadius: 30,
        fontSize: 17,
        height:55 ,
        width: 110
    },
    textCategory: {   
        marginTop: 18,
        paddingLeft: 30, 
        marginLeft: -10, 
        color:'grey', 
        fontSize: 13, 
        fontWeight: '700'
    },
    activeTextCategory: {   
        marginTop: 18,
        paddingLeft: 30, 
        marginLeft: -10, 
        color:'white', 
        fontSize: 13, 
        fontWeight: '700'
    },

    emojiCategory: {
        marginLeft: 10,
        fontSize: 15,
        marginTop: 18,

    },
    menuBar: {
        position: 'absolute',
        bottom: 10,
        alignSelf:'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: 375
    },
    menuView:{
        height: 200,
        width:165,
        backgroundColor: 'white',
        borderRadius: 15,

    }


  });