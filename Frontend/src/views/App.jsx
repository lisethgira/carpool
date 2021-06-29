// import { CssBaseline, makeStyles } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Switch } from "react-router"

// const useStyles = makeStyles(appStyles);

export default function App({ window, history }) {
    const data = useSelector(({ login }) => login.data)
    console.log(data)
    console.log("dkhf")
    useEffect(() => {
        if (!data) history.push('/auth/login')
        console.log(data)
    }, [data])

    return (
        <>
            <label > hola</label>
        </>
    )
}