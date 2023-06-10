import React from "react";
import {Text} from "react-native";
import {TextProps} from "../utils/types";

const LText: React.FC<TextProps> = ({text, color}) =>{
    return(
        <Text style={{ fontSize: 13, color: color}}>{text}</Text>
    )
}

export default LText;