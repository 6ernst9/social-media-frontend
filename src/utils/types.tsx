export interface User{
    id: number,
    name: string,
    username: string,
    password: string,
    dateOfBirth: string,
    description?: string,
    gender: string,
    joinDate: string,
    profilePhotoUrl: string
}

export interface Post{
    photosUrls: string[];
    postTime: string;
    location: string;
    description: string;
    views: number;
    likes: string[];
    comments: Comment[];
}

export interface Comment{
    user: string;
    text: string;
    likes: string[];
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
    onClick: () => void;
    isPrincipal: boolean;
}