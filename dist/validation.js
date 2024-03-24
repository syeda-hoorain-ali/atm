//* Function to validate user pin
export const validatePin = (input) => {
    const number = parseInt(input, 10);
    if ((number <= 999) || (number > 9999) || (isNaN(number))) {
        return `Please enter a valid pin.`;
    }
    return true;
};
//* Function to validate user id/name
export const validateName = (input) => {
    if (input == '') {
        return "Please enter a valid username.";
    }
    return true;
};
//* Function to validate amount user wants to transfer /deposit /withdraw
export const validateAmount = (input) => {
    const number = parseInt(input, 10);
    if ((isNaN(number)) || (number < 0)) {
        return `Please enter a valid amount.`;
    }
    if (!(number % 500 === 0)) {
        return `Please enter a amount in multiple of 500.`;
    }
    return true;
};
//* Function to validate account that user wants to transfer amount
export const validateAccount = (input) => {
    const number = parseInt(input, 10);
    if ((isNaN(number)) || (number <= 9999999999) || (number > 99999999999)) {
        return `Please enter a valid account number.`;
    }
    return true;
};
