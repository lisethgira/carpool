import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from 'redux-thunk'

import _login from "./reducer/login.reducer"
import _user from "./reducer/user.reducer"
import _funciones from "./reducer/funciones.reducer"

const mainReducer = combineReducers({
    login: _login,
    user: _user,
    functions: _funciones
})

export default createStore(mainReducer, applyMiddleware(thunk))