import React from 'react'
import Button from './Button'
import useTheme from "../hooks/useTheme"


export default function Home() {
    return (
        <div 
        
        >
            <h1>Casa Page</h1>
            <h5>{useTheme() ? "light":"dark"}</h5>
            <Button 
            text="Register"
            onClick={() =>{
                window.location = window.location.origin + "/register"
            }}
            ></Button>
            <Button 
            text="Login"
            onClick={() =>{
                window.location = window.location.origin + "/login"
            }}
            ></Button>
        </div>
    )
}
