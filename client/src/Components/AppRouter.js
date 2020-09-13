import React from 'react';
import {Route,Switch} from "react-router-dom";
import Button from './Button';
import Home from './Home';
import Login from './Login';
import Register from './Register';

export default function AppRouter() {
    return (
        <div>
            <nav></nav>
            <Button
            text="Back to Home"
            onClick = {() =>{
                window.location = window.location.origin
            }}
            />
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
