import {Image, ScrollView, Text, View} from 'react-native';
import React from "react";
import Topbar from "../../components/Topbar";

import Plus from '../../assets/icons/plus.svg';
import Menu from '../../assets/icons/menu.svg';
import Arrow from '../../assets/icons/arrow-left.svg'
import {mockUsers} from "../../mock/users";
import LText from "../../components/LText";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";
import Highlights from "../../components/Highlights";
import GridView from "../../components/GridView";
import {myUser} from "../../utils/constants";
import { useNavigation } from '@react-navigation/native';
import {User} from "../../utils/types";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import styles from './styles';

type ProfileProps = {
    user: User;
}

const Profile: React.FC<NativeStackScreenProps<ProfileProps>> = ({route}) => {
    const user = route.params as User;
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

export default Profile;

