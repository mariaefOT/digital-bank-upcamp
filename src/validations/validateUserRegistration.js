
const validateTextNotEmpty = (text) => {
    return !!text;
}

const validateGender = (gender) => {
    return (gender === "M" || gender ==="F") ? true : false;
}

const validateDob = (dob) => {
    const regex = new RegExp("\\d{1,2}/\\d{1,2}/\\d{4}");
    return !!dob && regex.test(dob);
}

const validateSsn = (ssn) => {
    const regex = new RegExp("\\d{3}-?\\d{2}-?\\d{4}$");
    return !!ssn && regex.test(ssn);
}

const validateEmailAddress = (emailAddress) => {
    const regex = new RegExp("^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$");
    return !!emailAddress && regex.test(emailAddress);
}

const validatePassword = (password, confirmPassword) => {
    const regex = new RegExp("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}");
    return !!password && regex.test(password) && password === confirmPassword;
}

const validatePhone = (phone) => {
    const regex = new RegExp("^[+]?([0-9]*[\\.\\s\\-\\(\\)]|[0-9]+){3,24}$");
    return !!phone && regex.test(phone);
}

const validateAgreeTerms = (agreeTerms) => {
    return agreeTerms === "on";
}

export const validateUserRegistration = (values) => {
    const { title, firstName, lastName, gender, dob, ssn, emailAddress, password, address, country, locality, region, homePhone, workPhone, mobilePhone, postalCode, confirmPassword, agreeTerms } = values;
    
    return (validateTextNotEmpty(title) &&
    validateTextNotEmpty(firstName) &&
    validateTextNotEmpty(lastName) &&
    validateGender(gender) &&
    validateDob(dob) &&
    validateSsn(ssn) &&
    validateEmailAddress(emailAddress) &&
    validatePassword(password,confirmPassword) &&
    validateTextNotEmpty(address) &&
    validateTextNotEmpty(country) &&
    validateTextNotEmpty(locality) &&
    validateTextNotEmpty(region) &&
    validatePhone(homePhone) &&
    validatePhone(workPhone) &&
    validatePhone(mobilePhone) &&
    validateTextNotEmpty(postalCode) &&
    validateAgreeTerms(agreeTerms));
}