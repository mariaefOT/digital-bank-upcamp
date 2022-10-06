import { getAccountsList } from "../reducers/accountsReducer"; 
import { store } from "../reducers/store";

const payload = [
    {
      id: 191,
      name: "Test",
      accountNumber: 486130706,
      currentBalance: 760,
      openingBalance: 760,
      interestRate: 0,
      paymentAmount: 0,
      paymentTerm: 0,
      accountType: {
        id: 10,
        code: "SCK",
        category: "CHK",
        name: "Standard Checking",
        interestRate: 0,
        minDeposit: 25,
        overdraftLimit: 25,
        overdraftFee: 10,
      },
      ownershipType: { id: 18, code: "IND", name: "Individual" },
      accountStanding: { id: 20, code: "A1", name: "Open" },
      dateOpened: "2022-10-04T09:15",
      dateClosed: null,
      paymentDue: null,
    }
];

describe("Redux tests", () => {
    it("The initial state must be empty", () => {
      const state = store.getState().accounts;
      expect(state.accounts).toEqual([]);
    });

    it("You should update the status with the new information", () => {
      store.dispatch(getAccountsList(payload));
      const state = store.getState().accounts;
      expect(state.accounts).toEqual(payload);   
    });
  });