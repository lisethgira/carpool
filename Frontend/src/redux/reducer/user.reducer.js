import { userConstants } from './../constants'

const { LOADING, ERROR, UPDATE, GET_DATA } = userConstants

const initialState = {
    data: localStorage.getItem(`token`) ? JSON.parse(localStorage.getItem(`token`)) : null,
    loading: false,
    error: null,
    success: false
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
        case UPDATE:
            return {
                ...state,
                success: true,
                error: null,
                data: payload.data
            }
        case GET_DATA:
            return {
                ...state,
                data: payload,
            }
        default:
            return {
                ...state
            }
    }
}