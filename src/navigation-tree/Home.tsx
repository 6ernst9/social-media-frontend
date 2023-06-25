import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Feeds from "../screens/Feeds";
import Account from "../screens/Account";
import {mockUsers} from "../mock/users";
import Story from "../screens/Story";
import Messages from "../screens/Messages";
import Chat from "../screens/Chat";

const Stack = createNativeStackNavigator();

const Home: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name={'Feeds'}
                component={Feeds}
                options={{ headerShown: false }}/>
            <Stack.Screen
                name={'Account'}
                component={Account}
                initialParams={{user: mockUsers[0]}}
                options={{ headerShown: false }}/>
            <Stack.Screen
                name={'Story'}
                component={Story}
                //TODO add params
                options={{ headerShown: false }}/>
            <Stack.Screen
                name={'Messages'}
                component={Messages}
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