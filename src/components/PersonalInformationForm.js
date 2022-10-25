import { Form } from 'react-bootstrap';

const PersonalInformationForm = (props) => {
    return(
        <div>
            <h4 className="form-subtitle">Personal information</h4>
            <Form.Group className="mb-3" controlId="formTitle">
                <Form.Label><b>Title</b></Form.Label>
                <Form.Select required label="title" name="title" value={props.values.title} onChange={props.handleChange}>
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
                    value={props.values.firstName}
                    placeholder="Enter first name" 
                    onChange={props.handleChange}
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
                    value={props.values.lastName}
                    placeholder="Enter last name" 
                    onChange={props.handleChange}
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
                onChange={props.handleChange}
                />
                <Form.Check
                name="gender"
                id="formGender2"
                value="F"
                type="radio"
                label="F"
                inline
                onChange={props.handleChange}
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
                    value={props.values.dob}
                    pattern="\d{1,2}/\d{1,2}/\d{4}"
                    placeholder="Enter date of birth" 
                    onChange={props.handleChange}
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
                    value={props.values.ssn}
                    pattern="^\d{3}-?\d{2}-?\d{4}$"
                    placeholder="Enter social security number" 
                    onChange={props.handleChange}
                />
                <Form.Text className="text-muted">
                    ex. 123-45-6789
                </Form.Text>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                    Please provide a valid social security number
                </Form.Control.Feedback>
            </Form.Group>
        </div>
    )
}

export default PersonalInformationForm;