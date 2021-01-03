import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import PrivateRoutes from './auth/PrivateRoutes'
import Bucket from './components/Bucket'
import Home from './components/Home'
import Signin from './components/Signin'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/signin' exact component={Signin}/>
                <PrivateRoutes path='/bucket' exact component={Bucket}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
