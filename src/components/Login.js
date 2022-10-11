import { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { authenticateUser, getRole } from "../api";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    let navigate = useNavigate(); 
    const [validated, setValidated] = useState(false);
    const [values, setValues] = useState({
        username:'',
        password:''
    });

    const handleChange = (ev) => {
        const { name, value } = ev.target
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();

        const form = ev.currentTarget;
        if (form.checkValidity() === false) {
            ev.stopPropagation();
        } 
        setValidated(true);
        
        authenticateUser(values).then((token) => {
            sessionStorage.setItem('token',token); 
            getRole(token).then((response) => {
                const role = response.data[0].authority + response.data[1].authority;
                if(role.includes('ADMIN')){
                    sessionStorage.setItem('role','ADMIN');
                  }
                if(role.includes('USER')){
                    sessionStorage.setItem('role','USER'); 
                }
                navigate('/home'); 
            });
        });
    }

  return (
    <div>
        <h2>Login</h2>
        <div className='form-div'>
            <Form noValidate validated={validated} onSubmit={(ev) => handleSubmit(ev)} className='form'>
                <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label><b>User Name</b></Form.Label>
                    <Form.Control 
                        required
                        type="text" 
                        name="username" 
                        value={values.username}
                        placeholder="Enter User Name" 
                        onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid user name
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label><b>Password</b></Form.Label>
                    <Form.Control 
                        required
                        type="password" 
                        name="password" 
                        value={values.password}
                        placeholder="Enter Password" 
                        onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid password
                    </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit" className='submit-btn'>
                    SIGN IN
                </Button>
            </Form>    
        </div>
    </div>
  )
}

export default Login;