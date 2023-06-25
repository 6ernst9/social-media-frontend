import {Image} from "react-native";

export type User ={
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

export type Post = {
    user: User;
    photos: Image[];
    postTime: string;
    location?: string;
    description?: string;
    views: number;
    likes: User[];
    comments: Comment[];
}

export type Comment = {
    user: User;
    text: string;
    likes: User[];
    replies: Comment[];
    commTime: string;
}

export type HttpResponse<T> = {
    status: number;
    bodyText: string;
    body?: T;
    error?: string;
}

export type HttpRequestOptions = {
    method: string,
    body?: string,
    headers?: HttpHeader;
}

export type HttpHeader = {
   'Content-Type'?: string;
}

export type Response = {
    status: number;
    text: string;
    headers: { [key: string]: string};
    body?: any;
    error?: string;
}

export type ButtonProps = {
    content: string,
    onClick?: () => void;
    isPrincipal: boolean;
}

export type TextProps = {
    text: string,
    color?: string
}

export type Highlight = {
    user: User;
    photo: Image;
}

export type Message = {
    sender: User;
    receiver: User;
    content: string;
    time: string;
}