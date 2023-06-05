import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View } from 'react-native';
import React from "react";
import Topbar from "../components/Topbar";

export default function Home() {
    return (
        <View style={styles.container}>
            <Topbar title={'UniHub'}/>
            <Text>Home</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
