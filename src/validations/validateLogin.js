
const validateUserName = (username) => {
    const regex =  /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    return !!username && regex.test(username);
}

const validatePassword = (pass) => {
    return !!pass && pass.length >= 8;
}

export const validateLoginForm = (values) => {
    const { username, password } = values;
    let isValid = true;

    isValid = validateUserName(username);
    isValid = validatePassword(password);

    return isValid;
}