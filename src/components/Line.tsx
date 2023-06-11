import React from "react";
import {View} from "react-native";
import {LIGHT_GREY} from "../utils/constants";

interface LineProps{
    padding?: number;
}

const Line: React.FC<LineProps> = ({padding}) => {
    return(
        <View style={{
            width: '100%',
            height: 1,
            backgroundColor: LIGHT_GREY,
            paddingHorizontal: padding
        }}/>
    )
}

export default Line;
