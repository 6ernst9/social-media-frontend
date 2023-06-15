import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';

import Highlight from "./Highlight";
import {mockUsers} from "../mock/users";

const Stories: React.FC = () => {
    return (
        <ScrollView
            horizontal style={styles.scrollView}
            showsHorizontalScrollIndicator={false}>
            <Highlight key= {-1} photo={mockUsers[0].profilePhoto} name={'Your story'} myHighlight={false}/>
            {mockUsers.map((user, index) => {
                return (
                    <Highlight key={index} photo={user.profilePhoto} name={user.username}/>
                )
            })}
        </ScrollView>
    );
};

// @ts-ignore
const styles = StyleSheet.create({
    scrollView: {
        width: '100%',
        left: 0,
        paddingHorizontal: 10,
        paddingVertical: 10
    }
});

export default Stories;
