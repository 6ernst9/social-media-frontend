import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {BACKGROUND_LIGHT} from '../utils/constants';

import Line from "./Line";

interface TopbarProps{
    firstIcon: Image,
    title?: string,
    lastIcon: Image
}

const Topbar: React.FC<TopbarProps> = ({firstIcon, title, lastIcon}) =>{
    return (
        <View style={styles.topBar}>
            <View style={styles.topBarApps}>
                <Image source={firstIcon} style={styles.messageButton}/>
                <Text style={styles.title}>{title}</Text>
                <Image source={lastIcon} style={styles.messageButton}/>
            </View>
            <Line/>

        </View>
    );
};

const styles = StyleSheet.create({
    topBar: {
        width: '100%',
        position: 'absolute',
        top: 0,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: BACKGROUND_LIGHT,
        zIndex: 5
    },
    topBarApps:{
        display: 'flex',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'space-between'
    },
    messageButton: {
        width: 30,
        height: 30
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
    }
});

export default Topbar;
