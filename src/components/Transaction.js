import { Form, Button, Alert } from 'react-bootstrap';
import { makeTransaction, getAccounts } from '../api';
import { useEffect } from 'react';
import { useState } from 'react';

const Transaction = (props) => {
    const [alert, setAlert] = useState(false);
    const [validated, setValidated] = useState(false);
    const [accounts,setAccounts] = useState([]); 
    const [values,setValues] = useState({
        amount:'',
        account: ''
    }); 

    useEffect(()=>{
        getAccounts().then(response =>{
            setAccounts(response.data);
        }); 
    },[]);

    const handleChange = (ev) => {
        const { name, value } = ev.target
        setValues({ ...values, [name]: value });
    };

    const resetForm = () => {
        setValues({
            amount:'',
            account: ''
        });
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();

        const form = ev.currentTarget;
        if (!form.checkValidity()) {
            ev.stopPropagation();
        } 
        setValidated(true);
        console.log(values)
    };

    return(
        <div>
            <h3 className='form-title'>{props.type === 'deposit' ? 'Deposit into Account': 'Withdraw from Account'}</h3>
            <div className='form-div'>
                <Form noValidate validated={validated} onSubmit={(ev) => handleSubmit(ev)} className='form'>
                        <Form.Group className="mb-3" controlId="formAccount">
                            <Form.Label><b>Select Account</b></Form.Label>
                            <Form.Select required label="Account" name="account" value={values.account} onChange={handleChange}>
                                <option value="">Select Account</option>
                                {
                                    accounts.map((account,index) => <option key={index} value={account.id}>{account.name}</option>)
                                }
                            </Form.Select>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please select account
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formAmount">
                            <Form.Label><b>{props.type === 'deposit' ? 'Deposit': 'Withdraw'} Amount</b></Form.Label>
                            <Form.Control
                                required 
                                type="number" 
                                name="amount" 
                                value={values.amount}
                                placeholder="Amount" 
                                onChange={handleChange}
                            />
                            <Form.Text className="text-muted">
                                ex. 25.00
                            </Form.Text>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid amount
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
    )

}

export default Transaction;