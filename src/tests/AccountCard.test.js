import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { screen, waitFor } from '@testing-library/react'
import user from '@testing-library/user-event'
import userEvent from '@testing-library/user-event'

import AccountCard from '../components/AccountCard'

const props = {
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
}

describe('AccountCard test', () => {
    const deleteButton = jest.fn();
    const acceptDelete = jest.fn();
    const cancelDelete = jest.fn();

    it('Render the AccountCard component with the specified props for User', () => {
        const component = render(<AccountCard item={props} admin={false}/>);
        expect(component).toBeDefined();

        verifyCardContent(component);

        const button = component.queryByTestId(/btn-delete/i);
        expect(button).toBeFalsy();
    });

    it('Render the AccountCard component with the specified props for Admin', () => {
        const component = render(<AccountCard item={props} admin={true}/>);
        expect(component).toBeDefined();

        verifyCardContent(component);

        expect(component.getByRole('button', {name: /delete/i })).toBeTruthy();
    });

    it('The account should be deleted when selecting delete', async () => {
        const component = render(<AccountCard item={props} admin={true}/>);
        
        const accountName = component.getByText(props.name);
        expect(accountName).toHaveTextContent(props.name);

        const typeName = component.getByText(/Standard Checking/i);
        expect(typeName).toHaveTextContent(props.accountType.name);

        const typeInterestRate = component.getByText(/Interest Rate: 0%/i);
        expect(typeInterestRate).toHaveTextContent(props.accountType.interestRate);

        const ownershipName = component.getByText(/Ownership: Joint/i);
        expect(ownershipName).toHaveTextContent(props.ownershipType.name);

        const accountNumber = component.getByText(/3476265/i);
        expect(accountNumber).toHaveTextContent(props.accountNumber);

        const currentBalance = component.getByText(/720/i);
        expect(currentBalance).toHaveTextContent(props.currentBalance);

        user.click(screen.getByRole('button', {name: /delete/i }));
        
        const modal = component.getByText(/delete account/i);
        expect(modal).toHaveTextContent('Delete Account');

        user.click(screen.getByRole('button', {name: /save changes/i }));

        waitFor(() => {
            expect(deleteButton).toHaveBeenCalledTimes(1);
            expect(acceptDelete).toHaveBeenCalledTimes(1);
            expect(cancelDelete).toHaveBeenCalledTimes(0);
        });

        expect(accountName).not.toBeInTheDocument;
        expect(typeName).not.toBeInTheDocument;
        expect(typeInterestRate).not.toBeInTheDocument;
        expect(ownershipName).not.toBeInTheDocument;
        expect(accountNumber).not.toBeInTheDocument;
        expect(currentBalance).not.toBeInTheDocument;
    });

    it('The account should be not deleted when selecting cancel', async () => {
        const component = render(<AccountCard item={props} admin={true}/>);
        
        const accountName = component.getByText(props.name);
        expect(accountName).toHaveTextContent(props.name);

        const typeName = component.getByText(/Standard Checking/i);
        expect(typeName).toHaveTextContent(props.accountType.name);

        const typeInterestRate = component.getByText(/Interest Rate: 0%/i);
        expect(typeInterestRate).toHaveTextContent(props.accountType.interestRate);

        const ownershipName = component.getByText(/Ownership: Joint/i);
        expect(ownershipName).toHaveTextContent(props.ownershipType.name);

        const accountNumber = component.getByText(/3476265/i);
        expect(accountNumber).toHaveTextContent(props.accountNumber);

        const currentBalance = component.getByText(/720/i);
        expect(currentBalance).toHaveTextContent(props.currentBalance);

        user.click(screen.getByRole('button', {name: /delete/i }));
        
        const modal = component.getByText(/delete account/i);
        expect(modal).toHaveTextContent('Delete Account');

        user.click(screen.getByRole('button', {name: /cancel/i }));

        waitFor(() => {
            expect(deleteButton).toHaveBeenCalledTimes(1);
            expect(cancelDelete).toHaveBeenCalledTimes(1);
            expect(acceptDelete).toHaveBeenCalledTimes(0);
        });

        expect(accountName).toHaveTextContent(props.name);
        expect(typeName).toHaveTextContent(props.accountType.name);
        expect(typeInterestRate).toHaveTextContent(props.accountType.interestRate);
        expect(ownershipName).toHaveTextContent(props.ownershipType.name);
        expect(accountNumber).toHaveTextContent(props.accountNumber);
        expect(currentBalance).toHaveTextContent(props.currentBalance);
    });

    it('Should update the name when changing it', async () => {
        const component = render(<AccountCard item={props} admin={false}/>);

        const accountName = component.getByText(props.name);
        expect(accountName).toHaveTextContent(props.name);

        const element = screen.getByText(props.name);
        await userEvent.click(element);
        await userEvent.keyboard(" Edited");
        element.blur()
        expect(element.textContent).toBe("Joint Checking Edited");
    });

    it('Should not update the name when not change', async () => {
        const component = render(<AccountCard item={props} admin={false}/>);

        const accountName = component.getByText(props.name);
        expect(accountName).toHaveTextContent(props.name);

        const element = screen.getByText(props.name);
        await userEvent.click(element);
        await userEvent.keyboard("");
        element.blur()
        expect(element.textContent).toBe("Joint Checking");
    });
});

const verifyCardContent = (component) => {
    const accountName = component.getByText(props.name);
    expect(accountName).toHaveTextContent(props.name);

    const typeName = component.getByText(/Standard Checking/i);
    expect(typeName).toHaveTextContent(props.accountType.name);

    const typeInterestRate = component.getByText(/Interest Rate: 0%/i);
    expect(typeInterestRate).toHaveTextContent(props.accountType.interestRate);

    const ownershipName = component.getByText(/Ownership: Joint/i);
    expect(ownershipName).toHaveTextContent(props.ownershipType.name);

    const accountNumber = component.getByText(/3476265/i);
    expect(accountNumber).toHaveTextContent(props.accountNumber);

    const currentBalance = component.getByText(/720/i);
    expect(currentBalance).toHaveTextContent(props.currentBalance);
}