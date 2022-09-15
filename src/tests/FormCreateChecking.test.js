import '@testing-library/jest-dom/extend-expect'
import { render } from "@testing-library/react"

import FormCreateChecking from '../components/FormCreateChecking'

describe('FormCreateChecking test', () => {
    it('Render form', () => {
        const component = render(<FormCreateChecking/>);
        expect(component).toBeDefined();
    });
});