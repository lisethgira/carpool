import { userService } from '../../services'
import { userConstants } from '../constants'

const { LOADING, ERROR, GET_DATA, UPDATE } = userConstants

const update = (params) => {
    return async dispatch => {
        try {
            dispatch({ type: LOADING, payload: true })
            dispatch({ type: ERROR, payload: null })
            const result = await userService.update(params)
            dispatch({ type: UPDATE, payload: result })
            dispatch({ type: LOADING, payload: false })
        } catch (error) {
            dispatch({ type: LOADING, payload: false })
            dispatch({ type: ERROR, payload: error })
            console.error(error)
        }
    }
}


export const userActions = {
    update
}