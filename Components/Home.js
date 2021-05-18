import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View, Text, ImageBackground, Image, ScrollView, TouchableHighlight, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import { deleteJwt } from '../utils/jwt';
import axiosInterceptor from '../utils/AxiosInterceptor';
import{ IconButton, Colors } from 'react-native-paper';
import Emoji from 'react-native-emoji';
import { styles } from '../utils/styles';



export default function Home(){
    const navigation = useNavigation();
    const [state, setState] = useState({activeIndex: 0});
    
    return( 

        <View style={styles.container}>
            

            <View>
                <IconButton
                    
                    style={{marginLeft: 10, marginTop: 50, position: 'absolute',borderRadius: 20, borderWidth: 1,borderColor: 'lightgrey'}}
                    icon = "apps"
                    color='#7a395c'
                    size={30}
                    border
                    onPress={() => navigation.openDrawer()}
                />

                <Text style={{marginTop: 50,fontSize: 14, color: 'grey', textAlign:'center',alignSelf:'center', fontWeight: '500'}}>Your Address</Text>
                <Text style={{marginTop: 2,fontSize: 14, alignSelf:'center', fontWeight:'bold'}}>Dominic Street 47, W Hampton</Text>

                <IconButton
                    
                    style={{marginLeft: 320, marginTop: 50, position: 'absolute',borderRadius: 20, borderWidth: 1,borderColor: 'lightgrey'}}
                    icon = "magnify"
                    color='#7a395c'
                    size={30}
                    border
                    onPress={() => {}}
                />
            </View>
                {/*Ongoing Order view*/}

                <View style={styles.view1}>

                    <Text style={{marginTop: 25, marginLeft: 20, color: 'white', fontSize: 15, fontWeight :'bold'}} > Ongoing Order </Text>
                    <Text style={{position: 'absolute',marginTop:25, marginLeft: 235, color: 'silver', fontSize: 15}} > FDS876543 </Text>
                    <Text style={{marginTop: 10,alignSelf: 'center', fontSize: 17, color:'lightgrey'}}> ----------------------------------------</Text>  
                    <Text style={{marginTop: 10, marginLeft:20,fontSize: 12, color:'white', fontWeight: 'bold'}}> Jonie is on its way to your address</Text>  
                    <Text style={{marginTop: 10, marginLeft:20,fontSize: 12, color: 'silver', fontWeight: '500'}}> 30 Mins - Estimated time</Text>  
                   
                    <IconButton
                    style={{marginTop: -40, marginLeft: 270}}
                    icon = "chevron-right"
                    color='white'
                    size={30}
                    onPress={() => {navigation.navigate('OngoingOrder')}}
                    />

                    <Image source={require('../assets/Maps.jpg')} style={{height: 80, width: 300, marginTop: 0, alignSelf: 'center', borderRadius: 20}}></Image>

                </View>
        {/*Categories */}
            <Text style={{marginTop: 30, marginLeft:20, fontSize: 17, fontWeight: '800'}}>Category</Text>

            <View style={styles.view2}>
                <ScrollView showsHorizontalScrollIndicator= {false} horizontal={true} >
                    
                    <View>
                        <TouchableOpacity onPress={() => {setState({activeIndex: 0})}}
                        style={state.activeIndex === 0 ? styles.activeCategory : styles.category}>
                        
                        <Emoji 
                            name='doughnut'
                            style={styles.emojiCategory}
                        >
                        </Emoji>
                    
                        <Text style={state.activeIndex ===0 ? styles.activeTextCategory : styles.textCategory}>Donuts</Text>
                        </TouchableOpacity>
                    </View>
                
                    <View>
                    <TouchableOpacity onPress={() => {setState({activeIndex: 1})}}
                        style={state.activeIndex === 1 ? styles.activeCategory : styles.category}>
                    
                        <Emoji 
                            name='hamburger'
                            style={styles.emojiCategory}
                        >
                        </Emoji>
                    
                        <Text style={state.activeIndex === 1 ? styles.activeTextCategory : styles.textCategory}>Burger</Text>
                    </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity onPress={() => {setState({activeIndex: 2})}}
                        style={state.activeIndex === 2 ? styles.activeCategory : styles.category}>

                        <Emoji 
                            name='pizza'
                            style={styles.emojiCategory}
                        >
                        </Emoji>

                        <Text  style={state.activeIndex === 2 ? styles.activeTextCategory : styles.textCategory}>Pizza</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity onPress={() => {setState({activeIndex: 3})}}
                        style={state.activeIndex === 3 ? styles.activeCategory : styles.category}>
                    
                        <Emoji 
                            name='lollipop'
                            style={styles.emojiCategory}
                        >
                        </Emoji>
                        
                        <Text  style={state.activeIndex === 3 ? styles.activeTextCategory : styles.textCategory}>Deserts</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </View>

        {/* Popular Menu */}

            <View style={{flexDirection : 'row', marginTop: 20}}>

                <Text style={{marginLeft:20, fontSize: 17, fontWeight: '800'}}>Popular Menu</Text>

                <Button
                    style={{marginTop: -7,marginLeft: 140}}
                    titleStyle={{color:'#7a395c', fontWeight: 'bold', fontSize: 14}}
                    title= 'See All'
                    iconPosition= 'right'
                    type= 'clear'
                    icon = {{name:'chevron-right',size:20, color:'#850565'}}
                    onPress = { () => {}}
                />
            </View>

            <View style={{flexDirection: 'row',alignSelf: 'center'}}>
                <View style={styles.menuView}>
                    <Image source={require('../assets/Donuts1.jpg')} style={styles.image}></Image>

                    <Text style={{marginLeft: 8,marginTop: 10, fontSize: 15, fontWeight: '800'}}>Stroberi Donskuy</Text>

                    <Text style={{marginLeft: 8,marginTop: 5, fontSize: 13,color:'silver', fontWeight: '600'}}>Violet Bakery's</Text>

                    <Text style={{marginLeft: 8,marginTop: 7, fontSize: 14,color:'orange', fontWeight: '800'}}>$32</Text>

                </View>

                <View style={[styles.menuView,{marginLeft: 20 }]}>
                    <Image source={require('../assets/Donuts2.jpg')} style={styles.image}></Image>
                    <Text style={{marginLeft: 8,marginTop: 10, fontSize: 15, fontWeight: '800'}}>Double Dondon</Text>

                    <Text style={{marginLeft: 8,marginTop: 5, fontSize: 13,color:'silver', fontWeight: '600'}}>Aloevera Caffe</Text>

                    <Text style={{marginLeft: 8,marginTop: 7, fontSize: 14,color:'orange', fontWeight: '800'}}>$25</Text>

                </View>
            </View>



        {/*Incons bar */}
            <View style={styles.menuBar}>
                <IconButton
                    
                    icon = "home-variant"
                    color='#7a395c'
                    size={35}
                    onPress={() => {}}
                />

                <IconButton
                    
                    icon = "cart"
                    color='silver'
                    size={35}
                    onPress={() => {}}
                />

                <IconButton
                    
                    style={{marginTop: 0, borderRadius: 40, backgroundColor: 'orange', width:60, height: 60}}
                    icon = "shopping"
                    color='white'
                    size={30}

                    onPress={() => {}}
                />

                <IconButton
                    
                    icon = "bell"
                    color='silver'
                    size={35}
                    onPress={() => {}}
                />
                <IconButton
                    
                    icon = "account"
                    color='silver'
                    size={35}
                    onPress={() => {}}
                />

            </View>

        </View>
       
        
    )
}
