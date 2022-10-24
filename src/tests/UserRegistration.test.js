import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";
import { screen, waitFor, within } from '@testing-library/dom';
import {BrowserRouter as Router} from 'react-router-dom';
import user from '@testing-library/user-event'
import UserRegistration from '../components/UserRegistration';

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

    it('Should render the user registration form when the Create user page is loaded', () => {
        const view = render(
            <Router>
                <UserRegistration/>
            </Router>
        );
        expect(view).toBeDefined();
    });

    it('Should onSubmit is called when all fields pass validation', () => {
        const dropdownTitle = screen.getByRole('combobox', {name: /title/i });
        user.selectOptions(dropdownTitle, within(dropdownTitle).getByRole('option', {name: 'Mr.'}));
        
        const inputFirstName = screen.getByRole('textbox', {name: /first name/i });
        user.type(inputFirstName, 'Juan');

        const inputLastName = screen.getByRole('textbox', {name: /last name/i });
        user.type(inputLastName, 'Perez');

        const radioGender = screen.getByRole('radio', {name: /M/i });
        user.click(radioGender);

        const inputDoB = screen.getByRole('textbox', {name: /date of birth/i });
        user.type(inputDoB, '12/10/2000');

        const inputSocialSecurityNumber = screen.getByRole('textbox', {name: /social security number/i });
        user.type(inputSocialSecurityNumber, '12/10/2000');

        user.click(screen.getByRole('button', {name: /next/i }));

        const inputEmailAddress = screen.getByRole('textbox', {name: /email address/i });
        user.type(inputEmailAddress, 'juan@user.io');

        const passwordInput = screen.getByLabelText(/password/i);
        user.type(passwordInput, 'Demo123!');

        const inputConfirmPassword = screen.getByLabelText(/confirm/i);
        user.type(inputConfirmPassword, 'Demo123!');

        user.click(screen.getByRole('button', {name: /next/i }));

        const inputAddress = screen.getByRole('textbox', {name: /address/i });
        user.type(inputAddress, 'some address');

        const inputLocality = screen.getByRole('textbox', {name: /locality/i });
        user.type(inputLocality, 'some locality');

        const inputRegion = screen.getByRole('textbox', {name: /region/i });
        user.type(inputRegion, 'some region');

        const inputPostalCode = screen.getByRole('textbox', {name: /postal code/i });
        user.type(inputPostalCode, '50000');

        const inputCountry = screen.getByRole('textbox', {name: /country/i });
        user.type(inputCountry, 'some country');

        const inputHomePhone = screen.getByRole('textbox', {name: /home phone/i });
        user.type(inputHomePhone, '(494) 346-2345');

        const inputMobilePhone = screen.getByRole('textbox', {name: /mobile phone/i });
        user.type(inputMobilePhone, '(494) 346-2345');

        const inputWorkPhone = screen.getByRole('textbox', {name: /work phone/i });
        user.type(inputWorkPhone, '(494) 346-2345');

        const checkboxTerms = screen.getByRole('checkbox', {name: /agree the terms and policy/i });
        user.click(checkboxTerms);

        user.click(screen.getByRole('button', {name: /submit/i }));

        waitFor(() => {
            expect(nextBtn).toHaveBeenCalledTimes(2);
            expect(onSubmit).toHaveBeenCalledTimes(1);
        });
    });

    it('It should display form incomplete alert', () => {
        user.click(screen.getByRole('button', {name: /next/i }));
        user.click(screen.getByRole('button', {name: /next/i }));
        user.click(screen.getByRole('button', {name: /submit/i }));

        waitFor(() => {
            expect(screen.getByText('Please provide a valid data')).toBeInTheDocument();
        });
    });

    it('You should return to the previous page of the form when pressing the previous button', () => {

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