import {Image} from "react-native";

export interface User{
    id: number,
    name: string,
    username: string,
    password: string,
    dateOfBirth: string,
    description?: string,
    gender: string,
    joinDate: string,
    profilePhoto: Image
}

export interface Post{
    user: User;
    photos: Image[];
    postTime: string;
    location?: string;
    description?: string;
    views: number;
    likes: User[];
    comments: Comment[];
}

export interface Comment{
    user: User;
    text: string;
    likes: User[];
    replies: Comment[];
    commTime: string;
}

export interface HttpResponse<T>{
    status: number;
    bodyText: string;
    body?: T;
    error?: string;
}

export interface HttpRequestOptions{
    method: string,
    body?: string,
    headers?: HttpHeader;
}

export interface HttpHeader{
   'Content-Type'?: string;
}

export interface Response{
    status: number;
    text: string;
    headers: { [key: string]: string};
    body?: any;
    error?: string;
}

export interface ButtonProps{
    content: string,
    onClick?: () => void;
    isPrincipal: boolean;
}

export interface TextProps{
    text: string,
    color?: string
}

export interface Highlight{
    name: string;
    photo: Image;
}