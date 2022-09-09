import axios from 'axios';

export const authenticateUser = async () => {
  const response = await axiosClient.post(
    'auth',
    {},
    {
      params: {
        username: 'jsmith@demo.io',
        password: 'Demo123!',
      },
    }
  );

  return response.data.authToken;
};

export const axiosClient = axios.create({
  baseURL: 'http://localhost:8080/bank/api/v1',
});