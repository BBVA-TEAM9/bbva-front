import axios from 'axios';
import { getToken } from './auth';
export const api = ()=>{
    const api = axios.create({
        baseURL: process.env.REACT_APP_URL_API
    })

    return api
}

export const apiConfig = ()=>{
    const token = getToken();
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    return config;
}

export const apiConfiFile = ()=>{
    const token = getToken();
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
        responseType: 'blob'
    }
    return config;
}