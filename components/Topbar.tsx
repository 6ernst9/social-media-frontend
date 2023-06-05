import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import MessageIcon from '../assets/message.svg';

interface Props {
    title: string
}
export default function Topbar ({ title } : Props){
    return (
        <View style={styles.topBar}>
            <Image source={MessageIcon} style={styles.messageButton}/>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    topBar: {
        position: 'absolute',
        top: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    messageButton: {
        marginRight: 8,
        color: '#000'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
    }
});
