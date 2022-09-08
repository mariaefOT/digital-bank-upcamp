import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'

import Cards from './AccountCard'

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

describe('Cards test', () => {
    it('Render the Cards component with the specified props', () => {
        const component = render(<Cards item={props}/>);
        expect(component).toBeDefined();

        component.getByText(props.name); 
    });
});