import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";
import { screen, waitFor, within } from '@testing-library/dom';
import {BrowserRouter as Router} from 'react-router-dom';
import user from '@testing-library/user-event';

import Transaction from '../components/Transaction';
import  getAccounts  from '../api/index';

const resolvedData = {
    data: [
        {
        id: 190,
        name: "Test account"
        },
    ],
};

describe('Transaction tests', () => {
    const onSubmit = jest.fn();
    jest.mock("../api/index");

    beforeEach(() =>{
        onSubmit.mockClear();
        render(
            <Router>
                <Transaction type={'DPT'}/>
            </Router>
        );
    });

    it('Should render the Deposit form when the Deposit view is loaded', () => {
        const view = render(
            <Router>
                <Transaction type={'DPT'}/>
            </Router>
        );
        expect(view).toBeDefined();

        expect(screen.getByLabelText(/Select Account/i)).toBeTruthy();
        expect(screen.getByLabelText(/Deposit Amount/i)).toBeTruthy();
    });

    it('Should render the Withdrawal form when the Withdrawal view is loaded', () => {
        const view = render(
            <Router>
                <Transaction type={'WTH'}/>
            </Router>
        );
        expect(view).toBeDefined();

        expect(screen.getByLabelText(/Select Account/i)).toBeTruthy();
        expect(screen.getByLabelText(/Withdraw Amount/i)).toBeTruthy();
    });

    it('Should onSubmit is called when all fields pass validation', async () => {
        getAccounts.mockResolvedValue(resolvedData);
        
        const accountDropdown = screen.getByRole('combobox', {name: /Select Account/i });
        user.selectOptions(accountDropdown, within(accountDropdown).getByRole('option', {name: '190'}));

        const amountInput = screen.getByRole('spinbutton', {name: /amount/i });
        user.type(amountInput, '50,00');

        user.click(screen.getByRole('button', {name: /submit/i }));

        await waitFor(() => {
            expect(onSubmit).toHaveBeenCalledTimes(1);
        });
    });

    it('Required fields must be displayed', () => {
        user.click(screen.getByRole('button', {name: /submit/i }));

        waitFor(() => {
            expect(screen.getByText('Please select account')).toBeInTheDocument();
            expect(screen.getByText('Please provide a valid amount')).toBeInTheDocument();
        });
    });

    it('The form should be cleared when calling Reset', () => {
        user.click(screen.getByRole('button', {name: /reset/i }));

        waitFor(() => {
            const accountDropdown = screen.getByRole('combobox', {name: /Select Account/i });
            expect(accountDropdown).toEqual("Select Account");

            const amountInput = screen.getByRole('spinbutton', {name: /amount/i });
            expect(amountInput).toEqual("");
        });
    });
});