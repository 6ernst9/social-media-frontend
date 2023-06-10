import React from "react";
import {Text} from "react-native";
import {TextProps} from "../utils/types";

const BText: React.FC<TextProps> = ({text, color}) =>{
    return(
        <Text style={{ fontSize: 14, fontWeight: 'bold', color: color}}>{text}</Text>
    )
}

export default BText;