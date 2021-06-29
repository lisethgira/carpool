import React from 'react'

const LazyLogin = React.lazy(() => import("./views/Login/Login"))
const Login = (props) => (<React.Suspense fallback={"Cargando..."}><LazyLogin {...props} /></React.Suspense>)

const LazyApp = React.lazy(() => import("./views/App"))
const App = (props) => (<React.Suspense fallback={"Cargando..."}><LazyApp {...props} /></React.Suspense>)

export const mainRouter = [
    { isPrivate: false, path: '/login', component: Login, exact: true },
    { isPrivate: true, path: '/app', component: App, exact: false }
]