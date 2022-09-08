import { axiosClient } from '../axios/axiosConfig';

export const getAccounts = () =>
  axiosClient.get('user/account/checking');