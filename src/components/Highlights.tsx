import React from 'react';
import {StyleSheet, ScrollView, SafeAreaView} from 'react-native';

import Highlight from "./Highlight";
import {mockUsers} from "../mock/users";

const Highlights: React.FC = () => {
    return (
        <SafeAreaView>
            <ScrollView
                horizontal style={styles.scrollView}
                showsHorizontalScrollIndicator={false}>
                {mockUsers.map((user, index) => {
                    return (
                        <Highlight key={index} photoUrl={user.profilePhotoUrl} name={user.username}/>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    );
};

// @ts-ignore
const styles = StyleSheet.create({
    scrollView: {
        width: '100%',
        position: 'fixed',
        top: 60,
        left: 0,
        paddingHorizontal: 20,
        paddingVertical: 10
    }
});

export default Highlights;
