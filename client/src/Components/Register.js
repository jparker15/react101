import React from 'react'
import Button from './Button'
import Form from './Form'

import {registInputs} from "../utils/userInputs"
import {register} from "../utils/userRequests"

export default function Register() {
    return (
        <div style={{backgroundColor:"#777",display:"flex",alignItems:"center", justifyContent:"center"}}>
            <h1>Vehicle Registration</h1>

            <Form
                id="registerForm"
                title="Register"
                inputs={registInputs}
                submitText="Submit Registeration"
            />
            <br/>
            <br/>
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
