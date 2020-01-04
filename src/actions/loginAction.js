export const OPEN_LOGIN_DIALOG = 'OPEN_LOGIN_DIALOG';
export const CLOSE_LOGIN_DIALOG = 'CLOSE_LOGIN_DIALOG';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const openLoginDialog = () => ({ type: OPEN_LOGIN_DIALOG });
export const closeLoginDialog = () => ({ type: CLOSE_LOGIN_DIALOG });

export const login = payload => ({ type: LOGIN, payload });
export const loginSuccess = () => ({ type: LOGIN_SUCCESS });
export const loginFail = () => ({ type: LOGIN_FAIL });
