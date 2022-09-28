import {useEffect, useState} from 'react';
import { getAccounts } from '../api/index';
import CheckingCards from '../components/CheckingCards';
import { authenticateUser } from '../axios/axios.config';
import '../CSS/ViewChecking.css';

const ViewChecking = () => {
    const [accounts, setAccounts] = useState([]);
    const user = {
      username: 'jsmith@demo.io',
      password: 'Demo123!',
    };

    useEffect(() => {
        authenticateUser(user).then((token) => {
          getAccounts(token).then((response) => {
            setAccounts(response.data);
          });
        });
    },[]);

    return (
        <div>
            <h1 className="Title" >View Checking Accounts</h1>
            <CheckingCards accounts={accounts} isAdmin={false}/>
        </div>
    )
}

export default ViewChecking;