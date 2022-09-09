import {useEffect, useState} from 'react';
import { getAccounts } from '../api/index';
import CheckingCards from '../components/CheckingCards';
import { authenticateUser } from '../axios/axios.config'
import '../CSS/ViewChecking.css';

const ViewChecking = () => {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        authenticateUser().then((token) => {
          getAccounts(token).then((response) => {
            setAccounts(response.data);
          });
        });
    },[]);

    return (
        <div>
            <h1 className="Title" >View Checking Accounts</h1>
            <CheckingCards accounts={accounts}/>
        </div>
    )
}

export default ViewChecking;