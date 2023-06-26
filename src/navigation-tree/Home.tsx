import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Feeds from "../screens/Feeds";
import Profile from "../screens/Profile";
import {mockUsers} from "../mock/users";
import Index from "../screens/Story";
import Chat from "../screens/Chat";
import Index from "../screens/Messages";

const Stack = createNativeStackNavigator();

const Home: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name={'Feeds'}
                component={Feeds}
                options={{ headerShown: false }}/>
            <Stack.Screen
                name={'Profile'}
                component={Profile}
                initialParams={{user: mockUsers[0]}}
                options={{ headerShown: false }}/>
            <Stack.Screen
                name={'Index'}
                component={Index}
                //TODO add params
                options={{ headerShown: false }}/>
            <Stack.Screen
                name={'Index'}
                component={Index}
                options={{ headerShown: false }}/>
            <Stack.Screen
                name={'Chat'}
                component={Chat}
                //TODO add params
                options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}

export default Home;