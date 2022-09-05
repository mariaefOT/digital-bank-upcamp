import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { create } from "react-test-renderer";
import axios from "axios";

jest.mock("axios");

import CheckingCards from "./CheckingCards";

describe('CheckingCardsAccount', () => {
    it('Render checking cards', () => {
        axios.get.mockReturnValueOnce({
            data: [
                {
                    "id": 131,
                    "name": "Joint Checking",
                    "accountNumber": 486130005,
                    "currentBalance": 739.97,
                    "openingBalance": 2490,
                    "interestRate": 0,
                    "paymentAmount": 0,
                    "paymentTerm": 0,
                    "accountType": {
                        "id": 8,
                        "code": "SCK",
                        "category": "CHK",
                        "name": "Standard Checking",
                        "interestRate": 0,
                        "minDeposit": 25,
                        "overdraftLimit": 25,
                        "overdraftFee": 10
                    },
                    "ownershipType": {
                        "id": 18,
                        "code": "JNT",
                        "name": "Joint"
                    },
                    "accountStanding": {
                        "id": 19,
                        "code": "A1",
                        "name": "Open"
                    },
                    "dateOpened": "2022-06-26T10:05",
                    "dateClosed": null,
                    "paymentDue": null
                },
                {
                    "id": 158,
                    "name": "Pagos",
                    "accountNumber": 486130052,
                    "currentBalance": 345,
                    "openingBalance": 345,
                    "interestRate": 0,
                    "paymentAmount": 0,
                    "paymentTerm": 0,
                    "accountType": {
                        "id": 8,
                        "code": "SCK",
                        "category": "CHK",
                        "name": "Standard Checking",
                        "interestRate": 0,
                        "minDeposit": 25,
                        "overdraftLimit": 25,
                        "overdraftFee": 10
                    },
                    "ownershipType": {
                        "id": 18,
                        "code": "JNT",
                        "name": "Joint"
                    },
                    "accountStanding": {
                        "id": 19,
                        "code": "A1",
                        "name": "Open"
                    },
                    "dateOpened": "2022-09-01T05:17",
                    "dateClosed": null,
                    "paymentDue": null
                }
            ]
        });

        const component = create(<CheckingCards/>);
        expect(component).toBeDefined();
        //expect(component.root.findByType("span")).toBeDefined();
    });
});
