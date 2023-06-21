import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "./Home";
import Posts from "./Posts";

const Stack = createNativeStackNavigator();

const HomeTree: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name={'Home'}
                component={Home}
                options={{ headerShown: false }}/>
            <Stack.Screen
                name={'Posts'}
                component={Posts}
                options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}

export default HomeTree;