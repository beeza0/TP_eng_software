import React, { useContext, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router'

import SignIn from './components/SignIn.jsx'
import SignUp from './components/SignUp.jsx'
import Home from './components/Home.jsx'
import Bikes from './components/Bikes.jsx'
import Rents from './components/Rents.jsx'


export default props => {

    return (
        <Switch>
            <Route exact path='/' component={Home} /> 
            <Route path='/signup' component={SignUp} />
            <Route path='/signin' component={SignIn} />
            <Route path='/bikes' component={Bikes} />
            <Route path='/rents' component={Rents} />
        </Switch>
    )
}
