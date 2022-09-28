import {useEffect, useState} from 'react';
import { getAllAccounts } from '../api/index';
import CheckingCards from '../components/CheckingCards';
import { authenticateUser } from '../axios/axios.config';
import '../CSS/ViewChecking.css';

const ViewChecking = () => {
    const [accounts, setAccounts] = useState([]);

    const admin = {
      username: 'admin@demo.io',
      password: 'Demo123!',
    };

    useEffect(() => {
        authenticateUser(admin).then((token) => {
          getAllAccounts(token).then((response) => {
            setAccounts(response.data);
          });
        });
    },[]);

    return (
        <div>
            <h1 className="Title" >View Checking Accounts - Admin</h1>
            <CheckingCards accounts={accounts} isAdmin={true}/>
        </div>
    )
}

export default ViewChecking;