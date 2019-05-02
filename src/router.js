import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Login from './Components/Login/Login';
import Home from './Components/Home/Home';

export default (
    <Switch>
        <Route path='/login' render={() => < Login />} />
        <Route path='/home' render={() => < Home />} />
        <Route component={ Login } />
    </Switch>
)