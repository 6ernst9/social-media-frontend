import {Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";
import {ButtonProps} from "../utils/types";
import {FONT_LIGHT, PRIMARY_LIGHT} from "../utils/constants";

let paddingCoefficient = 1;

const PrimaryButton: React.FC<ButtonProps> = ({content, onClick, isPrincipal}) => {
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
       backgroundColor: PRIMARY_LIGHT,
       paddingHorizontal: paddingCoefficient * 20,
       paddingVertical: paddingCoefficient * 10,
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