import {Comment} from "../utils/types";
import {mockUsers} from "./users";

export const mockComments: Comment[] = [
    {
        user: mockUsers[2],
        text: 'beautiful',
        likes: [],
        replies: [],
        commTime: '26/2/2023'
    },
    {
        user: mockUsers[4],
        text: 'wow',
        likes: [],
        replies: [],
        commTime: '26/2/2023'
    }
]