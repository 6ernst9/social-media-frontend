import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View } from 'react-native';
import React from "react";

const Messages: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text>Account</Text>
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

export default Messages;
