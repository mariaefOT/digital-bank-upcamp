import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";
import { screen, waitFor, within } from '@testing-library/dom';
import {BrowserRouter as Router} from 'react-router-dom';
import user from '@testing-library/user-event'

import FormCreateChecking from '../components/FormCreateChecking'

describe('FormCreateChecking test', () => {
    const onSubmit = jest.fn();

    beforeEach(() =>{
        onSubmit.mockClear();
        render(
            <Router>
                <FormCreateChecking/>
            </Router>
        );
    });

    it('Render checking form', () => {
        const component = render(
            <Router>
                <FormCreateChecking/>
            </Router>
        );
        expect(component).toBeDefined();

        const {queryByLabelText} = render(
            <Router>
                <FormCreateChecking/>
            </Router>
        );

        expect(queryByLabelText(/Select Checking Account Type/i)).toBeTruthy();
        expect(queryByLabelText(/Select Account Ownership/i)).toBeTruthy();
        expect(queryByLabelText(/Account Name/i)).toBeTruthy();
        expect(queryByLabelText(/Initial Deposit Amount/i)).toBeTruthy();
    });

    it('onSubmit is called when all fields pass validation', () => {
        const dropdownAccountType = screen.getByRole('combobox', {name: /select checking account type/i });
        user.selectOptions(dropdownAccountType, within(dropdownAccountType).getByRole('option', {name: 'Standard Checking'}));

        const dropdownAccountOwnership = screen.getByRole('combobox', {name: /select account ownership/i });
        user.selectOptions(dropdownAccountOwnership, within(dropdownAccountOwnership).getByRole('option', {name: 'Individual'}));
        
        const accountName = screen.getByRole('textbox', {name: /account name/i });
        user.type(accountName, 'Payments');

        const deposit = screen.getByRole('spinbutton', {name: /initial deposit amount/i });
        user.type(deposit, '50,00');

        user.click(screen.getByRole('button', {name: /submit/i }));

        waitFor(() => {
            expect(onSubmit).toHaveBeenCalledTimes(1);
        });
    });

    it('Requiered fields', () => {
        user.click(screen.getByRole('button', {name: /submit/i }));

        waitFor(() => {
            expect(screen.getByText('Please select account type valid option')).toBeInTheDocument();
            expect(screen.getByText('Please select account ownership valid option')).toBeInTheDocument();
            expect(screen.getByText('Please provide a valid name')).toBeInTheDocument();
            expect(screen.getByText('Please provide a valid deposit')).toBeInTheDocument();
        });
    });

    it('Reset button', () => {
        user.click(screen.getByRole('button', {name: /reset/i }));

        waitFor(() => {
            const dropdownAccountType = screen.getByRole('combobox', {name: /select checking account type/i });
            expect(accountName).toEqual("Select Account Type");
    
            const dropdownAccountOwnership = screen.getByRole('combobox', {name: /select account ownership/i });
            expect(accountName).toEqual("Select Account Ownership");

            const accountName = screen.getByRole('textbox', {name: /account name/i });
            expect(accountName).toEqual("");

            const deposit = screen.getByRole('spinbutton', {name: /initial deposit amount/i });
            expect(deposit).toEqual("");
        });
    });
});