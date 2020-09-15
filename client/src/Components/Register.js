import React from 'react'
import Button from './Button'
import Form from './Form'

import {registInputs} from "../utils/userInputs"
import {registReq} from "../utils/userRequests"

export default function register() {
    return (
        <div>
            <h1>Vehicle Registration</h1>

            <Form
                id="registerForm"
                title="Register"
                inputs={registInputs}
                submitFunc={registReq}
            />
            <Button
            text="Return to Home"
            onClick={()=>{
                window.location="/"
            }}
            
            ></Button>
            <Button
            text="Already a User? Login"
            onClick={()=>{
                window.location="/login"
            }}
            
            ></Button>
        </div>
    )
}
