import {useEffect, useState} from 'react';
import { getAccounts } from '../api/index';
import CheckingCards from "../components/CheckingCards";
import '../CSS/ViewChecking.css';
import axios from "axios";

const ViewChecking = () => {
    const [token, setToken] = useState("");
    const [accounts, setAccounts] = useState([]);
    
   /* const authenticateUser = () => {
        axios.post('http://localhost:8080/bank/api/v1/auth?password=Demo123!&username=jsmith@demo.io', {

        }).then(response => {
            setToken(response.data.authToken);
            sessionStorage.setItem('token',token);
        }).catch(error => {
            console.log(error);
        })
    };*/

    useEffect (() => {
        //authenticateUser();
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