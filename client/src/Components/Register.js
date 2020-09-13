import React from 'react'
import Button from './Button'

export default function register() {
    return (
        <div>
            <h1>Vehicle Registration</h1>
            <Button
            text="Return to Home"
            onClick={()=>{
                window.location=window.location.origin
            }}
            
            ></Button>
            <Button
            text="Login"
            onClick={()=>{
                window.location=window.location.origin + "/login"
            }}
            
            ></Button>
        </div>
    )
}
