import React from "react";
import Home from "./Home";
import Posts from "./Posts";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MyAccount from "./MyAccount";

const Stack = createNativeStackNavigator();

const AccountTree: React.FC = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen
                name={'Account'}
                component={MyAccount}
                options={{ headerShown: false }}/>
            <Stack.Screen
                name={'Posts'}
                component={Posts}
                options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}

export default AccountTree;