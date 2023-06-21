import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from "react";
import Topbar from "../components/Topbar";

import Plus from '../assets/icons/plus.svg';
import Menu from '../assets/icons/menu.svg';
import Arrow from '../assets/icons/arrow-left.svg'
import {mockUsers} from "../mock/users";
import LText from "../components/LText";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import Highlights from "../components/Highlights";
import GridView from "../components/GridView";
import {User} from "../utils/types";
import {myUser} from "../utils/constants";
import { useNavigation } from '@react-navigation/native';

interface AccountProps{
    user: User;
}

const Account: React.FC<AccountProps> = ({user}) => {
    const navigation = useNavigation();

    const seePosts = () =>{
        navigation.navigate('Posts');
    }

    return (
        <View style={styles.container}>
            <Topbar firstIcon={user === myUser ? Plus: Arrow} lastIcon={Menu} title={user.username}/>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <View style={styles.numbersContainer}>
                        <Text style={styles.numbers}>321k</Text>
                        <LText text={'followers'}/>
                    </View>
                    <Image source={user.profilePhoto} style={styles.profilePhoto}/>
                    <View style={styles.numbersContainer}>
                        <Text style={styles.numbers}>125</Text>
                        <LText text={'following'}/>
                    </View>
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.name}>{user.name}</Text>
                    {user.description && <LText text={user.description}/>}
                </View>
                <View style={styles.buttonsContainer}>
                    <PrimaryButton content={' Follow '} isPrincipal={true}/>
                    <SecondaryButton content={'Message'} isPrincipal={true}/>
                </View>
                <Highlights isMine={true}/>
                <GridView photos={mockUsers.map((user) => user.profilePhoto)} onClick={seePosts}/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollView:{
        width: '100%',
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        paddingVertical: 51,
        gap: 10
    },
    header:{
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    numbersContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    numbers:{
        fontWeight: 'bold',
        fontSize: 24
    },
    profilePhoto:{
        width: 90,
        height: 90,
        borderRadius: 100
    },
    detailsContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 10,
        gap: 2.5
    },
    name:{
        fontWeight: 'bold',
        fontSize: 20
    },
    buttonsContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        gap: 5
    }
});

export default Account;

