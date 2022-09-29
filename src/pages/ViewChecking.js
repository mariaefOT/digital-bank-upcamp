import {useEffect, useState} from 'react';
import { getAccounts } from '../api/index';
import CheckingCards from '../components/CheckingCards';
import { authenticateUser } from '../axios/axios.config';
import '../CSS/ViewChecking.css';

const ViewChecking = () => {
  const [accounts, setAccounts] = useState([]);
  const rol = 'USER'; // ADMIN - USER
  const user = {
    username: 'jsmith@demo.io',
    password: 'Demo123!',
  };
  const admin = {
    username: 'admin@demo.io',
    password: 'Demo123!',
  };
  
  useEffect(() => {
      authenticateUser(user).then((token) => {
        getAccounts(rol,token).then((response) => {
          setAccounts(response.data);
        });
      });
  },[]);

  if (rol === 'ADMIN') {
    return (
      <div>
        <h1 className="Title" >View Checking Accounts - Admin</h1>
        <CheckingCards accounts={accounts} isAdmin={true}/>
      </div>
    )
  } else {
    return (
      <div>
        <h1 className="Title" >View Checking Accounts</h1>
        <CheckingCards accounts={accounts} isAdmin={false}/>
      </div>
    )
  }
}

export default ViewChecking;