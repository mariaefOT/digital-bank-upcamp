import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from "@testing-library/react"

import CheckingCards from "./CheckingCards";

describe('CheckingCardsAccount test', () => {
    it('Render checking cards', () => {
        const component = render(<CheckingCards/>);
        expect(component).toBeDefined();
    });
});
