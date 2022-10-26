import { Form } from 'react-bootstrap';

const ContactInformationForm = (props) => {
  return (
    <div>
        <h4 className="form-subtitle">Contact information</h4>
        <Form.Group className="mb-3" controlId="formAddress">
            <Form.Label><b>Address</b></Form.Label>
            <Form.Control 
                required
                type="text" 
                name="address" 
                value={props.values.address}
                placeholder="Enter address" 
                onChange={props.handleChange}
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
                value={props.values.locality}
                placeholder="Enter locality" 
                onChange={props.handleChange}
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
                value={props.values.region}
                placeholder="Enter region" 
                onChange={props.handleChange}
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
                value={props.values.postalCode}
                placeholder="Enter postal code" 
                onChange={props.handleChange}
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
                value={props.values.country}
                placeholder="Enter country" 
                onChange={props.handleChange}
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
                value={props.values.homePhone}
                pattern="^[+]?([0-9]*[\.\s\-\(\)]|[0-9]+){3,24}$"
                placeholder="Enter home phone" 
                onChange={props.handleChange}
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
                value={props.values.mobilePhone}
                pattern="^[+]?([0-9]*[\.\s\-\(\)]|[0-9]+){3,24}$"
                placeholder="Enter mobile phone" 
                onChange={props.handleChange}
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
                value={props.values.workPhone}
                pattern="^[+]?([0-9]*[\.\s\-\(\)]|[0-9]+){3,24}$"
                placeholder="Enter work phone" 
                onChange={props.handleChange}
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
            onChange={props.handleChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
                Accepting the terms is mandatory for the creation of a user
            </Form.Control.Feedback>
        </Form.Group> 
    </div>
  )
}

export default ContactInformationForm;