import { loginService } from '../../services'
import { loginConstants } from '../constants'

const { LOADING, ERROR, LOGIN, LOGOUT } = loginConstants

const login = (params) => {
    return async dispatch => {
        try {
            dispatch({ type: LOADING, payload: true })
            dispatch({ type: ERROR, payload: null })
            const userData = await loginService.login(params)
            dispatch({ type: LOGIN, payload: userData })
            dispatch({ type: LOADING, payload: false })
            
        } catch (error) {
            dispatch({ type: LOADING, payload: false })
            dispatch({ type: ERROR, payload: error })
            console.error(error)
        }
    }
}

const logout = () => async dispatch => dispatch({ type: LOGOUT, payload: true})

export const loginActions = {
    login,
    logout
}