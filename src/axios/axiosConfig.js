import axios from 'axios';

axios.post('http://localhost:8080/bank/api/v1/auth?password=Demo123!&username=jsmith@demo.io', {
}).then(response => {
    sessionStorage.setItem('token',response.data.authToken);
}).catch(error => {
    console.log(error);
})

export const axiosClient = axios.create({
    baseURL: 'http://localhost:8080/bank/api/v1',
    headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` },
  });