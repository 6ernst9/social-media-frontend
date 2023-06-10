import { StatusBar } from 'expo-status-bar';
import {ScrollView, StyleSheet, View} from 'react-native';
import React from "react";
import HomeTopbar from "../components/HomeTopbar";
import Highlights from "../components/Highlights";
import PostComponent from "../components/Post";
import {mockUsers} from "../mock/users";

import Profile1 from '../assets/img/profile1.jpg';
import {mockPosts} from "../mock/posts";

const Home: React.FC = () => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <HomeTopbar />
                <Highlights />
                <PostComponent {...mockPosts[0]} />
            </ScrollView>
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
    scrollView:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    }
});

export default Home;
