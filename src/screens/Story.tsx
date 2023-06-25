import {ScrollView, StyleSheet, View} from 'react-native';
import React from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {Highlight} from "../utils/types";

type StoryProps = {
    story: Highlight;
    allStories: Highlight[];
}

const Story: React.FC<NativeStackScreenProps<StoryProps>> = ({route}) => {
    return (
        <View style={styles.container}>
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

export default Story;
