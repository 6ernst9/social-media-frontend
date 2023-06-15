import {StyleSheet, Image, Text, View} from "react-native";
import React from "react";
import {BACKGROUND_LIGHT, FONT_LIGHT, MEDIUM_GREY, PRIMARY_DARK, PRIMARY_LIGHT} from "../utils/constants";
import Add from '../assets/icons/plusFillStory.svg';

interface HighlightProps {
    photo: Image,
    seen?: boolean
    name: string,
    myHighlight?: boolean;
}

const Highlight: React.FC<HighlightProps> = ({ photo, name , myHighlight, seen}) =>{
    return (
        <View style={styles.highlight}>
            <View style={myHighlight === undefined || myHighlight ? seen? styles.seenStory : styles.story : styles.noStory}>
                <Image source={photo} style={styles.highlightPhoto}/>
                {myHighlight === false && <Image source={Add} style={styles.add}/>}
            </View>
            <Text style={styles.highlightText}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
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
        borderColor: PRIMARY_LIGHT,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    seenStory:{
        width: 70,
        height: 70,
        borderRadius: 70,
        borderColor: MEDIUM_GREY,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    noStory:{
        width: 70,
        height: 70,
        borderRadius: 70,
        alignItems: 'center',
        justifyContent: 'center'
    },
    highlightPhoto: {
        width: '95%',
        height: '95%',
        borderRadius: 60
    },
    add:{
        width: '35%',
        height: '35%',
        position: 'absolute',
        borderRadius: 50,
        backgroundColor: BACKGROUND_LIGHT,
        bottom: 0,
        right: 0
    }
})

export default Highlight;