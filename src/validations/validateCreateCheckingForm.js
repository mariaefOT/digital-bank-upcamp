
const validateAccountName = (accountName) => {
    return !!accountName;
}

const validateOpeningDeposit = (openingDeposit) => {
    return !!openingDeposit && openingDeposit >= 25;
}

const validateOwnerTypeCode = (ownerTypeCode) => {
    return !!ownerTypeCode;
}

const validateAccountTypeCode = (accountTypeCode) => {
    return !!accountTypeCode;
}

export const validateForm = (values) => {
    const { accountName, accountTypeCode, openingDeposit, ownerTypeCode } = values;

    return (validateAccountName(accountName) && 
        validateOpeningDeposit(openingDeposit) && 
        validateOwnerTypeCode(ownerTypeCode) && 
        validateAccountTypeCode(accountTypeCode));
}