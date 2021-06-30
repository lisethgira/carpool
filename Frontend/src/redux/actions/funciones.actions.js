import { funcionesService } from '../../services'
import { funcionesConstants } from '../constants'

const { LOADING, ERROR, GET_DATA, UPDATE, CREATE, DELETE } = funcionesConstants

const create = (params) => {
    return async dispatch => {
        try {
            dispatch({ type: LOADING, payload: true })
            dispatch({ type: ERROR, payload: null })
            const result = await funcionesService.create(params)
            dispatch({ type: CREATE, payload: result })
            dispatch({ type: LOADING, payload: false })
        } catch (error) {
            dispatch({ type: LOADING, payload: false })
            dispatch({ type: ERROR, payload: error })
            console.error(error)
        }
    }
}

const update = (params) => {
    return async dispatch => {
        try {
            dispatch({ type: LOADING, payload: true })
            dispatch({ type: ERROR, payload: null })
            const result = await funcionesService.update(params)
            dispatch({ type: UPDATE, payload: result })
            dispatch({ type: LOADING, payload: false })
        } catch (error) {
            dispatch({ type: LOADING, payload: false })
            dispatch({ type: ERROR, payload: error })
            console.error(error)
        }
    }
}

const getData = (params) => {
    return async dispatch => {
        try {
            dispatch({ type: LOADING, payload: true })
            dispatch({ type: ERROR, payload: null })
            const result = await funcionesService.update(params)
            dispatch({ type: GET_DATA, payload: result })
            dispatch({ type: LOADING, payload: false })
        } catch (error) {
            dispatch({ type: LOADING, payload: false })
            dispatch({ type: ERROR, payload: error })
            console.error(error)
        }
    }
}

const cancel = (params) => {
    return async dispatch => {
        try {
            dispatch({ type: LOADING, payload: true })
            dispatch({ type: ERROR, payload: null })
            const result = await funcionesService.cancel(params)
            dispatch({ type: DELETE, payload: result })
            dispatch({ type: LOADING, payload: false })
        } catch (error) {
            dispatch({ type: LOADING, payload: false })
            dispatch({ type: ERROR, payload: error })
            console.error(error)
        }
    }
}

export const funcionesActions = {
    create,
    update,
    getData,
    cancel
}