import React from "react";
import {Dimensions, FlatList, Image, View, StyleSheet} from "react-native";
import Line from "./Line";

const { width } = Dimensions.get('window');
const itemSize = (width -2) / 3;

interface GridViewProps {
    photos: Image[];
}

interface PhotoProps {
    item: Image;
}

const GridView: React.FC<GridViewProps> = ({photos}) =>{
    const renderPhoto: React.FC<PhotoProps> = ({item}) => {
        return (
            <View style={styles.itemContainer}>
                <Image source={item} style={styles.photo} />
            </View>
        );
    };

    return(
        <View style={styles.container}>
            <Line/>
            <FlatList
                data={photos}
                renderItem={renderPhoto}
                keyExtractor={(item, index) => index.toString()}
                numColumns={3}
                showsVerticalScrollIndicator={false}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10
    },
    itemContainer: {
        width: itemSize,
        height: itemSize,
        marginBottom: 1,
        marginRight: 1
    },
    photo: {
        flex: 1,
        width: undefined,
        height: undefined,
    },
});

export default GridView;