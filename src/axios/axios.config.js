import axios from 'axios';

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

export const axiosClient = axios.create({
  baseURL: 'http://localhost:8080/bank/api/v1',
});