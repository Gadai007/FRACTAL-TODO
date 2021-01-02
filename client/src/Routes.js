import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Signin from './components/Signin'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/signin' exact component={Signin}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
