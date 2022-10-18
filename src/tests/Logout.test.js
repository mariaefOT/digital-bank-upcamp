import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";
import { screen, waitFor } from '@testing-library/dom';
import {BrowserRouter as Router} from 'react-router-dom';
import user from '@testing-library/user-event'

import Logout from "../components/Logout";

describe('Logout tests', () => {
    const logoutBtn = jest.fn();
    const yesModalBtn = jest.fn();
    const noModalBtn = jest.fn();
    const mockedUsedNavigate = jest.fn();

    jest.mock("react-router-dom", () => ({
        ...jest.requireActual("react-router-dom"),
        useNavigate: () => mockedUsedNavigate,
    }));

    it('Should log out successfully after pressing the logout confirmation button', async () => {
        const view = render(
            <Router>
                <Logout/>
            </Router>
        );
        expect(view).toBeDefined();

        user.click(screen.getByRole('button', {name: /LOGOUT/i }));

        const modal = view.getByText(/Do you really want to log out/i);
        expect(modal).toHaveTextContent('Do you really want to log out?');

        user.click(screen.getByRole('button', {name: /yes/i }));

        waitFor(() => {
            expect(logoutBtn).toHaveBeenCalledTimes(1);
            expect(yesModalBtn).toHaveBeenCalledTimes(1);
            expect(noModalBtn).toHaveBeenCalledTimes(0);
            expect(mockedUsedNavigate).toHaveBeenCalledWith("/");
        });
    });

    it('Should cancel logout', () => {
        const view = render(
            <Router>
                <Logout/>
            </Router>
        );
        expect(view).toBeDefined();

        user.click(screen.getByRole('button', {name: /LOGOUT/i }));

        const modal = view.getByText(/Do you really want to log out/i);
        expect(modal).toHaveTextContent('Do you really want to log out?');

        user.click(screen.getByRole('button', {name: /no/i }));

        waitFor(() => {
            expect(logoutBtn).toHaveBeenCalledTimes(1);
            expect(yesModalBtn).toHaveBeenCalledTimes(0);
            expect(noModalBtn).toHaveBeenCalledTimes(1);
            expect(mockedUsedNavigate).toHaveBeenCalledTimes(0);
        });
    });
});