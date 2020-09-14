import React from 'react'
import Button from './Button'

export default function home() {
    return (
        <div>
            <h1>Casa Page</h1>
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
