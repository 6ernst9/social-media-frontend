import React from 'react';
import {StyleSheet, ScrollView, Image, View, Text} from 'react-native';

import Highlight from "./Highlight";
import {mockUsers} from "../mock/users";

import Plus from '../assets/icons/plusSimple.svg';
import {MEDIUM_GREY, PRIMARY_LIGHT} from "../utils/constants";
import mockHighlights from "../mock/highlights";

interface HighlightsProps{
    isMine: boolean;
}

const Highlights: React.FC<HighlightsProps> = ({isMine}) => {
    return (
        <ScrollView
            horizontal style={styles.scrollView}
            showsHorizontalScrollIndicator={false}>
            {isMine && <View style={styles.highlight}>
                <Image source={Plus} style={styles.story}/>
                <Text style={styles.highlightText}>New</Text>
            </View>}
            {mockHighlights.map((highlight, index) => {
                return (
                    <Highlight key={index} photo={highlight.photo} name={highlight.name} seen={true}/>
                )
            })}
        </ScrollView>
    );
};

// @ts-ignore
const styles = StyleSheet.create({
    scrollView: {
        width: '100%',
        maxHeight: 100,
        left: 0,
        padding: 10
    },
    highlight: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    highlightText: {
        fontSize: 12,
        fontWeight: '500'
    },
    story:{
        width: 70,
        height: 70,
        borderRadius: 70,
        borderColor: MEDIUM_GREY,
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Highlights;
