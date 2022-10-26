
const validateAmount = (amount) => {
    return !!amount;
}

const validateAccount = (account) => {
    return !!account;
}

export const validateTransaction = (values) => {
    const { amount, account } = values;

    return (validateAccount(account) && validateAmount(amount));
}