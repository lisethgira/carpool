import { funcionesConstants } from './../constants'

const { LOADING, ERROR, UPDATE, GET_DATA, CREATE, DELETE } = funcionesConstants

const initialState = {
    data: null,
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
        case CREATE:
            return {
                ...state,
                success: true,
                error: null
            }
        case UPDATE:
            return {
                ...state,
                success: true,
                error: null
            }
        case DELETE:
            return {
                ...state,
                success: true,
                error: null
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