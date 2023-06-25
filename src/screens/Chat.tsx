import {ScrollView, StyleSheet, View} from 'react-native';
import React from "react";

import Topbar from "../components/Topbar";

import MessageIcon from '../assets/icons/message.svg';
import CameraIcon from '../assets/icons/camera.svg';
import {title} from "../utils/constants";
import {Message} from "../utils/types";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

type ChatProps = {
    messages: Message[];
}

const Chat: React.FC<NativeStackScreenProps<ChatProps>> = ({route}) => {
    return (
        <View style={styles.container}>
        <Topbar firstIcon={CameraIcon} lastIcon={MessageIcon} title={title}/>
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
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

export default Chat;
