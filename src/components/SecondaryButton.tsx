import {Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";
import {ButtonProps} from "../utils/types";
import {BACKGROUND_LIGHT, FONT_LIGHT, LIGHT_GREY} from "../utils/constants";

const SecondaryButton: React.FC<ButtonProps> = ({content, onClick, isPrincipal}) => {
    return(
        <Pressable onPress={onClick}>
            <View style={isPrincipal? styles.buttonContainer : styles.buttonContainer2}>
                <Text style={styles.buttonText}>{content}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'relative',
        backgroundColor: BACKGROUND_LIGHT,
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: LIGHT_GREY,
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer2: {
        position: 'relative',
        backgroundColor: BACKGROUND_LIGHT,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: LIGHT_GREY,
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontFamily: FONT_LIGHT,
        fontWeight: '700',
        fontSize: 12
    }
});

export default SecondaryButton;