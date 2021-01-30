import React, { useContext, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router'

import SignIn from './components/SignIn.jsx'
import SignUp from './components/SignUp.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'


export default props => {

    return (
        <Switch>
            <Route exact path='/' component={Home} /> 
            <Route path='/signup' component={SignUp} />
            <Route path='/signin' component={SignIn} />
            <Route path='/about' component={About} />
        </Switch>
    )
}
