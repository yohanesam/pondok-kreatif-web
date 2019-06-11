
export const IS_LOGIN = "IS_LOGIN";
export const IS_REGISTERED = "IS_REGISTERED";
export const REQUEST_LOGIN = "REQUEST_LOGIN";
export const REQUEST_REGISTER = "REQUEST_REGISTER";
export const FETCH_USER_DATA = "FETCH_USER_DATA";

export const isLogin = () => ({
    type: IS_LOGIN
})

export const isRegister = () => ({
    type: IS_REGISTERED
})

export const requestLogin = (login) => ({
    type: REQUEST_LOGIN,
    login : login
})

export const requestRegiser = (register) => ({
    type: REQUEST_LOGIN,
    register: register
})

