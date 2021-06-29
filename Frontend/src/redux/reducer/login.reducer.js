import { loginConstants } from './../constants'

const { LOADING, ERROR, LOGIN, LOGOUT } = loginConstants

const initialState = {
    data: localStorage.getItem(`token`) ? JSON.parse(localStorage.getItem(`token`)) : null,
    loading: false,
    error: null,
    success: false,
    logout: false,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case LOADING:
            return {
                ...state,
                loading: payload
            }
        case ERROR:
            return {
                ...state,
                error: payload
            }
        case LOGIN:
            localStorage.setItem(`token`, JSON.stringify(payload.data))
            return {
                ...state,
                data: payload,
                success: true,
                error: null,
                logout: false
            }
        case LOGOUT:
            localStorage.removeItem(`token`)
            return {
                ...state,
                data: null,
                success: false,
                error: null,
                loading: false,
                logout: payload
            }
        default:
            return {
                ...state
            }
    }
}