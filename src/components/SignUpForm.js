import PersonalInformationForm from "./PersonalInformationForm";
import CredentialInformationForm from "./CredentialInformationForm";
import ContactInformationForm from "./ContactInformationForm";
import { useState, useEffect } from "react";
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { createNewUser, addApiRole } from "../api/index";
import { userRegistrationData } from "../data/userRegistrationData";
import { validateUserRegistration } from "../validations/validateUserRegistration";
import { credentialsAdmin } from "../data/credentials";
import { login } from "../api/login";
import "../CSS/UserRegistration.css";

const SignUpForm = () => {
    let navigate = useNavigate(); 
    const [step, setStep] = useState(1);
    const [validated, setValidated] = useState(false);
    const [alert, setAlert] = useState(false);
    const [values, setValues] = useState(userRegistrationData);

    useEffect(() => {
        login(credentialsAdmin);
    },[]);

    const handleChange = (ev) => {
        const { name, value } = ev.target
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();

        const form = ev.currentTarget;
        if (!form.checkValidity()) {
            ev.stopPropagation();
        } 
        setValidated(true);
        
        if(!validateUserRegistration(values)){
            setAlert(true);
        } else {
            setAlert(false);
            createNewUser(JSON.stringify(values)).then((response) => {
                addApiRole(response.data.id); 
                navigate('/');
            });
        };
    };

    return(
        <div>
            <h3 className='form-title'>Register user</h3>
            <div className='form-div'>
                <Form noValidate validated={validated} onSubmit={(ev) => handleSubmit(ev)} className='form'>
                    {step === 1 && 
                    <div>
                        <PersonalInformationForm values={values} handleChange={handleChange} /> 
                        <Button variant="secondary" type="button" className='btn' onClick={() => {setStep(2)}}>
                            Next
                        </Button>
                    </div>}

                    {step === 2 && 
                    <div>
                        <CredentialInformationForm values={values} handleChange={handleChange} />
                        <Button variant="secondary" type="button" className='btn' onClick={() => {setStep(1)}}>
                            Previous
                        </Button>
                        <Button variant="secondary" type="button" className='btn' onClick={() => {setStep(3)}}>
                            Next
                        </Button>
                    </div>}

                    {step === 3 && 
                    <div>
                        <ContactInformationForm values={values} handleChange={handleChange} />
                        <Button variant="secondary" type="button" className='submit-btn' onClick={() => {setStep(2)}}>
                            Previous
                        </Button>
                        <Button variant="primary" type="submit" className='submit-btn'>
                            Submit
                        </Button>
                    </div>}
                </Form>
            </div>
            {alert && <Alert className='error-message' key='danger' variant='danger'>Please provide a valid data</Alert>}
        </div>
    )
}

export default SignUpForm;