import React from 'react';
import {Route,Switch} from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Register from './Register';

export default function AppRouter() {
    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>

                <Route path="/login" exact>
                    <Login/>
                </Route>
                
                <Route path="/register" exact>
                    <Register/>    
                </Route>
            </Switch>
        </div>
    )
}
