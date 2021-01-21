import React, { useContext, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router'

import SignUp from './components/SignUp.jsx'
import Home from './components/Home.jsx'


export default props => {

    return (
        <Switch>
            <Route exact path='/' component={Home} /> 
            <Route path='/signup' component={SignUp} />
        </Switch>
    )
}