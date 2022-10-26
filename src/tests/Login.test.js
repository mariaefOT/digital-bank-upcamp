import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";
import { screen, waitFor } from '@testing-library/dom';
import {BrowserRouter as Router} from 'react-router-dom';
import user from '@testing-library/user-event'

import Login from "../components/Login";

describe('Login tests', () => {
    const onSubmit = jest.fn();
    const mockedUsedNavigate = jest.fn();

    jest.mock("react-router-dom", () => ({
        ...jest.requireActual("react-router-dom"),
        useNavigate: () => mockedUsedNavigate,
    }));      

    beforeEach(() =>{
        onSubmit.mockClear();
        render(
            <Router>
                <Login/>
            </Router>
        );
    });

    it('Should render the Login when the login page is loaded', () => {
        const view = render(
            <Router>
                <Login/>
            </Router>
        );
        expect(view).toBeDefined();

        expect(screen.getByLabelText(/User Name/i)).toBeTruthy();
        expect(screen.getByLabelText(/Password/i)).toBeTruthy();
    });

    it('Should log in when the "Sign In" button is pressed', () => {
        const usernameInput = screen.getByRole('textbox', {name: /user name/i });
        user.type(usernameInput, 'jsmith@demo.io');

        const passwordInput = screen.getByLabelText(/password/i);
        user.type(passwordInput, 'Demo123!');

        user.click(screen.getByRole('button', {name: /SIGN IN/i }));

        waitFor(() => {
            expect(onSubmit).toHaveBeenCalledTimes(1);
            expect(mockedUsedNavigate).toHaveBeenCalledWith("/home");
        });
    });

    it('"Should show an error message when the credentials are invalid when the login form fields are empty"', () => {
        user.click(screen.getByRole('button', {name: /SIGN IN/i }));

        waitFor(() => {
            expect(screen.getByText('Failed to login! Check your credentials please.')).toBeInTheDocument();
            expect(screen.getByText('Please provide a valid user name. It should look something like example@bank.io')).toBeInTheDocument();
            expect(screen.getByText('Please provide a valid password. Remember that it must be 8 characters or more')).toBeInTheDocument();
            expect(mockedUsedNavigate).toHaveBeenCalledTimes(0);
        });
    });
});