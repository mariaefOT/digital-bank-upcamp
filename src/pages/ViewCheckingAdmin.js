import {useEffect, useState} from 'react';
import { getAllAccounts } from '../api/index';
import CheckingCards from '../components/CheckingCards';
import { authenticateAdmin } from '../axios/axios.config';
import '../CSS/ViewChecking.css';

const ViewChecking = () => {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        authenticateAdmin().then((token) => {
          getAllAccounts(token).then((response) => {
            setAccounts(response.data);
          });
        });
    },[]);

    return (
        <div>
            <h1 className="Title" >View Checking Accounts - Admin</h1>
            <CheckingCards accounts={accounts} admin={true}/>
        </div>
    )
}

export default ViewChecking;