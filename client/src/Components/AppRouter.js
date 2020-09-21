import React from 'react';
import {Route,Switch} from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Register from './Register';
import useLocalStorage from './useLocalStorage';

export default function AppRouter() {

    const [name,setName] = useLocalStorage("name", "")

    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                    <input/>
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
