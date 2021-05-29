import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import { deleteJwt } from '../utils/jwt';
import { connect } from 'react-redux';



function DrawerContent(props) {
    const{userState}= props;
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{marginTop: 15}}>
                            <Avatar.Image 
                                source={
                                    {uri: userState.profile_img}
                                }
                                size={50}
                            />
                            <View>
                                <Title style={styles.title}>{userState.first_name} {userState.last_name}</Title>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>265</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account" 
                                type='material-community'
                                color={color}
                                size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('MyProfile')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="shopping-cart" 
                                type='font-awesome'
                                color={color}
                                size={size}
                                />
                            )}
                            label="Ongoing Order"
                            onPress={() => {props.navigation.navigate('OngoingOrder')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name= 'route'
                                type='font-awesome-5'
                                color={color}
                                size={size}
                                />
                            )}
                            label="Track Your Order"
                            onPress={() => {props.navigation.navigate('TrackOrder')}}
                        />

                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name= 'account-cog'
                                type='material-community'
                                color={color}
                                size={size}
                                />
                            )}
                            label="Profile Settings"
                            onPress={() => {props.navigation.navigate('UpdateProfile')}}
                        />
                    </Drawer.Section>
                
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {deleteJwt(), props.navigation.navigate('FirstHomeScreen')}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });

  const mapStateToProps = (state) => {
    return{
      userState: state.userReducer,
    }
  }

    
 export default connect(mapStateToProps)(DrawerContent)