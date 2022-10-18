import { useState } from "react";
import { Form, Button, Alert, Badge } from 'react-bootstrap';
import { login } from '../api/login';
import { useNavigate } from 'react-router-dom';
import { validateLoginForm } from "../validations/validateLogin";

const Login = () => {
    let navigate = useNavigate(); 
    const [validated, setValidated] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [credentials, setCredentials] = useState({
        username:'',
        password:''
    });

    const handleChange = (ev) => {
        const { name, value } = ev.target
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();

        const form = ev.currentTarget;
        if (form.checkValidity() === false) {
            ev.stopPropagation();
        } 
        setValidated(true);
        
        if (!validateLoginForm(credentials)) {
            setShowErrorMessage(true);
        } else {
            setShowErrorMessage(false);
            if(login(credentials)){
                navigate('/home'); 
            } else {
                setValidated(false);
                setShowErrorMessage(true);
            };
        };
    }
    
  return (
    <div>
        <h2 className="form-title">Login</h2>
        <div className='form-div'>
            {showErrorMessage && <Alert variant="danger" onClose={() => setShowErrorMessage(false)} dismissible>
                <p>
                <Badge bg="danger">Error</Badge>{' '}
                Failed to login! Check your credentials please.
                </p>
            </Alert>}
            <Form noValidate validated={validated} onSubmit={(ev) => handleSubmit(ev)} className='form'>
                <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label><b>User Name</b></Form.Label>
                    <Form.Control 
                        required
                        type="text" 
                        name="username" 
                        pattern="^[^@]+@[^@]+\.[a-zA-Z]{2,}$"
                        value={credentials.username}
                        placeholder="Enter User Name" 
                        onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid user name. It should look something like <b>example@bank.io</b>
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label><b>Password</b></Form.Label>
                    <Form.Control 
                        required
                        type="password" 
                        name="password" 
                        minLength={8}
                        value={credentials.password}
                        placeholder="Enter Password" 
                        onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid password. Remember that it must be <b>8 characters</b> or more
                    </Form.Control.Feedback>
                </Form.Group>

                <Button variant="success" type="submit" className='submit-btn'>
                    SIGN IN
                </Button>
            </Form>    
        </div>
    </div>
  )
}

export default Login;