import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Login from './Components/Login/Login';

export default (
    <Switch>
        <Route path='/login' render={() => < Login />} />
        {/* <Route path='/home' render={() => < Home/ >} /> */}
        <Route component={Login} />
    </Switch>
)