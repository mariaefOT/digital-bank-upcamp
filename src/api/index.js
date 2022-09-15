import { axiosClient } from '../axios/axios.config';

export const getAccounts = (token) =>
  axiosClient.get('user/account/checking', {
    headers: { Authorization: `Bearer ${token}` },
  });

export const postAccounts = (token,data) =>
  axiosClient.post('user/account', data ,{
    headers: { 
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    }
  });