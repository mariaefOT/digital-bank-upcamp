import React from "react";
import { screen, render } from "@testing-library/react";

import CheckingCards from "./CheckingCards";

describe('CheckingCardsAccount', () => {
    it('must display a checking cards', () => {
        render(<CheckingCards/>)
        expect(screen.queryByText(/Account/i)).toBeInTheDocument()
    });
});

describe('CheckingCardsOwnership', () => {
    it('must display a checking cards', () => {
        render(<CheckingCards/>)
        expect(screen.queryByText(/Ownership/i)).toBeInTheDocument()
    });
});

describe('CheckingCardsAccount Number', () => {
    it('must display a checking cards', () => {
        render(<CheckingCards/>)
        expect(screen.queryByText(/Account Number/i)).toBeInTheDocument()
    });
});

describe('CheckingCardsInterest Rate', () => {
    it('must display a checking cards', () => {
        render(<CheckingCards/>)
        expect(screen.queryByText(/Interest Rate/i)).toBeInTheDocument()
    });
});

describe('CheckingCardsBalance', () => {
    it('must display a checking cards', () => {
        render(<CheckingCards/>)
        expect(screen.queryByText(/Balance/i)).toBeInTheDocument()
    });
});
