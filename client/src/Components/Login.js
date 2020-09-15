import React from 'react'
import Button from './Button'
import Form from "./Form"

import {loginReq} from "../utils/userRequests"
import {loginInputs} from "../utils/userInputs"

export default function login() {
    return (
        <div>
            <h1>Login</h1>

            <Form
                id="loginForm"
                inputs={loginInputs}
                title="User Login"
                submitFunc={loginReq}

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
