import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";
import { screen, waitFor, within } from '@testing-library/dom';
import {BrowserRouter as Router} from 'react-router-dom';
import user from '@testing-library/user-event'
import UserRegistration from '../components/SignUpForm';

describe('FormCreateChecking tests', () => {
    const onSubmit = jest.fn();
    const nextBtn = jest.fn();
    const previousBtn = jest.fn();

    beforeEach(() =>{
        onSubmit.mockClear();
        nextBtn.mockClear();
        previousBtn.mockClear();
        render(
            <Router>
                <UserRegistration/>
            </Router>
        );
    });

    it('Should render the User Registration form', () => {
        const view = render(
            <Router>
                <UserRegistration/>
            </Router>
        );
        expect(view).toBeDefined();
    });

    it('Should submit the form when all fields are valid', () => {
        const titleDropdown = screen.getByRole('combobox', {name: /title/i });
        user.selectOptions(titleDropdown, within(titleDropdown).getByRole('option', {name: 'Mr.'}));
        
        const firstNameInput = screen.getByRole('textbox', {name: /first name/i });
        user.type(firstNameInput, 'Juan');

        const lastNameInput = screen.getByRole('textbox', {name: /last name/i });
        user.type(lastNameInput, 'Perez');

        const genderRadio = screen.getByRole('radio', {name: /M/i });
        user.click(genderRadio);

        const dOBInput = screen.getByRole('textbox', {name: /date of birth/i });
        user.type(dOBInput, '12/10/2000');

        const socialSecurityNumberInput = screen.getByRole('textbox', {name: /social security number/i });
        user.type(socialSecurityNumberInput, '12/10/2000');

        user.click(screen.getByRole('button', {name: /next/i }));

        const emailAddressInput = screen.getByRole('textbox', {name: /email address/i });
        user.type(emailAddressInput, 'juan@user.io');

        const passwordInput = screen.getByLabelText(/password/i);
        user.type(passwordInput, 'Demo123!');

        const confirmPasswordInput = screen.getByLabelText(/confirm/i);
        user.type(confirmPasswordInput, 'Demo123!');

        user.click(screen.getByRole('button', {name: /next/i }));

        const addressInput = screen.getByRole('textbox', {name: /address/i });
        user.type(addressInput, 'some address');

        const localityInput = screen.getByRole('textbox', {name: /locality/i });
        user.type(localityInput, 'some locality');

        const regionInput = screen.getByRole('textbox', {name: /region/i });
        user.type(regionInput, 'some region');

        const postalCodeInput = screen.getByRole('textbox', {name: /postal code/i });
        user.type(postalCodeInput, '50000');  

        const countryInput = screen.getByRole('textbox', {name: /country/i });
        user.type(countryInput, 'some country');

        const homePhoneInput = screen.getByRole('textbox', {name: /home phone/i });
        user.type(homePhoneInput, '(494) 346-2345');

        const mobilePhoneInput = screen.getByRole('textbox', {name: /mobile phone/i });
        user.type(mobilePhoneInput, '(494) 346-2345');

        const workPhoneInput = screen.getByRole('textbox', {name: /work phone/i });
        user.type(workPhoneInput, '(494) 346-2345');

        const termsCheckbox = screen.getByRole('checkbox', {name: /agree the terms and policy/i });
        user.click(termsCheckbox);

        user.click(screen.getByRole('button', {name: /submit/i }));

        waitFor(() => {
            expect(nextBtn).toHaveBeenCalledTimes(2);
            expect(onSubmit).toHaveBeenCalledTimes(1);
        });
    });

    it('Should display form incomplete alert', () => {
        user.click(screen.getByRole('button', {name: /next/i }));
        user.click(screen.getByRole('button', {name: /next/i }));
        user.click(screen.getByRole('button', {name: /submit/i }));

        waitFor(() => {
            expect(screen.getByText('Please provide a valid data')).toBeInTheDocument();
        });
    });

    it('Should return to the previous page of the form when pressing the previous button', () => {

        user.click(screen.getByRole('button', {name: /next/i }));
        user.click(screen.getByRole('button', {name: /next/i }));
        user.click(screen.getByRole('button', {name: /previous/i }));
        user.click(screen.getByRole('button', {name: /previous/i }));

        waitFor(() => {
            expect(nextBtn).toHaveBeenCalledTimes(2);
            expect(previousBtn).toHaveBeenCalledTimes(2);
        });
    });

});