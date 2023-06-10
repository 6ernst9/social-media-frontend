import {HttpRequestOptions, HttpResponse} from "./types";
import {POST} from "./constants";

export function httpRequest<T>(url: string, options?: HttpRequestOptions): Promise<HttpResponse<T>>{
    if(options && options.method && options.method === POST){
        options.headers = options.headers || {};
        options.headers['Content-Type'] = 'application/json';
    }

    const errorMessages: Record<number, string> = {
        400: 'Bad Request',
        401: 'Please login',
        403: 'Access Denied',
        404: 'API Not Implemented',
        500: 'Internal Server Error'
    };
}