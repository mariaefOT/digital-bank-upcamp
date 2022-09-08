import axios from 'axios';

let response = await axios.post('http://localhost:8080/bank/auth',
    {},
    {
      params: {
        password: 'Demo123!',
        username: 'jsmith@demo.io',
      },
    }
  );

const axiosClient = axios.create({
    validateStatus: () => true,
    baseURL: 'http://localhost:8080/bank/api/v1',
    headers: { Authorization: `Bearer ${response.data.authToken}` },
});

  export default axiosClient;