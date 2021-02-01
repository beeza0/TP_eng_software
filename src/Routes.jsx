import React from 'react'
import { Switch, Route } from 'react-router'

import SignIn from './components/SignIn.jsx'
import SignUp from './components/SignUp.jsx'
import Home from './components/Home.jsx'
import Bikes from './components/Bikes.jsx'
import Rents from './components/Rents.jsx'
import Users from './components/Users.jsx'


export default () => {

    return (
        <Switch>
            <Route exact path='/' component={Home} /> 
            <Route path='/signup' component={SignUp} />
            <Route path='/signin' component={SignIn} />
            <Route path='/bikes' component={Bikes} />
            <Route path='/rents' component={Rents} />
            <Route path='/users' component={Users} />
        </Switch>
    )
}
