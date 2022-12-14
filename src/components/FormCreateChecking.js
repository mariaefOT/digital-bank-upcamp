import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { validateForm } from '../validations/validateCreateCheckingForm';
import { createAccount } from '../api/index';
import { useState } from 'react';
import '../CSS/FormCreateChecking.css';

const FormCreateChecking = () => {
    let navigate = useNavigate();
    const [alert, setAlert] = useState(false);
    const [validated, setValidated] = useState(false);
    const [values, setValues] = useState({
        accountName: '',
        accountTypeCode: '',
        openingDeposit: '',
        ownerTypeCode: '',
    });

    const handleChange = (ev) => {
        const { name, value } = ev.target
        setValues({ ...values, [name]: value });
    };

    const resetForm = () => {
        setValues({
            accountName: '',
            accountTypeCode: '',
            openingDeposit: '',
            ownerTypeCode: '',
        });
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();

        const form = ev.currentTarget;
        if (!form.checkValidity()) {
            ev.stopPropagation();
        } 
        setValidated(true);

        if (!validateForm(values)) {
            setAlert(true);
        } else {
            setAlert(false);
            createAccount(JSON.stringify(values)).then(() => {
                navigate('/viewChecking');
            });
        };
    }

    return(
        <div>
            <h3 className='form-title'>New Checking Account</h3>
            <div className='form-div'>
                <Form noValidate validated={validated} onSubmit={(ev) => handleSubmit(ev)} className='form'>
                    <Form.Group className="mb-3" controlId="formCheckingAccountType">
                        <Form.Label><b>Select Checking Account Type</b></Form.Label>
                        <Form.Select required label="AccountType" name="accountTypeCode" value={values.accountTypeCode} onChange={handleChange}>
                            <option value="">Select Account Type</option>
                            <option value="SCK">Standard Checking</option>
                            <option value="ICK">Interest Checking</option>
                        </Form.Select>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Please select account type valid option
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formAccountOwnership">
                        <Form.Label><b>Select Account Ownership</b></Form.Label>
                        <Form.Select required label="AccountOwnership" name="ownerTypeCode" value={values.ownerTypeCode} onChange={handleChange }>
                            <option value="">Select Account Ownership</option>
                            <option value="IND">Individual</option>
                            <option value="JNT">Joint</option>
                        </Form.Select>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Please select account ownership valid option
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formAccountName">
                        <Form.Label><b>Account Name</b></Form.Label>
                        <Form.Control 
                            required
                            type="text" 
                            name="accountName" 
                            value={values.accountName}
                            placeholder="Enter account name" 
                            onChange={handleChange}
                        />
                        <Form.Text className="text-muted">
                            ex. Short descriptive name to easily identify account
                        </Form.Text>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid name
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formInitialDeposit">
                        <Form.Label><b>Initial Deposit Amount</b></Form.Label>
                        <Form.Control
                            required 
                            type="number" 
                            name="openingDeposit" 
                            value={values.openingDeposit}
                            min="25.00"
                            step='0.01'
                            placeholder="Initial deposit" 
                            onChange={handleChange}
                        />
                        <Form.Text className="text-muted">
                            ex. Minimum opening deposit is $25.00
                        </Form.Text>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid deposit
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="primary" type="submit" className='submit-btn'>
                        Submit
                    </Button>

                    <Button variant="danger" type="button" className='reset-btn' onClick={() => {resetForm()}}>
                        Reset
                    </Button>
                </Form>
                {alert && <Alert className='error-message' key='danger' variant='danger'>Please provide a valid data</Alert>}
            </div>
        </div>
    );
}

export default FormCreateChecking;