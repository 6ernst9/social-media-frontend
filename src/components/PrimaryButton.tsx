import {Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";
import {ButtonProps} from "../utils/types";
import {FONT_LIGHT, PRIMARY_LIGHT} from "../utils/constants";

const PrimaryButton: React.FC<ButtonProps> = ({content, onClick, isPrincipal}) => {
    return(
        <Pressable onPress={onClick}>
            <View style={isPrincipal? styles.buttonContainer : styles.buttonContainer2}>
                <Text style={styles.buttonText}>{content}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
   buttonContainer2: {
       position: 'relative',
       backgroundColor: PRIMARY_LIGHT,
       paddingHorizontal: 20,
       paddingVertical: 10,
       borderRadius: 100,
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center'
   },
    buttonContainer: {
        position: 'relative',
        backgroundColor: PRIMARY_LIGHT,
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderRadius: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
   buttonText: {
     fontWeight: '700',
     fontSize: 12
   }
});

export default PrimaryButton;