import {Post} from "../utils/types";
import {mockUsers} from "./users";
import Profile1 from "../assets/img/profile1.jpg";
import {mockComments} from "./comments";

export const mockPosts: Post[] = [
    {
        user: mockUsers[0],
        photos: [Profile1],
        postTime: '24/10/2002',
        description: 'what do u think???',
        location: 'London, UK',
        views: 5,
        likes: mockUsers,
        comments: mockComments
    }
]