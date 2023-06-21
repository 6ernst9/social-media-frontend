import React from "react";
import {Post} from "../utils/types";
import {ScrollView, StyleSheet, View} from "react-native";
import PostComponent from "../components/Post";
import {mockPosts} from "../mock/posts";
import Topbar from "../components/Topbar";

interface PostsProps {
    posts: Post[];
}

const Posts: React.FC = () => {
    return(
        <View style={styles.container}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {mockPosts.map((post) => {
                    return <PostComponent {...post}/>
                })}
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
    }
});

export default Posts;