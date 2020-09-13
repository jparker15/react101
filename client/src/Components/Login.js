import React from 'react'
import Button from './Button'

export default function login() {
    return (
        <div>
            <h1>Login</h1>
            <Button
            text="Return to Home Page"
            onClick={()=>{
                window.location = window.location.origin
            }}
            
            ></Button>
            
        </div>
    )
}
