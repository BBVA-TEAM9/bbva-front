import Cookies from 'js-cookie';
import {useGetApiWs} from '../hooks/index';
import {api,apiConfig} from './api';

export const isLoggedIn = () =>{   
    const userData = Cookies.get('admin_lock_user_data');
    const token = Cookies.get('admin_lock_token');
    if(userData!==null & token!==null){
        return true;
    }
    return false;
}

export const logIn = (token,data)=>{
    Cookies.set('admin_lock_token',token,{expires: 86400,sameSite:'lax'})
    Cookies.set('admin_lock_user_data',JSON.stringify(data),{expires: 86400,sameSite:'lax'})
    
}

export const logOut = ()=>{
    Cookies.remove('admin_lock_user_data',{expires: 86400,sameSite:'lax'})
    Cookies.remove('admin_lock_token',{expires: 86400,sameSite:'lax'})
    Cookies.remove('admin_lock_logged_is',{expires: 86400,sameSite:'lax'})
    sessionStorage.removeItem('admin_lock_user_data')
    
}

export const getToken = ()=>{
    return Cookies.get('admin_lock_token');
}

export const getInfoUser = ()=>{
    return Cookies.get('admin_lock_user_data');
}
export const getPermission = ()=>{
    const userData = Cookies.get('admin_lock_user_data');
    const json = JSON.parse(userData)
    const permission = JSON.parse(json.company_hieararchy_json_permissons) 

    return permission
}

export const GetData = async()=>{
    const urlMe = useGetApiWs('admin','authentication','me');
    const token = Cookies.get('admin_lock_token');
    let userData = Cookies.get('admin_lock_user_data');
    if(token!==undefined){
        if(userData===null || token===null){
            api().post(urlMe,null,apiConfig()).then((me)=>{
                if(me.data.status==='success'){
                    const resMe = me.data.response;
                    Cookies.set('admin_lock_user_data',JSON.stringify(resMe),{expires: 86400,sameSite:'lax'})
                }else{
                    Cookies.set('admin_lock_user_data','error',{expires: 86400,sameSite:'lax'})
                }            
            });
            return Cookies.get('admin_lock_user_data');
        }
        return userData;
    }
    return null;
}
