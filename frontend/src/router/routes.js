import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Login from '../pages/login/Login';
import Home from '../pages/home/Home';

export default function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/home/:id" component={Home} />
        </BrowserRouter>
    );
}