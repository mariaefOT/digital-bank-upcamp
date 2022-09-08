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

        component.getByText(props.name); 

        /*const accountName = component.getByText(props.name);

        expect(accountName).toEqual(props.name);*/
    });
});