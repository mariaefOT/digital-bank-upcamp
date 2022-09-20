
const validateAccountName = (accountName) => {
    if (!accountName) {
        return false;
    }
    return true;
}

const validateOpeningDeposit = (openingDeposit) => {
    if (!openingDeposit || openingDeposit < 25) {
        return false;
    }
    return true;
}

const validateOwnerTypeCode = (ownerTypeCode) => {
    if (!ownerTypeCode) {
        return false;
    }
    return true;
}

const validateAccountTypeCode = (accountTypeCode) => {
    if (!accountTypeCode) {
        return false;
    }
    return true;
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