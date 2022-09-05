import axios from 'axios';
import React, {useEffect, useState} from 'react';

const Prueba = () => {
const [token, setToken] = useState([]);
const [res, setRes] = useState([]);

const apiToken = () => {
    axios.post('http://localhost:8080/bank/api/v1/auth?password=Demo123!&username=jsmith@demo.io', {

    })
    .then(response => {
        setToken(response.data.authToken);
        console.log(token);
    }).catch(error => {
        console.log(error);
    })
};

const apiGetAccount = () => {
    axios.get('http://localhost:8080/bank/api/v1/user/account/checking', {
        headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
        setRes(response.data);
        console.log(res);
    }).catch(error => {
        console.log(error);
    })
};

return (
    <div>
        <button onClick={ () => apiToken() }>Token</button>
        <button onClick={ () => apiGetAccount() }>Checking</button>
        <div>
            <span>{token}</span>
        </div>
    </div>
)

};

export default Prueba;