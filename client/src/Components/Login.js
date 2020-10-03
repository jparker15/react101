import React from 'react'
import Button from './Button'
import Form from "./Form"

import { login } from "../utils/userRequests"
import { loginInputs } from "../utils/userInputs"

export default function Login() {
    return (
        <div>
            <h1>Login</h1>

            <Form
                id="loginForm"
                inputs={loginInputs}
                title="User Login"
                request={login}
                submitText= "Submit Login"
                

            />

            <br/>
            <Button
            text="Return to Home Page"
            onClick={()=>{
                window.location = window.location.origin
            }}
            
            ></Button>
            
        </div>
    )
}
