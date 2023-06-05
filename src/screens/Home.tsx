import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View } from 'react-native';
import React from "react";
import HomeTopbar from "../components/HomeTopbar";
import Highlights from "../components/Highlights";

const Home: React.FC = () => {
    return (
        <View style={styles.container}>
            <HomeTopbar />
            <Highlights />
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

export default Home;
