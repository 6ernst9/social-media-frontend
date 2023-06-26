import React from "react";
import Posts from "../screens/Posts";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Profile from "../screens/Profile";
import {mockUsers} from "../mock/users";
import {mockPosts} from "../mock/posts";
import Settings from "../screens/Settings";
import Follow from "../screens/Follow";
import Index from "../screens/Story";
import Chat from "../screens/Chat";

const Stack = createNativeStackNavigator();

const Account: React.FC = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen
                name={'Profile'}
                component={Account}
                initialParams={{user: mockUsers[0]}}
                options={{ headerShown: false }}/>
            <Stack.Screen
                name={'Posts'}
                component={Posts}
                initialParams={{posts: mockPosts}}
                options={{ headerShown: false }}/>
            <Stack.Screen
                name={'Settings'}
                component={Settings}
                options={{ headerShown: false }}/>
            <Stack.Screen
                name={'Follow'}
                component={Follow}
                options={{ headerShown: false }}/>
            <Stack.Screen
                name={'Index'}
                component={Index}
                ///TODO add params
                options={{ headerShown: false }}/>
            <Stack.Screen
                name={'Chat'}
                component={Chat}
                //TODO add params
                options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}

export default Account;