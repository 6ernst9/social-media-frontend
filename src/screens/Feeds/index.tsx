import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import React from "react";
import Stories from "../../components/Stories";
import PostComponent from "../../components/Post";

import {mockPosts} from "../../mock/posts";
import Topbar from "../../components/Topbar";

import MessageIcon from '../../assets/icons/message.svg';
import CameraIcon from '../../assets/icons/camera.svg';
import {title} from "../../utils/constants";

const Feeds: React.FC = () => {
    return (
            <View style={styles.container}>
                <Topbar firstIcon={CameraIcon} lastIcon={MessageIcon} title={title}/>
                <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                    <Stories />
                    <PostComponent {...mockPosts[0]} />
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
        position: 'relative',
        flexDirection: 'column',
        paddingVertical: 51,
        gap: 10
    }
});

export default Feeds;
