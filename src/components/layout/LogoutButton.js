import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { logOut, isLoggedIn } from '../../util/auth';
import { api, apiConfig } from '../../util/api';
import useGetApiWs from '../../hooks/useGetApiWs';
import { useNavigate } from "react-router-dom";
import "./lb.css";
const LogoutButton = () => {
    let navigate = useNavigate();
    const url = useGetApiWs('admin', 'authentication', 'logout');

    const closeSession = async () => {
        const isloggedIn = isLoggedIn();
        if (isloggedIn) {
            await api().post(url, null, apiConfig()).then(response => {
                const res = response.data;
                if (res.status === 'success' & response.status === 200) {
                    logOut();
                    navigate('/login', { replace: true });
                } else {
                    console.log('El Token ya no esta autorizado');
                    navigate('/login', { replace: true });
                }
            }).catch(error => { console.log(error); })

        } else { navigate('/login', { replace: true }); }

    }

    return (
            <button onClick={closeSession} className="btn ml-20 font-bold font-roboto uppercase ">
                <FontAwesomeIcon className='icon' icon={faPowerOff} size="lg" />
                <div className='titulo'>Cerrar Sesión</div>
            </button>
    )
}

export default LogoutButton