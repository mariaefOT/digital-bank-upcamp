
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
    let isValid = true;

    isValid = validateAccountName(accountName);
    isValid = validateOpeningDeposit(openingDeposit);
    isValid = validateOwnerTypeCode(ownerTypeCode);
    isValid = validateAccountTypeCode(accountTypeCode);

    return isValid;
}