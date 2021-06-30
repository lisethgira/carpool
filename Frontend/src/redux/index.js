import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from 'redux-thunk'

import _login from "./reducer/login.reducer"
import _user from "./reducer/user.reducer"

const mainReducer = combineReducers({
    login: _login,
    user: _user
})

export default createStore(mainReducer, applyMiddleware(thunk))