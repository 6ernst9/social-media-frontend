import React from "react";
import {Post} from "../utils/types";
import {Image, Pressable, View, StyleSheet} from "react-native";

import Heart from '../assets/icons/heart.svg';
import Chat from '../assets/icons/chat.svg';
import Send from '../assets/icons/send.svg';
import Bookmark from '../assets/icons/bookmark.svg';
import Clock from '../assets/icons/clock.svg';
import Dots from '../assets/icons/dots-vertical.svg';
import {BACKGROUND_LIGHT, MEDIUM_GREY, PRIMARY_LIGHT} from "../utils/constants";
import LText from "./LText";
import BText from "./BText";
import Line from "./Line";

const PostComponent: React.FC<Post> = ({user,
                                  photos,
                                  location,
                                  description,
                                  likes,
                                  comments}) =>{
    const visitProfile = () =>{
        console.log('clicked');
    }

    return(
        <View style={styles.container}>
            <View style={styles.topBar}>
               <View style={styles.topBarLeft}>
                   <Pressable onPress={visitProfile}>
                       <Image source={user.profilePhoto} style={styles.profilePhoto}/>
                   </Pressable>
                   <View>
                       <Pressable onPress={visitProfile}>
                           <BText text={user.username}/>
                       </Pressable>
                       {location && <LText text={location}/>}
                   </View>
               </View>
                <Image source={Dots} style={styles.icon}/>
            </View>
            <Line/>
            <View style={styles.imageContainer}>
                <Image source={photos[0]} style={styles.postImage}/>
            </View>
            <View style={styles.underImage}>
                <View style={styles.actions}>
                    <View style={styles.likeCommShare}>
                        <Image source={Heart} style={styles.icon}/>
                        <Image source={Chat} style={styles.icon}/>
                        <Image source={Send} style={styles.icon}/>
                    </View>
                    <Image source={Bookmark} style={styles.icon}/>
                </View>
                <View style={styles.actions}>
                    <View style={styles.likes}>
                        {likes.slice(0, 4).map((user) => {
                            return(
                                <Image key={user.id} source={user.profilePhoto} style={styles.likeImage}/>
                            )
                        })}
                    </View>
                    <View style={styles.likes}>
                        <LText text={'liked '}/>
                        <BText text={likes[0].username}/>
                        <LText text={' and '}/>
                        <BText text={likes.length-1 + ' more'}/>
                    </View>
                </View>
                {description && <View style={styles.description}>
                    <BText text={user.username}/>
                    <LText text={description}/>
                </View>}
                {comments.length > 0 && <Line padding={10}/>}
                {comments.length > 0 &&
                    <View style={styles.bottomContainer}>
                        <View style={styles.description}>
                            <LText text={'View all comments'} color={MEDIUM_GREY}/>
                            <BText text={'(' + comments.length.toString() + ')'} color={PRIMARY_LIGHT}/>
                        </View>
                        <View style={styles.description}>
                            <Image source={Clock} style={styles.iconSmall}/>
                            <LText text={'3h ago'} color={MEDIUM_GREY}/>
                        </View>
                    </View>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: BACKGROUND_LIGHT
    },
    topBar:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    topBarLeft:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    profilePhoto:{
        borderRadius: 100,
        width: 40,
        height: 40,
        marginRight: 10
    },
    imageContainer:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    postImage:{
        width: '100%',
        height: 'auto',
        aspectRatio: 0.75
    },
    underImage:{
        width: '100%',
        padding: 10,
        display: 'flex',
        gap: 10,
        flexDirection: 'column',
    },
    actions:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    likeCommShare:{
        display: 'flex',
        gap: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    icon:{
        width: 25,
        height: 25
    },
    iconSmall:{
        width: 20,
        height: 20,
        tintColor: MEDIUM_GREY
    },
    likes:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    likeImage:{
        width: 20,
        height: 20,
        borderRadius: 20,
        marginRight: -8,
        borderColor: BACKGROUND_LIGHT,
        borderWidth: 2
    },
    description:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    bottomContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default PostComponent;