import React from "react";
import {Comment, Post, User} from "../utils/types";
import {Image, Pressable, View, Text, StyleSheet} from "react-native";

import Heart from '../assets/icons/heart.svg';
import Chat from '../assets/icons/chat.svg';
import Send from '../assets/icons/send.svg';
import Bookmark from '../assets/icons/bookmark.svg';
import Clock from '../assets/icons/clock.svg';
import {BACKGROUND_LIGHT, LIGHT_GREY, MEDIUM_GREY, PRIMARY_LIGHT} from "../utils/constants";
import LText from "./LText";

const PostComponent: React.FC<Post> = ({user,
                                  photos,
                                  postTime,
                                  location,
                                  description,
                                  views,
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
                       <Pressable>
                           <Text style={styles.username}>{user.username}</Text>
                       </Pressable>
                       {location && <Text style={styles.location}>{location}</Text>}
                   </View>
               </View>
            </View>
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
                        {likes.slice(0, 4).map((user, index) => {
                             return(
                                <Image key={user.id} source={user.profilePhoto} style={styles.likeImage}/>
                            )
                        })}
                    </View>
                    <View style={styles.likes}>
                        <Text style={styles.location}>liked </Text>
                        <Text style={styles.descriptionBold}>{likes[0].username} </Text>
                        <Text style={styles.location}>and </Text>
                        <Text style={styles.descriptionBold}>{likes.length-1} more</Text>
                    </View>
                </View>
                <View style={styles.description}>
                    <Text style={styles.username}>{user.username}</Text>
                    <Text style={styles.location}>{description}</Text>
                </View>
                <View style={styles.line}/>
                {comments.length > 0 &&
                    <View style={styles.bottomContainer}>
                        <View style={styles.likes}>
                            <Text style={styles.comments}>View all comments</Text>
                            <Text style={styles.commentsNumbered}>({comments.length})</Text>
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
        padding: 10
    },
    topBarLeft:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    profilePhoto:{
        borderRadius: 100,
        width: 40,
        height: 40,
        marginRight: 10
    },
    username:{
        fontSize: 14,
        fontWeight: 'bold'
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
    descriptionBold:{
        fontSize: 13,
        fontWeight: 'bold'
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
        gap: 7.5
    },
    line:{
        width: '100%',
        height: 1,
        backgroundColor: LIGHT_GREY,
        paddingHorizontal: 10
    },
    bottomContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    comments:{
        fontSize: 14,
        marginRight: 5,
    },
    commentsNumbered:{
        fontSize: 14,
        fontWeight: 'bold',
        color: PRIMARY_LIGHT
    }
})

export default PostComponent;