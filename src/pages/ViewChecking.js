import {useEffect } from 'react';
import { getAccounts } from '../api/index';
import CheckingCards from '../components/CheckingCards';
import { authenticateUser } from '../axios/axios.config';
import { useDispatch } from 'react-redux';
import { getUser } from '../data/credentials';
import { getAccountsList } from '../reducers/accountsReducer'; 
import '../CSS/ViewChecking.css';

const ViewChecking = () => {
  const dispatch = useDispatch();
  const user = getUser('USER'); //Modify ADMIN or USER view here

  useEffect(() => {
      authenticateUser(user).then((token) => {
        getAccounts(user.type,token).then((response) => {
          dispatch(getAccountsList(response.data))
        });
      });
  },[]);

  return(
    <div>
      <h1 className="Title" >View Checking Accounts</h1>
      <CheckingCards isAdmin={user.type === 'ADMIN' ? true : false}/>
    </div>
  )
}

export default ViewChecking;