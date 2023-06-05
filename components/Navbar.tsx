import {StyleSheet, Image} from 'react-native';
import React from "react";

import Home from "../screens/Home";
import Search from "../screens/Search";
import Publish from "../screens/Publish";
import Account from "../screens/Account";
import Notifications from "../screens/Notifications";
import {NavigationContainer} from "@react-navigation/native";

import HouseFocusedIcon from '../assets/houseFill.svg';
import HouseIcon from '../assets/house.svg';

import SearchIcon from '../assets/search.svg';

import PublishFocusedIcon from '../assets/plusFill.svg';
import PublishIcon from '../assets/plus.svg';

import NotificationsFocusedIcon from '../assets/heartFill.svg';
import NotificationsIcon from '../assets/heart.svg';

import AccountFocusedIcon from '../assets/userFill.svg';
import AccountIcon from '../assets/user.svg';

import {routes} from '../utils/constants';

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function Navbar() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={routes[0]}
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#000000',
                    tabBarStyle: styles.tabBar
                }}>
                <Tab.Screen
                    name={routes[0]}
                    component={Home}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({focused}) => (
                            focused? <Image source={HouseFocusedIcon} style={styles.smallerIcon}/>
                                    : <Image source={HouseIcon} style={styles.smallerIcon}/>
                        )
                    }}/>
                <Tab.Screen
                    name={routes[1]}
                    component={Search}
                    options={{
                        headerShown: false,
                        tabBarIcon: () => (
                             <Image source={SearchIcon} style={styles.smallerIcon}/>
                        )
                    }}/>
                <Tab.Screen
                    name={routes[2]}
                    component={Publish}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({focused}) => (
                            focused? <Image source={PublishFocusedIcon} style={styles.standardIcon}/>
                                : <Image source={PublishIcon} style={styles.standardIcon}/>
                        )
                    }}/>
                <Tab.Screen
                    name={routes[3]}
                    component={Notifications}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({focused}) => (
                            focused? <Image source={NotificationsFocusedIcon} style={styles.smallerIcon}/>
                                : <Image source={NotificationsIcon} style={styles.smallerIcon}/>
                        )
                    }}/>
                <Tab.Screen
                    name={routes[4]}
                    component={Account}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({focused}) => (
                            focused? <Image source={AccountFocusedIcon} style={styles.standardIcon}/>
                                : <Image source={AccountIcon} style={styles.standardIcon}/>
                        )
                    }}/>

            </Tab.Navigator>
        </NavigationContainer>

        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    standardIcon: {
        width: 35,
        height: 35
    },
    smallerIcon: {
        width: 30,
        height: 30
    },
    tabBar: {
        height: 60,
        position: 'absolute',
        bottom: 0
    }
});
