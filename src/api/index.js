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
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBkZW1vLmlvIiwiYXV0aCI6W3siYXV0aG9yaXR5IjoiUk9MRV9BUEkifSx7ImF1dGhvcml0eSI6IlJPTEVfQURNSU4ifV0sImlhdCI6MTY2NjI4NzE3OSwiZXhwIjoxNjY2MjkwNzc5fQ.6y0kQU3HyJZhcqtPiQOKH1G1Np2iIwn88fqG4DnIsns`,
        'Content-Type': 'application/json',
    }
  });

  export const addApiRole = (id) =>
  axiosClient.put(`user/${id}/role?role=API`,{},{
      headers: { 
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBkZW1vLmlvIiwiYXV0aCI6W3siYXV0aG9yaXR5IjoiUk9MRV9BUEkifSx7ImF1dGhvcml0eSI6IlJPTEVfQURNSU4ifV0sImlhdCI6MTY2NjI4NzE3OSwiZXhwIjoxNjY2MjkwNzc5fQ.6y0kQU3HyJZhcqtPiQOKH1G1Np2iIwn88fqG4DnIsns`,
      }
    }
  );