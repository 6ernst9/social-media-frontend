import { StatusBar } from 'expo-status-bar';
import {FlatList, StyleSheet, Text, View } from 'react-native';
import React from "react";

const objects = ['Marry', 'John', 'Robert'];
export default function Home() {
    return (
        <View style={styles.container}>
            <FlatList data={objects} renderItem={
                ({item}) => <Text>{item}</Text>
            }/>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bc00',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
