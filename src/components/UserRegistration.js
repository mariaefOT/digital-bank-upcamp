import { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const UserRegistration = () => {
    const [validated, setValidated] = useState(false);
    const [values, setValues] = useState({
        title: '',
        firstName: '',
        lastName: '',
        gender: '',
        dob: '',
        ssn: '',
        emailAddress: '',
        password: '',
        address: '',
        country: '',
        locality: '',
        region: '',
        homePhone: '',
        workPhone: '',
        mobilePhone: '',
        postalCode: '',

        confirmPassword: '',
        agreeTerms: ''
    });

    const handleChange = (ev) => {
        const { name, value } = ev.target
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
        console.log(values);
    }

    return(
        <div>
            <h3 className='form-title'>Create New User</h3>
            <div className='form-div'>
                <Form noValidate validated={validated} onSubmit={(ev) => handleSubmit(ev)} className='form'>

                    <Form.Group className="mb-3" controlId="formTitle">
                        <Form.Label><b>Title</b></Form.Label>
                        <Form.Select required label="title" name="title" value={values.title} onChange={handleChange}>
                            <option value="">Please select title</option>
                            <option value="Mr.">Mr.</option>
                            <option value="Ms.">Ms.</option>
                            <option value="Mrs.">Mrs.</option>
                        </Form.Select>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Please select valid option
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formFirstName">
                        <Form.Label><b>First Name</b></Form.Label>
                        <Form.Control 
                            required
                            type="text" 
                            name="firstName" 
                            value={values.firstName}
                            placeholder="Enter first name" 
                            onChange={handleChange}
                        />
                        <Form.Text className="text-muted">
                            ex. James
                        </Form.Text>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid first name
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formLastName">
                        <Form.Label><b>Last Name</b></Form.Label>
                        <Form.Control 
                            required
                            type="text" 
                            name="lastName" 
                            value={values.lastName}
                            placeholder="Enter last name" 
                            onChange={handleChange}
                        />
                        <Form.Text className="text-muted">
                            ex. Smith
                        </Form.Text>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid last name
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGender">
                        <Form.Label><b>Gender</b></Form.Label><br/>
                        <Form.Check
                        name="gender"
                        id="formGender1"
                        value="M"
                        type="radio"
                        label="M"
                        inline
                        onChange={handleChange}
                        />
                        <Form.Check
                        name="gender"
                        id="formGender2"
                        value="F"
                        type="radio"
                        label="F"
                        inline
                        onChange={handleChange}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid option 
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formDob">
                        <Form.Label><b>Date of birth</b></Form.Label>
                        <Form.Control 
                            required
                            type="text" 
                            name="dob" 
                            value={values.dob}
                            pattern="\d{1,2}/\d{1,2}/\d{4}"
                            placeholder="Enter date of birth" 
                            onChange={handleChange}
                        />
                        <Form.Text className="text-muted">
                            ex. MM/DD/YYYY
                        </Form.Text>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid date of birth
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formSsn">
                        <Form.Label><b>Social security number</b></Form.Label>
                        <Form.Control 
                            required
                            type="text" 
                            name="ssn" 
                            value={values.ssn}
                            pattern="^\d{3}-?\d{2}-?\d{4}$"
                            placeholder="Enter social security number" 
                            onChange={handleChange}
                        />
                        <Form.Text className="text-muted">
                            ex. 123-45-6789
                        </Form.Text>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid social security number
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmailAddress">
                        <Form.Label><b>Email Address</b></Form.Label>
                        <Form.Control 
                            required
                            type="email" 
                            name="emailAddress" 
                            value={values.emailAddress}
                            pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                            placeholder="Enter email address" 
                            onChange={handleChange}
                        />
                        <Form.Text className="text-muted">
                            ex. user@gmail.com
                        </Form.Text>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid email address
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label><b>Password</b></Form.Label>
                        <Form.Control 
                            required
                            type="password" 
                            name="password" 
                            minLength={8}
                            value={values.password}
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            placeholder="Enter password" 
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formConfirmPassword">
                        <Form.Label><b>Confirm password</b></Form.Label>
                        <Form.Control 
                            required
                            type="password" 
                            name="confirmPassword" 
                            value={values.confirmPassword}
                            placeholder="Confirm password" 
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Passwords do not match
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formAddress">
                        <Form.Label><b>Address</b></Form.Label>
                        <Form.Control 
                            required
                            type="text" 
                            name="address" 
                            value={values.address}
                            placeholder="Enter address" 
                            onChange={handleChange}
                        />
                        <Form.Text className="text-muted">
                            ex. 123 Digital Lane
                        </Form.Text>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid address
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formLocality">
                        <Form.Label><b>Locality</b></Form.Label>
                        <Form.Control 
                            required
                            type="text" 
                            name="locality" 
                            value={values.locality}
                            placeholder="Enter locality" 
                            onChange={handleChange}
                        />
                        <Form.Text className="text-muted">
                            ex. Internet City
                        </Form.Text>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid locality
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formRegion">
                        <Form.Label><b>Region</b></Form.Label>
                        <Form.Control 
                            required
                            type="text" 
                            name="region" 
                            value={values.region}
                            placeholder="Enter region" 
                            onChange={handleChange}
                        />
                        <Form.Text className="text-muted">
                            ex. CA
                        </Form.Text>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid region
                        </Form.Control.Feedback>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formPostalCode">
                        <Form.Label><b>Postal code</b></Form.Label>
                        <Form.Control 
                            required
                            type="text" 
                            name="postalCode" 
                            value={values.postalCode}
                            placeholder="Enter postal code" 
                            onChange={handleChange}
                        />
                        <Form.Text className="text-muted">
                            ex. 94302
                        </Form.Text>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid postal code
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formCountry">
                        <Form.Label><b>Country</b></Form.Label>
                        <Form.Control 
                            required
                            type="text" 
                            name="country" 
                            value={values.country}
                            placeholder="Enter country" 
                            onChange={handleChange}
                        />
                        <Form.Text className="text-muted">
                            ex. US
                        </Form.Text>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid country
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formHomePhone">
                        <Form.Label><b>Home phone</b></Form.Label>
                        <Form.Control 
                            required
                            type="text" 
                            name="homePhone" 
                            value={values.homePhone}
                            pattern="^[+]?([0-9]*[\.\s\-\(\)]|[0-9]+){3,24}$"
                            placeholder="Enter home phone" 
                            onChange={handleChange}
                        />
                        <Form.Text className="text-muted">
                            ex. (547) 392-5436
                        </Form.Text>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Phone Number must be a valid phone number format. i.e. (###) ###-####.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formMobilePhone">
                        <Form.Label><b>Mobile phone</b></Form.Label>
                        <Form.Control 
                            required
                            type="text" 
                            name="mobilePhone" 
                            value={values.mobilePhone}
                            pattern="^[+]?([0-9]*[\.\s\-\(\)]|[0-9]+){3,24}$"
                            placeholder="Enter mobile phone" 
                            onChange={handleChange}
                        />
                        <Form.Text className="text-muted">
                            ex. (547) 392-5436
                        </Form.Text>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Phone Number must be a valid phone number format. i.e. (###) ###-####.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formWorkPhone">
                        <Form.Label><b>Work phone</b></Form.Label>
                        <Form.Control 
                            required
                            type="text" 
                            name="workPhone" 
                            value={values.workPhone}
                            pattern="^[+]?([0-9]*[\.\s\-\(\)]|[0-9]+){3,24}$"
                            placeholder="Enter work phone" 
                            onChange={handleChange}
                        />
                        <Form.Text className="text-muted">
                            ex. (547) 392-5436
                        </Form.Text>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Phone Number must be a valid phone number format. i.e. (###) ###-####.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formAgreeTerms">
                        <Form.Check
                        name="agreeTerms"
                        required
                        label="Agree the terms and policy"
                        inline
                        onChange={handleChange}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Accepting the terms is mandatory for the creation of a user
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="primary" type="submit" className='submit-btn'>
                        Submit
                    </Button>

                </Form>
            </div>
        </div>
    )

}

export default UserRegistration;