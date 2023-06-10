import {StyleSheet, Image, Text, View} from "react-native";
import React from "react";
import {FONT_LIGHT, PRIMARY_DARK} from "../utils/constants";

interface HighlightProps {
    photoUrl: string,
    name: string
}

const Highlight: React.FC<HighlightProps> = ({ photoUrl, name }) =>{
    return (
        <View style={styles.highlight}>
            <View style={styles.story}>
                <Image source={photoUrl} style={styles.highlightPhoto}/>
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
        fontFamily: FONT_LIGHT,
        fontWeight: '500'
    },
    story:{
        width: 70,
        height: 70,
        borderRadius: 70,
        borderColor: PRIMARY_DARK,
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    highlightPhoto: {
        width: '95%',
        height: '95%',
        borderRadius: 60
    }
})

export default Highlight;