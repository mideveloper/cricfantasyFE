export const REQUEST_TEST = 'REQUEST_TEST';
export const RECIEVE_TEST = 'RECIEVE_TEST';

export const requestTest = () => ({ type: REQUEST_TEST });
export const recieveTest = text => ({ type: RECIEVE_TEST, text });
