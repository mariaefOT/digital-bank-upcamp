import { Form } from 'react-bootstrap';

const CredentialInformationForm = (props) => {
  return (
    <div>
        <h4 className="form-subtitle">Credential information</h4>
        <Form.Group className="mb-3" controlId="formEmailAddress">
            <Form.Label><b>Email Address</b></Form.Label>
            <Form.Control 
                required
                type="email" 
                name="emailAddress" 
                value={props.values.emailAddress}
                pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                placeholder="Enter email address" 
                onChange={props.handleChange}
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
                value={props.values.password}
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                placeholder="Enter password" 
                onChange={props.handleChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
                Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters
            </Form.Control.Feedback>
        </Form.Group> 

        <Form.Group className="mb-3" controlId="formConfirmPassword">
            <Form.Label><b>Confirm</b></Form.Label>
            <Form.Control 
                required
                type="password" 
                name="confirmPassword" 
                value={props.values.confirmPassword}
                placeholder="Confirm password" 
                onChange={props.handleChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
                Passwords do not match
            </Form.Control.Feedback>
        </Form.Group>

    </div>
  )
}

export default CredentialInformationForm;