import Cookies from 'js-cookie';
import {logOut} from './auth';

export const getLocalVersion = ()=>{
    return Cookies.get('version');
}

export const getCurrentVersion = ()=>{
    return process.env.REACT_APP_VERSION
}

export const setLocalVersion = ()=>{
    Cookies.remove('version');    
    return Cookies.set('version',process.env.REACT_APP_VERSION)
}

export const verifyVersion = ()=>{
    const local = Cookies.get('version');
    const current = process.env.REACT_APP_VERSION;

    return local===current;

}


