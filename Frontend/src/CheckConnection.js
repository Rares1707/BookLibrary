import Axios from 'axios';
import { useState } from 'react';
import {Navigate} from 'react-router-dom';

export function CheckConnection() {
    const checkInterval = 5000;

    const [isOffline, setIsOffline] = useState(false);

    // disabled for now because setInterval is not working properly
    async function checkConnection() {
        /*console.log('Checking connection');
        try {
            await Axios.get(sessionStorage.getItem('hostAddress') + + `/ping`);
            //if(isOffline === true)
                //window.location.reload();
            setIsOffline(false);
        } catch (error) {
            setIsOffline(true);
        }*/
    }

    setInterval(checkConnection, checkInterval);
    if (sessionStorage.getItem("access_token") === null) {
        return (
            <Navigate to="/" />
        );
    }
    return (
        <>
            {isOffline && <h2>You are offline. Retrying in 5 seconds</h2>}
        </>
    );
}