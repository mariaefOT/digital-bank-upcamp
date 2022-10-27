import { axiosClient } from '../axios/axios.config';

export const authenticateUser = async (user) => {
  const response = await axiosClient.post(
    'auth',
    {},
    {
      params: {
        username: user.username,
        password: user.password,
      },
    }
  );

  return response.data.authToken;
};

export const getRole = () => {
  return(
    axiosClient.get('user/role', {
      headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
    })
  )
}

export const getAccounts = () => {
  return(
    axiosClient.get(`${sessionStorage.getItem("role") === 'USER' ? 'user/' : ''}account/checking`, {
      headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
    })
  )
}

export const createAccount = (data) =>
  axiosClient.post('user/account', data ,{
    headers: { 
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        'Content-Type': 'application/json',
    }
  });

  export const editAccount = (id,newName) =>
  axiosClient.put(`account/${id}`,{}, {
    headers: { 
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    params: {
      newName: newName
    }
  });

  export const deleteAccount = (id) =>
  axiosClient.delete(`account/${id}`, {
    headers: { 
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    }
  });

  export const createNewUser = (newUser) =>
  axiosClient.post('user', newUser ,{
    headers: { 
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      'Content-Type': 'application/json',
    }
  });

  export const addApiRole = (id) =>
  axiosClient.put(`user/${id}/role?role=API`,{},{
      headers: { 
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      }
    }
  );

  export const makeTransaction = (type,amount,description,id) =>
    axiosClient.post(`account/${id}/transaction`,{
      amount,
      transactionTypeCode:type,
      description
    },{
      headers:{
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      }
    }
  );