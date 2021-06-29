import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from 'redux-thunk'

import _login from "./reducer/login.reducer"

const mainReducer = combineReducers({
    login: _login
})

export default createStore(mainReducer, applyMiddleware(thunk))