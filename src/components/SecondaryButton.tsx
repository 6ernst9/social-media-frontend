import {Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";
import {ButtonProps} from "../utils/types";
import {BACKGROUND_LIGHT, FONT_LIGHT, LIGHT_GREY} from "../utils/constants";

let paddingCoefficient = 1;

const SecondaryButton: React.FC<ButtonProps> = ({content, onClick, isPrincipal}) => {
    if(isPrincipal) paddingCoefficient =2;
    return(
        <Pressable onPress={onClick}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{content}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'relative',
        backgroundColor: BACKGROUND_LIGHT,
        paddingHorizontal: paddingCoefficient * 20,
        paddingVertical: paddingCoefficient * 10,
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