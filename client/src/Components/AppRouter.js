import React from 'react';
import {Route,Switch} from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Register from './Register';
import useTheme from "../hooks/useTheme";
import Control from "./Control";

export default function AppRouter() {

    const [theme,setTheme] = useTheme(true)

    return (
        <div>

            <h1>
                {theme ? "light mode":"dark mode"}
            </h1>

            <button 
                onClick={()=>{
                    setTheme( prevTheme => {
                        return !prevTheme
                    })
                }}
            >
                {!theme ? "Switch to Light":"Switch to Dark"}
            </button>

            <Control/>
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
