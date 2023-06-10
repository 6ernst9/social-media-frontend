import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {FONT_BOLD, title} from '../utils/constants';

import MessageIcon from '../assets/icons/message.svg';
import CameraIcon from '../assets/icons/camera.svg';

const HomeTopbar: React.FC = () =>{
    return (
        <View style={styles.topBar}>
            <Image source={CameraIcon} style={styles.messageButton}/>
            <Text style={styles.title}>{title}</Text>
            <Image source={MessageIcon} style={styles.messageButton}/>
        </View>
    );
};

const styles = StyleSheet.create({
    topBar: {
        width: '100%',
        height: 60,
        position: 'absolute',
        top: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'space-between'
    },
    messageButton: {
        width: 30,
        height: 30,
        color: '#000'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
    }
});

export default HomeTopbar;
