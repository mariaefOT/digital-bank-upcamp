import {useEffect } from 'react';
import { getAccounts } from '../api/index';
import CheckingCards from '../components/CheckingCards';
import { useDispatch } from 'react-redux';
import { getAccountsList } from '../reducers/accountsReducer'; 
import '../CSS/ViewChecking.css';

const CheckingView = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getAccounts().then((response) => {
      dispatch(getAccountsList(response.data))
    });
  },[]);

  return(
    <div>
      <h1 className="Title" >View Checking Accounts</h1>
      <CheckingCards isAdmin={sessionStorage.getItem("role") === 'ADMIN' ? true : false}/>
    </div>
  )
}

export default CheckingView;