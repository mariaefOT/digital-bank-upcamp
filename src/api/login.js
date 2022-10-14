import { authenticateUser, getRole } from '../api/index';
import { assignUserRole } from '../data/roles';

export const login = (credentials) => {
    return(
        authenticateUser(credentials).then((token) => {
            sessionStorage.setItem('token',token); 
            getRole().then((response) => {
                assignUserRole(`${response.data[0].authority} ${response.data[1].authority}`);
            })
        })
    );
  };