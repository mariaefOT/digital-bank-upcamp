import axios from 'axios';
import { useState } from 'react';

const Prueba = () => {
const [token, setToken] = useState("");
const [accounts, setAccounts] = useState([]);

const authenticateUser = () => {
    axios.post('http://localhost:8080/bank/api/v1/auth?password=Demo123!&username=jsmith@demo.io', {

    })
    .then(response => {
        setToken(response.data.authToken);
        console.log(token);
    }).catch(error => {
        console.log(error);
    })
};

const getAccounts = () => {
    axios.get('http://localhost:8080/bank/api/v1/user/account/checking', {
        headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
        setAccounts(response.data);
        console.log(accounts);
    }).catch(error => {
        console.log(error);
    })
};

return (
    <div>
        <button onClick={ () => authenticateUser() }>Token</button>
        <button onClick={ () => getAccounts() }>Checking</button>
        <div>
            <span>{token}</span>
        </div>
    </div>
)

};

export default Prueba;