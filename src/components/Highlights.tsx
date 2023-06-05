import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView, SafeAreaView} from 'react-native';

import Profile1 from '../assets/img/profile1.jpg';
import Profile2 from '../assets/img/profile2.jpg';
import Profile3 from '../assets/img/profile3.jpg';
import Profile4 from '../assets/img/profile4.jpg';
import Profile5 from '../assets/img/profile5.jpg';
import Profile6 from '../assets/img/profile6.jpg';

const Highlights: React.FC = () => {
    return (
        <SafeAreaView>
            <ScrollView
                horizontal style={styles.scrollView}
                showsHorizontalScrollIndicator={false}>
                <View style={styles.highlight}>
                    <View style={styles.story}>
                        <Image source={Profile1} style={styles.highlightPhoto}/>
                    </View>
                    <Text style={styles.highlightText}>biahaiduc</Text>
                </View>
                <View style={styles.highlight}>
                    <View style={styles.story}>
                        <Image source={Profile2} style={styles.highlightPhoto}/>
                    </View>
                    <Text style={styles.highlightText}>andradahub</Text>
                </View>
                <View style={styles.highlight}>
                    <View style={styles.story}>
                        <Image source={Profile3} style={styles.highlightPhoto}/>
                    </View>
                    <Text style={styles.highlightText}>roxanafulea</Text>
                </View>
                <View style={styles.highlight}>
                    <View style={styles.story}>
                        <Image source={Profile4} style={styles.highlightPhoto}/>
                    </View>
                    <Text style={styles.highlightText}>dianag</Text>
                </View>
                <View style={styles.highlight}>
                    <View style={styles.story}>
                        <Image source={Profile5} style={styles.highlightPhoto}/>
                    </View>
                    <Text style={styles.highlightText}>andra.danciu</Text>
                </View>
                <View style={styles.highlight}>
                    <View style={styles.story}>
                        <Image source={Profile6} style={styles.highlightPhoto}/>
                    </View>
                    <Text style={styles.highlightText}>dianadragus</Text>
                </View>
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
    },
    highlight: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    highlightText: {
        fontSize: 14,
        fontFamily: 'CentraNo2-Book.ttf'
    },
    story:{
        width: 70,
        height: 70,
        borderRadius: 70,
        borderColor: '#ffcc00',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    highlightPhoto: {
        width: '95%',
        height: '95%',
        borderRadius: 60
    }
});

export default Highlights;
