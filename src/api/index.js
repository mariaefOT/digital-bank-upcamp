import { axiosClient } from '../axios/axios.config';

export const getAccounts = (rol,token) => {
  if (rol === 'ADMIN') {
    return(
      axiosClient.get('account/checking', {
        headers: { Authorization: `Bearer ${token}` },
      })
    )
  }
  if (rol === 'USER') {
    return(
      axiosClient.get('user/account/checking', {
        headers: { Authorization: `Bearer ${token}` },
      })
    )
  }
}

export const createAccount = (token,data) =>
  axiosClient.post('user/account', data ,{
    headers: { 
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    }
  });

  export const editAccount = (token,id,newName) =>
  axiosClient.put(`account/${id}`,{}, {
    headers: { 
        Authorization: `Bearer ${token}`,
    },
    params: {
      newName: newName
    }
  });

  export const deleteAccount = (token,id) =>
  axiosClient.delete(`account/${id}`, {
    headers: { 
        Authorization: `Bearer ${token}`,
    }
  });