import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'

import AccountCard from './AccountCard'

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
    it('Render the AccountCard component with the specified props', () => {
        const component = render(<AccountCard item={props}/>);
        expect(component).toBeDefined();

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
    });
});