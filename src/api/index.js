import { axiosClient } from '../axios/axios.config';

export const getAccounts = (token) =>
  axiosClient.get('user/account/checking', {
    headers: { Authorization: `Bearer ${token}` },
  });