
export const assignUserRole = (userRole) => {
    if(userRole.includes('ADMIN')){
        sessionStorage.setItem('role','ADMIN');
    }
    if(userRole.includes('USER')){
        sessionStorage.setItem('role','USER'); 
    }
};