import {useEffect, useState} from 'react';
import { getAccounts } from '../api/index';
import CheckingCards from '../components/CheckingCards';
import { authenticateUser } from '../axios/axios.config';
import { getUser } from '../data/credentials';
import '../CSS/ViewChecking.css';

const ViewChecking = () => {
  const [accounts, setAccounts] = useState([]);
  const user = getUser('USER'); //Modify ADMIN or USER view here
  
  useEffect(() => {
      authenticateUser(user).then((token) => {
        getAccounts(user.type,token).then((response) => {
          setAccounts(response.data);
        });
      });
  },[]);

  return(
    <div>
      <h1 className="Title" >View Checking Accounts</h1>
      <CheckingCards accounts={accounts} isAdmin={user.type === 'ADMIN' ? true : false}/>
    </div>
  )
}

export default ViewChecking;