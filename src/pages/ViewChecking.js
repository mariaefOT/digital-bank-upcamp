import {useEffect, useState} from 'react';
import { getAccounts } from '../api/index';
import CheckingCards from "../components/CheckingCards";
import '../CSS/ViewChecking.css';

const ViewChecking = () => {
    const [accounts, setAccounts] = useState([]);

    useEffect (() => {
        getAccounts().then(response => {
            setAccounts(response.data);
        }).catch(error => {
            console.log(error);
        })
    },[accounts]);

    return (
        <div>
            <h1 className="Title" >View Checking Accounts</h1>
            <CheckingCards accounts={accounts}/>
        </div>
    )
}

export default ViewChecking;