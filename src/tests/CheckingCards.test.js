import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";
import { getAccountsList } from "../reducers/accountsReducer"; 
import { store } from "../reducers/store";
import { Provider } from "react-redux";

import CheckingCards from "../components/CheckingCards";

const accounts = [
    {
        name:'Joint Checking',
        accountType:{
            name:'Standard Checking',
            interestRate: 0
        },
        ownershipType: {
            name:'Joint'
        },
        accountNumber: 3476265,
        currentBalance: 720
    },
    {
        name:'Interest Checking',
        accountType:{
            name:'Interest Checking',
            interestRate: 10
        },
        ownershipType: {
            name:'Individual'
        },
        accountNumber: 2838212,
        currentBalance: 230.50
    }
];

const accountsZero = [];

describe('CheckingCardsAccount tests', () => {
    it('Render checking cards', () => {
        const view = render(
            <Provider store={store}>
                <CheckingCards/>
            </Provider> 
        );

        store.dispatch(getAccountsList(accounts));
        expect(view).toBeDefined();
    });

    it('Render zero checking cards', () => {
        const view = render(
            <Provider store={store}>
                <CheckingCards/>
            </Provider> 
        );

        store.dispatch(getAccountsList(accountsZero));
        expect(view).toBeDefined();
    });
});
